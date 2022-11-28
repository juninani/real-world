import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { userLogin } from "@/common/module/api/interface/user";
import User from "@/common/module/api/service/user";
import { setToken } from "@/common/module/token";
import { userAccountStatus } from "@/common/module/Store/commonRecoil";
import { useNavigate } from "react-router-dom";
import Userlayout from "./user-layout";

const SignIn = () => {
  const [loginData, setLoginData] = useState<userLogin>({
    email: "",
    password: "",
  });
  const navigator = useNavigate();
  const [, setAccountState] = useRecoilState(userAccountStatus);
  const [err, setErr] = useState<{}>({});
  const LoginUserData = async (data: userLogin) => {
    const res = await User.LoginUserData({ user: data });
    if (!res.errors) {
      setToken("token", res.user.token);
      setAccountState(true);
      navigator("/");
      return;
    }
    setErr(res.errors);
  };

  const setUserData = (key: string, value: string) => {
    setLoginData({ ...loginData, [key]: value });
  };

  const singInSubmit = () => {
    setErr("");
    LoginUserData(loginData);
  };

  return (
    <Userlayout
      title="Sign in"
      onChange={setUserData}
      onClick={singInSubmit}
      errors={err}
    />
  );
};

export default SignIn;
