import { AxiosRequestConfig } from "axios";
import {
  get,
  IResponse,
  defaultResponse,
  post,
  destroy,
} from "@/common/module/api/axios-util";
import {
  IGetArticleListAll,
  artcileSection,
  TagsProperty,
  IGetArticleListSingle,
} from "@/common/module/api/interface/article";
import { getToken } from "../../token";

const GET_ARTICLE_LIST_ALL = "/articles";
const GET_ARTICLE_LIST_SINGLE = "/articles/{slug}";
const GET_ARTICLE_TAG_LIST = "/tags";
const POST_ARTICLE_FAV_LIST = "/articles/{slug}/favorite";
const DELETE_ARTICLE_FAV = "/articles/{slug}/favorite";

class ArticleAPI {
  getAllArticleList = async (
    data: artcileSection,
    config?: AxiosRequestConfig
  ): Promise<IResponse<IGetArticleListAll>> => {
    try {
      const res = await get(GET_ARTICLE_LIST_ALL, {
        ...config,
        headers: {
          Authorization: getToken() ? `Token ${getToken()}` : null,
        },
        params: data,
      });
      return res;
    } catch (e) {
      console.error(e);
    }
    return defaultResponse;
  };

  getSingleArticleList = async (
    slug: string,
    config?: AxiosRequestConfig
  ): Promise<IResponse<IGetArticleListSingle>> => {
    try {
      const res = await get(GET_ARTICLE_LIST_SINGLE.replace("{slug}", slug), {
        ...config,
        headers: {
          Authorization: `Token ${getToken()}`,
        },
      });
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
      const res = await get(GET_ARTICLE_TAG_LIST, {
        ...config,
      });
      return res;
    } catch (e) {
      console.error(e);
    }
    return defaultResponse;
  };

  postArticleFavData = async (
    slug: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<IResponse> => {
    try {
      console.log(getToken());
      const res = await post(
        POST_ARTICLE_FAV_LIST.replace("{slug}", slug),
        data,
        {
          ...config,
          headers: {
            Authorization: `Token ${getToken()}`,
          },
        }
      );
      return res;
    } catch (e) {
      console.log(e);
    }
    return defaultResponse;
  };

  deleteArtcleFavData = async (
    slug: string,
    config?: AxiosRequestConfig
  ): Promise<IResponse> => {
    try {
      const res = await destroy(DELETE_ARTICLE_FAV.replace("{slug}", slug), {
        ...config,
        headers: {
          Authorization: `Token ${getToken()}`,
        },
      });
      return res;
    } catch (e) {
      console.log(e);
    }
    return defaultResponse;
  };
}

export default new ArticleAPI();
