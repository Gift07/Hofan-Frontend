import { useEffect } from "react"
import { axiosPrivate } from "../axios"
import useRefreshToken from "./useRefreshToken"

const useAxiosPrivate = () => {
    const refresh = useRefreshToken()
    const accessToken = localStorage.getItem("access")

    useEffect(()=>{
        const requestInterceptor = axiosPrivate.interceptors.request.use(
            config => {
                console.log(config)
                if (typeof config.headers === "undefined"){
                    return Promise.reject("undefined")
                }
                if(!config.headers["Authorization"]){
                    config.headers['Authorization'] = `Bearer ${accessToken}`
                }
                return config
            }, (error) =>Promise.reject(error)
        )

        const responseInterceptors = axiosPrivate.interceptors.response.use(
            response => response,
            async(error) =>{
                const prevRequest = error?.config;
                console.log(error)
                if(error?.message === "Request failed with status code 401"&& !prevRequest?.sent){
                    prevRequest.sent = true
                    const access = await refresh()

                    prevRequest.headers['Authorization'] = `Bearer ${access}`

                    return axiosPrivate(prevRequest)
                }
                return Promise.reject(error)
            }
        )

        return ()=>{
            axiosPrivate.interceptors.response.eject(responseInterceptors)
            axiosPrivate.interceptors.request.eject(requestInterceptor)
        }
    }, [refresh, accessToken])
  return axiosPrivate
}

export default useAxiosPrivate