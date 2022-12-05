import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IGetArticleListSingle } from "@/common/module/api/interface/article";
import Article from "@/common/module/api/service/article";
import ArticleDetailPage from "./articleDetailPage";

const index = () => {
  const location = useLocation();
  const state = location.state as { slug: string };
  const [article, setArticle] = useState<IGetArticleListSingle>();

  useEffect(() => {
    getSingleArticle(state.slug);
    console.log("들어옴");
  }, []);

  const getSingleArticle = async (slug: string) => {
    const res = await Article.getSingleArticleList(slug);
    setArticle(res.data);
  };
  return (
    <div>
      {article ? (
        <ArticleDetailPage
          slug={article.article.slug}
          title={article.article.title}
          description={article.article.description}
          body={article.article.body}
          tagList={article.article.tagList}
          createdAt={article.article.createdAt}
          updatedAt={article.article.updatedAt}
          favorited={article.article.favorited}
          favoritesCount={article.article.favoritesCount}
          author={article.article?.author}
          key={`${article.article.title}_${index}`}
        />
      ) : null}
    </div>
  );
};

export default index;
