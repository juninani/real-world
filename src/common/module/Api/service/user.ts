import { AxiosRequestConfig } from "axios";
import { post, IResponse } from "@/common/module/api/axios-util";
import {
  addUser,
  userLogin,
  userInfo,
} from "@/common/module/api/interface/user";

const GET_USER_LOGIN = `/users/login`;

const POST_ADD_USER = `/users`;

class UserAPI {
  PostAddUse = async (
    data: { user: addUser },
    config?: AxiosRequestConfig
  ): Promise<IResponse> => {
    try {
      const res = await post(POST_ADD_USER, data, { ...config });
      return res.data;
    } catch (e: any) {
      return e.response.data;
    }
  };

  LoginUserData = async (
    data: { user: userLogin },
    config?: AxiosRequestConfig
  ): Promise<userInfo> => {
    try {
      const res = await post(GET_USER_LOGIN, data, { ...config });
      console.log(res);
      return res.data;
    } catch (e: any) {
      return e.response.data;
    }
  };
}

export default new UserAPI();
