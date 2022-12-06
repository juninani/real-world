import { AxiosRequestConfig } from "axios";
import {
  get,
  IResponse,
  defaultResponse,
  post,
  destroy,
  put,
} from "@/common/module/api/axios-util";
import {
  IGetArticleListAll,
  artcileSection,
  TagsProperty,
  IGetArticleListSingle,
  newArticle,
} from "@/common/module/api/interface/article";
import {
  ICommentsProps,
  PostComment,
} from "@/common/module/api/interface/comments";

import { getToken } from "../../token";

const GET_ARTICLE_LIST_ALL = "/articles";
const GET_ARTICLE_LIST_SINGLE = "/articles/{slug}";
const GET_ARTICLE_TAG_LIST = "/tags";
const CREATE_ARTICLE = "/articles";
const DELETE_ARTICLE = "articles/{slug}";
const UPDATE_ARTICLE = "articles/{slug}";
const POST_ARTICLE_FAV_LIST = "/articles/{slug}/favorite";
const DELETE_ARTICLE_FAV = "/articles/{slug}/favorite";
const ARTICLE_COMMENTS = "/articles/{slug}/comments";
const DEL_ARTICLE_COMMENTS = "/articles/{slug}/comments/{id}";

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

  postCreateArticle = async (
    data: { article: newArticle },
    config?: AxiosRequestConfig
  ): Promise<IResponse> => {
    try {
      const res = await post(CREATE_ARTICLE, data, {
        ...config,
        headers: {
          Authorization: getToken() ? `Token ${getToken()}` : null,
        },
      });
      return res;
    } catch (e) {
      console.error(e);
    }
    return defaultResponse;
  };
  putUpdateArticle = async (
    data: { article: newArticle },
    slug: string,
    config?: AxiosRequestConfig
  ): Promise<IResponse> => {
    try {
      const res = await put(UPDATE_ARTICLE.replace("{slug}", slug), data, {
        ...config,
        headers: {
          Authorization: getToken() ? `Token ${getToken()}` : null,
        },
      });
      return res;
    } catch (e) {
      console.error(e);
    }
    return defaultResponse;
  };
  delArticle = async (
    slug: string,
    config?: AxiosRequestConfig
  ): Promise<IResponse> => {
    try {
      const res = await destroy(DELETE_ARTICLE.replace("{slug}", slug), {
        ...config,
        headers: {
          Authorization: getToken() ? `Token ${getToken()}` : null,
        },
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

  getArticleComments = async (
    slug: string,
    config?: AxiosRequestConfig
  ): Promise<IResponse<ICommentsProps>> => {
    try {
      const res = await get(ARTICLE_COMMENTS.replace("{slug}", slug), {
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
  PostArticleComments = async (
    data: PostComment,
    slug: string,
    config?: AxiosRequestConfig
  ): Promise<IResponse> => {
    console.log(data, "comment");
    try {
      const res = await post(ARTICLE_COMMENTS.replace("{slug}", slug), data, {
        ...config,
        headers: {
          Authorization: `Token ${getToken()}`,
        },
      });
      console.log(res);
      return res;
    } catch (e) {
      console.error(e);
    }
    return defaultResponse;
  };
  DelArticleComments = async (
    id: string,
    slug: string,
    config?: AxiosRequestConfig
  ): Promise<IResponse> => {
    let mapping = DEL_ARTICLE_COMMENTS.replace("{slug}", slug);
    console.log(id, "del");
    try {
      const res = await destroy(mapping.replace("{id}", String(id)), {
        ...config,
        headers: {
          Authorization: `Token ${getToken()}`,
        },
      });
      console.log(res);
      return res;
    } catch (e) {
      console.error(e);
    }
    return defaultResponse;
  };
}

export default new ArticleAPI();
