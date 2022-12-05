import React, { useEffect, useState } from "react";
import Article from "@/common/module/api/service/article";
import {
  IGetArticleListAll,
  TagsProperty,
} from "@/common/module/api/interface/article";
import { Pagination } from "@/common";
import { getToken, getLocal } from "@/common/module/token";
import { useUpdateEffect } from "react-use";
import PreviewBox from "./previewBox";
import TagBox from "./tagBox";

const Home = () => {
  const [articleAll, setArticleAll] = useState<IGetArticleListAll>();
  const [totalCount, setTotalCount] = useState<number>();
  const [tags, setTags] = useState<TagsProperty>();
  const [curTag, setCurTag] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const LIMIT = 10;

  useEffect(() => {
    getArticleListAll();
    getTagsList();
  }, []);

  useUpdateEffect(() => {
    getArticleListAll();
  }, [curTag, page, getLocal("userName")]);
  useUpdateEffect(() => {
    setPage(0);
  }, [curTag]);
  const getArticleListAll = async () => {
    const res = await Article.getAllArticleList({
      limit: LIMIT,
      tag: curTag !== "" ? curTag : undefined,
      offset: page,
      //즐겨찾기 로직
      // favorited: getLocal("userName") ? getLocal("userName") : null,
    });
    setArticleAll(res.data);
    setTotalCount(res.data?.articlesCount);
  };

  const getTagsList = async () => {
    const res = await Article.getArticleTagAll();
    if (res.status === 200) {
      setTags(res.data);
      return;
    }
    console.log(res.errors);
  };

  const pageChangeEvent = (item: number) => {
    console.log(item);
    setPage(item);
  };

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                {getToken ? (
                  <li className="nav-item">
                    <a className="nav-link disabled" href="">
                      Your Feed
                    </a>
                  </li>
                ) : null}

                <li className="nav-item">
                  <a className="nav-link active" href="">
                    Global Feed
                  </a>
                </li>
              </ul>
            </div>
            <>
              {articleAll?.articles.map((item, index) => {
                return (
                  <PreviewBox
                    slug={item?.slug}
                    title={item?.title}
                    description={item?.description}
                    body={item?.body}
                    tagList={item?.tagList}
                    createdAt={item?.createdAt}
                    updatedAt={item?.updatedAt}
                    favorited={item?.favorited}
                    favoritesCount={item?.favoritesCount}
                    author={item?.author}
                    key={`${item.title}_${index}`}
                  />
                );
              })}
            </>
            <Pagination
              className="ng-isolate-scope"
              totalCount={totalCount ? totalCount : 0}
              limit={LIMIT}
              currentPage={page}
              onClick={(item) => pageChangeEvent(item)}
            />
          </div>
          <TagBox tags={tags?.tags} setTag={setCurTag} />
        </div>
      </div>
    </div>
  );
};

export default Home;
