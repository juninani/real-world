import React, { useState } from "react";
import { addUser } from "@/common/module/api/interface/user";
import User from "@/common/module/api/service/user";
import Userlayout from "./user-layout";

const SignUp = () => {
  const [userData, setUserData] = useState<addUser>({
    username: "",
    email: "",
    password: "",
  });
  const postSignUp = async (data: addUser) => {
    const res = await User.PostAddUse({ user: data });
    if (res.code === 200) {
      alert("회원가입 성공");
      return;
    } else {
      alert("회원가입 실패");
    }
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
