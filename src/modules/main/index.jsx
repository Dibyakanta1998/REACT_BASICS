import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Main({ isLogin = false }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/signIn");
    } else {
      navigate("/home");
    }
  }, [isLogin]);

  return <></>;
}
