import React, { useState } from "react";
import { articleAll } from "@/common/module/api/interface/article";
import { toMonthFullName } from "@/common/module/helper/date-helper";
import { getToken } from "@/common/module/token";
import { useNavigate } from "react-router-dom";
import Article from "@/common/module/api/service/article";
import Profile from "@/common/module/api/service/profile";
import ArticleComments from "./articleComments";

const index = ({
  slug,
  title,
  description,
  body,
  tagList,
  createdAt,
  updatedAt,
  favorited,
  favoritesCount,
  author,
}: articleAll) => {
  const navigator = useNavigate();
  const [fav, setFav] = useState<boolean>(favorited);
  const [follow, setFollw] = useState(author.following);
  const transDate = (date: string) => {
    let trans = date.split("T")[0];
    let day = trans.split("-")[2];
    let month = trans.split("-")[1];
    let year = trans.split("-")[0];
    return `${toMonthFullName(Number(month))},${Number(day)}, ${year}`;
  };

  const pickFavData = (slugData: string) => {
    if (!getToken()) {
      navigator("/sign-in");
      return;
    }
    if (!fav) {
      postFavData(slugData);
      setFav(true);
      return;
    }
    DelFavData(slugData);
    setFav(false);
  };

  const pickFollowData = (userName: string) => {
    if (!getToken()) {
      navigator("/sign-in");
      return;
    }
    if (!follow) {
      postFollowData(userName);
      setFollw(true);
      return;
    }
    delFollowData(userName);
    setFollw(false);
  };

  const postFavData = async (slugData: string) => {
    await Article.postArticleFavData(slugData, null);
  };
  const DelFavData = async (slugData: string) => {
    await Article.deleteArtcleFavData(slugData);
  };
  const postFollowData = async (celeb: string) => {
    await Profile.postFollow(celeb);
  };
  const delFollowData = async (userName: string) => {
    await Profile.delFollow(userName);
  };

  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{title}</h1>

          <div className="article-meta">
            <a href="">
              <img src={author.image} />
            </a>
            <div className="info">
              <a href="" className="author">
                {author.username}
              </a>
              <span className="date">{transDate(createdAt)}</span>
            </div>
            <button
              className={`btn btn-sm action-button ${
                !follow ? "btn-outline-secondary" : "btn-secondary"
              }`}
              onClick={() => pickFollowData(author.username)}
            >
              <i className="ion-plus-round"></i>
              &nbsp;
              {!follow
                ? `Follow ${author.username}`
                : `Unfollow ${author.username}`}
            </button>
            &nbsp;&nbsp;
            <button
              onClick={() => pickFavData(slug)}
              className={`btn btn-sm ${
                !fav ? "btn-outline-primary" : "btn-primary"
              }`}
            >
              <i className="ion-heart"></i>
              &nbsp; Favorite Post
              <span className="counter">
                ({fav ? favoritesCount + 1 : favoritesCount})
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <p>{body}</p>
          </div>
          <ul className="tag-list">
            {tagList.map((item, index) => (
              <li
                key={`${item}_${index}`}
                className="tag-default tag-pill tag-outline ng-binding ng-scope"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="article-actions">
          <div className="article-meta">
            <a href="profile.html">
              <img src={author.image} />
            </a>
            <div className="info">
              <a href="" className="author">
                {author.username}
              </a>
              <span className="date">{transDate(createdAt)}</span>
            </div>
            <button
              className={`btn btn-sm action-button ${
                !follow ? "btn-outline-secondary" : "btn-secondary"
              }`}
            >
              <i className="ion-plus-round"></i>
              {!follow
                ? `Follow ${author.username}`
                : `Unfollow ${author.username}`}
            </button>
            &nbsp;
            <button
              className={`btn btn-sm ${
                !fav ? "btn-outline-primary" : "btn-primary"
              }`}
            >
              <i className="ion-heart"></i>
              &nbsp; Favorite Post
              <span className="counter">
                ({fav ? favoritesCount + 1 : favoritesCount})
              </span>
            </button>
          </div>
        </div>
        <ArticleComments slug={slug} />
      </div>
    </div>
  );
};

export default index;
