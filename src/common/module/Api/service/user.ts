import { AxiosRequestConfig } from "axios";
import {
  post,
  get,
  put,
  destroy,
  IResponse,
} from "@/common/module/Api/axios-util";
import { addUser } from "@/common/module/Api/interface/user";
const POST_ADD_USER = `/users`;

class UserAPI {
  PostAddUse = async (
    data: addUser,
    config?: AxiosRequestConfig
  ): Promise<IResponse> => {
    console.log(data, "data");
    try {
      const res = await post(POST_ADD_USER, data, { ...config });
      return res.data;
    } catch (e: any) {
      return e.response.data;
    }
  };
}

export default new UserAPI();
