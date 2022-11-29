import React from "react";
import { articleAll } from "@/common/module/api/interface/article";
import { toMonthFullName } from "@/common/module/helper/date-helper";
import { getToken } from "@/common/module/token";
import { useNavigate } from "react-router-dom";
import Article from "@/common/module/api/service/article";

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
  const transDate = (date: string) => {
    let trans = date.split("T")[0];
    let day = trans.split("-")[2];
    let month = trans.split("-")[1];
    let year = trans.split("-")[0];
    return `${toMonthFullName(Number(month))},${Number(day)}, ${year}`;
  };

  const pickFavData = (slugData: string) => {
    if (!getToken) {
      navigator("/sign-in");
      return;
    }
    if (favorited) {
      postFavData(slugData);
      console.log("d");
      return;
    }
    DelFavData(slugData);
  };
  const postFavData = async (slugData: string) => {
    await Article.postArticleFavData(slugData, null);
  };
  const DelFavData = async (slugData: string) => {
    await Article.deleteArtcleFavData(slugData);
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
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-plus-round"></i>
              &nbsp;
              {!author.following
                ? `Follow ${author.username}`
                : `Unfollow ${author.username}`}
            </button>
            &nbsp;&nbsp;
            <button
              onClick={() => pickFavData(slug)}
              className={`btn btn-sm ${
                !favorited ? "btn-outline-primary" : "btn-primary"
              }`}
            >
              <i className="ion-heart"></i>
              &nbsp; Favorite Post
              <span className="counter">({favoritesCount})</span>
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
            {tagList.map((item) => (
              <li className="tag-default tag-pill tag-outline ng-binding ng-scope">
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
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-plus-round"></i>
              &nbsp;{" "}
              {!author.following
                ? `Follow ${author.username}`
                : `Unfollow ${author.username}`}
            </button>
            &nbsp;
            <button
              className={`btn btn-sm ${
                !favorited ? "btn-outline-primary" : "btn-primary"
              }`}
            >
              <i className="ion-heart"></i>
              &nbsp; Favorite Post{" "}
              <span className="counter">({favoritesCount})</span>
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            <form className="card comment-form">
              <div className="card-block">
                <textarea
                  className="form-control"
                  placeholder="Write a comment..."
                  rows={3}
                ></textarea>
              </div>
              <div className="card-footer">
                <img
                  src="http://i.imgur.com/Qr71crq.jpg"
                  className="comment-author-img"
                />
                <button className="btn btn-sm btn-primary">Post Comment</button>
              </div>
            </form>

            <div className="card">
              <div className="card-block">
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
              <div className="card-footer">
                <a href="" className="comment-author">
                  <img
                    src="http://i.imgur.com/Qr71crq.jpg"
                    className="comment-author-img"
                  />
                </a>
                &nbsp;
                <a href="" className="comment-author">
                  Jacob Schmidt
                </a>
                <span className="date-posted">Dec 29th</span>
              </div>
            </div>

            <div className="card">
              <div className="card-block">
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
              <div className="card-footer">
                <a href="" className="comment-author">
                  <img
                    src="http://i.imgur.com/Qr71crq.jpg"
                    className="comment-author-img"
                  />
                </a>
                &nbsp;
                <a href="" className="comment-author">
                  Jacob Schmidt
                </a>
                <span className="date-posted">Dec 29th</span>
                <span className="mod-options">
                  <i className="ion-edit"></i>
                  <i className="ion-trash-a"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
