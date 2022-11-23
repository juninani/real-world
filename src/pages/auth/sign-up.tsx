import React, { useState } from "react";
import User from "@/common/module/Api/service/user";
import Userlayout from "./user-layout";
import { addUser } from "@/common/module/Api/interface/user";

const SignUp = () => {
  const [userData, setUserData] = useState<addUser>({
    name: "",
    email: "",
    password: "",
  });
  const postSignUp = async (data: addUser) => {
    const res = await User.PostAddUse(data);
    if (res.code === 201) {
      console.log("회언가입 성공");
    } else {
      console.log("회원가입 실패");
    }
  };
  const inputData = (key: string, value: string) => {
    console.log("key", key, "value:", "value:", value);
    setUserData({ ...userData, [key]: value });
  };
  const btnHander = () => {
    postSignUp(userData);
  };

  return (
    <Userlayout title="Sign up" onClick={btnHander} onChange={inputData} />
  );
};

export default SignUp;
