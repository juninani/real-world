import React from "react";
import { articleAll } from "@/common/module/api/interface/article";
import { toMonthFullName } from "@/common/module/helper/date-helper";

const previewBox = ({
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
  const transDate = (date: string) => {
    let trans = date.split("T")[0];
    let day = trans.split("-")[2];
    let month = trans.split("-")[1];
    let year = trans.split("-")[0];
    return `${toMonthFullName(Number(month))},${Number(day)}, ${year}`;
  };
  return (
    <div className="article-preview">
      <div className="article-meta">
        <a href="profile.html">
          <img src={author.image} />
        </a>
        <div className="info">
          <a href="" className="author">
            {author.username}
          </a>
          {/* January 20th */}
          <span className="date">{transDate(createdAt)}</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> {favoritesCount}
        </button>
      </div>
      <a href="" className="preview-link">
        <h1>{slug}</h1>
        <p>{description}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {tagList.map((item, index) => {
            return (
              <li
                key={`${item}_${index}`}
                className="tag-default tag-pill tag-outline ng-binding ng-scope"
                ng-repeat="tag in $ctrl.article.tagList"
              >
                {item}
              </li>
            );
          })}
        </ul>
      </a>
    </div>
  );
};

export default previewBox;
