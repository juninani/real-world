import { AxiosRequestConfig } from "axios";
import { post, IResponse } from "@/common/module/api/axios-util";
import { addUser } from "@/common/module/api/interface/user";

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
}

export default new UserAPI();
