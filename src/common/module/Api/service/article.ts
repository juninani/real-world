import { AxiosRequestConfig } from "axios";
import {
  get,
  IResponse,
  defaultResponse,
} from "@/common/module/api/axios-util";
import {
  IGetArticleListAll,
  artcileSection,
  TagsProperty,
} from "@/common/module/api/interface/article";

const GET_ARTICLE_LIST_ALL = "/articles";
const GET_ARTICLE_TAG_LIST = "/tags";

class ArticleAPI {
  getAllArticleList = async (
    data: artcileSection,
    config?: AxiosRequestConfig
  ): Promise<IResponse<IGetArticleListAll>> => {
    try {
      const res = await get(GET_ARTICLE_LIST_ALL, { ...config, params: data });
      return res;
    } catch (e) {
      console.error(e);
    }
    return defaultResponse;
  };

  getArticleTagAll = async (
    config?: AxiosRequestConfig
  ): Promise<IResponse<TagsProperty>> => {
    try {
      const res = await get(GET_ARTICLE_TAG_LIST, { ...config });
      return res;
    } catch (e) {
      console.error(e);
    }
    return defaultResponse;
  };
}

export default new ArticleAPI();
