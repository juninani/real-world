import { AxiosRequestConfig } from "axios";
import {
  IResponse,
  defaultResponse,
  post,
  destroy,
} from "@/common/module/api/axios-util";

import { getToken } from "../../token";

const PROFILE_FOLLOW = "/profiles/{USERNAME}/follow";

class ProfileAPI {
  postFollow = async (
    userName: string,
    config?: AxiosRequestConfig
  ): Promise<IResponse> => {
    try {
      console.log(userName, "naem");
      const res = await post(
        PROFILE_FOLLOW.replace("{USERNAME}", userName),
        null,
        {
          ...config,
          headers: {
            Authorization: `Token ${getToken()}`,
          },
        }
      );
      console.log(res, "rss");
      return res;
    } catch (e) {
      console.error(e);
    }
    return defaultResponse;
  };
  delFollow = async (
    userName: string,
    config?: AxiosRequestConfig
  ): Promise<IResponse> => {
    try {
      const res = await destroy(
        PROFILE_FOLLOW.replace("{USERNAME}", userName),
        {
          ...config,
          headers: {
            Authorization: `Token ${getToken()}`,
          },
        }
      );
      console.log(res, "rss");
      return res;
    } catch (e) {
      console.error(e);
    }
    return defaultResponse;
  };
}

export default new ProfileAPI();
