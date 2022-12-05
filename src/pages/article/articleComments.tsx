import React, { useEffect, useState } from "react";

import { ICommentsProps } from "@/common/module/api/interface/comments";
import Article from "@/common/module/api/service/article";
import { getLocal } from "@/common/module/token";
import { toMonthFullName } from "@/common/module/helper/date-helper";

const articleComments = ({ slug }) => {
  const [comments, setComments] = useState<ICommentsProps>();
  const [body, setBody] = useState<string>("");
  useEffect(() => {
    getCommentsData();
  }, []);

  const transDate = (date: string) => {
    let trans = date.split("T")[0];
    let day = trans.split("-")[2];
    let month = trans.split("-")[1];
    let year = trans.split("-")[0];
    return `${toMonthFullName(Number(month))},${Number(day)}, ${year}`;
  };
  const commentsData = (data: string) => {
    setBody(data);
  };
  const getCommentsData = async () => {
    const res = await Article.getArticleComments(slug);
    if (res.status === 200) {
      setComments(res.data);
      console.log(res);
      return;
    }
  };

  const postCommentsData = async (body: string) => {
    await Article.PostArticleComments({ comment: { body: body } }, slug);
    getCommentsData();
    setBody("");
  };

  const delCommentData = async (id: string) => {
    await Article.DelArticleComments(id, slug);
    getCommentsData();
  };
  const cardData = comments?.comments
    .slice(0)
    .reverse()
    .map((item, index) => {
      return (
        <div className="card" key={`${item}_${index}`}>
          <div className="card-block">
            <p className="card-text">{item.body}</p>
          </div>
          <div className="card-footer">
            <a href="" className="comment-author">
              <img src={item.author.image} className="comment-author-img" />
            </a>
            &nbsp;
            <a href="" className="comment-author">
              {item.author.username}
            </a>
            <span className="date-posted">{transDate(item.createdAt)}</span>
            {item.author.username === String(getLocal("userName")) ? (
              <span className="mod-options">
                <i
                  className="ion-trash-a"
                  onClick={() => delCommentData(String(item.id))}
                ></i>
              </span>
            ) : null}
          </div>
        </div>
      );
    });

  return (
    <div className="row">
      <div className="col-xs-12 col-md-8 offset-md-2">
        <div className="card comment-form">
          <div className="card-block">
            <textarea
              className="form-control"
              placeholder="Write a comment..."
              rows={3}
              value={body}
              onChange={(e) => commentsData(e.target.value)}
            ></textarea>
          </div>
          <div className="card-footer">
            <img
              src={String(getLocal("userImg"))}
              className="comment-author-img"
            />
            <button
              className="btn btn-sm btn-primary"
              onClick={() => postCommentsData(body)}
            >
              Post Comment
            </button>
          </div>
        </div>
        {cardData}
      </div>
    </div>
  );
};

export default articleComments;
