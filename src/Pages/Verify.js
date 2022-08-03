import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { verifyUserAction } from "../features/auth/action";

const Verify = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { access } = useSelector((state) => state.Auth);

  useEffect(() => {
    dispatch(
      verifyUserAction({
        uid: params.uid,
        token: params.token,
      })
    );
  }, [dispatch, params]);

  if (access) return <Navigate to="/" />;

  if (localStorage.getItem("redirect")) return <Navigate to="/user/sign-in" />;
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <span className="flex flex-col items-center justify-center">
        <h1 className="uppercase">Activating</h1>
        <h1>Please Wait...</h1>
        <TailSpin width={38} height={38} color="blue" />
      </span>
    </div>
  );
};

export default Verify;
