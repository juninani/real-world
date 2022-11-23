import React, { useState } from "react";
import Userlayout from "./user-layout";
import { userLogin } from "@/common/module/Api/interface/user";
const SignIn = () => {
  const [loginData, setLoginData] = useState<userLogin>({
    email: "",
    password: "",
  });

  const getUserData = async (data: userLogin) => {};

  const setUserData = (key: string, value: string) => {
    setLoginData({ ...loginData, [key]: value });
  };

  const singInSubmit = () => {
    getUserData(loginData);
  };

  return (
    <Userlayout title="Sign in" onChange={setUserData} onClick={singInSubmit} />
  );
};

export default SignIn;
