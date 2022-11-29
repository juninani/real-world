import { AxiosRequestConfig } from "axios";
import { post, IResponse, put } from "@/common/module/api/axios-util";
import {
  addUser,
  userLogin,
  userInfo,
  userUpdate,
} from "@/common/module/api/interface/user";
import { getToken } from "../../token";

const GET_USER_LOGIN = `/users/login`;
const POST_ADD_USER = `/users`;
const PUT_USER_DATA = "/user";

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
      return res.data;
    } catch (e: any) {
      return e.response.data;
    }
  };

  UpdateUser = async (
    data: { user: userUpdate },
    config?: AxiosRequestConfig
  ): Promise<IResponse> => {
    try {
      const res = await put(PUT_USER_DATA, data, {
        ...config,
        headers: {
          Authorization: `Token ${getToken}`,
        },
      });
      return res.data;
    } catch (e: any) {
      return e.response.data;
    }
  };
}

export default new UserAPI();
