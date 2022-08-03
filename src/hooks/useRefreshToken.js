import axios from "../axios";

const useRefreshToken = () => {
  const refresh = localStorage.getItem("refresh");

  const getAccess = async () => {
    try {
      const { data } = await axios.post("auth/jwt/refresh/", {
        refresh: refresh,
      });
      localStorage.removeItem("access");
      localStorage.setItem("access", data.access);

      return data.access;
    } catch (error) {
      return error.message;
    }
  };
  return getAccess;
};

export default useRefreshToken;
