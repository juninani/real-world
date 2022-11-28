import React, { useState } from "react";
import User from "@/common/module/api/service/user";
import Userlayout from "./user-layout";
import { addUser } from "@/common/module/api/interface/user";

const SignUp = () => {
  const [userData, setUserData] = useState<addUser>({
    username: "",
    email: "",
    password: "",
  });
  const postSignUp = async (data: addUser) => {
    const res = await User.PostAddUse({ user: data });
    if (!res.errors) {
      alert("회원가입 성공");
      return;
    }
    alert("회원가입 실패");
  };
  const inputData = (key: string, value: string) => {
    setUserData({ ...userData, [key]: value });
  };
  const signUpSumit = () => {
    postSignUp(userData);
  };

  return (
    <Userlayout
      title="Sign up"
      name
      onClick={signUpSumit}
      onChange={inputData}
    />
  );
};

export default SignUp;
