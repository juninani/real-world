import React, { useState } from "react";
import Article from "@/common/module/api/service/article";
import { newArticle } from "@/common/module/api/interface/article";

const index = () => {
  const [newArticle, setNewArticle] = useState<newArticle>({
    title: "",
    description: "",
    body: "",
    tagList: [],
  });

  const [tagList, setTagList] = useState<string>("");

  const handleInputData = (key: string, value: string) => {
    setNewArticle({ ...newArticle, [key]: value });
  };

  const handleClickPress = () => {
    if (newArticle.tagList.find((item) => item === tagList)) {
      return;
    }
    setNewArticle({
      ...newArticle,
      ["tagList"]: [...newArticle.tagList, tagList],
    });
    setTagList("");
  };

  const handleTagDelete = (data: string) => {
    setNewArticle({
      ...newArticle,
      ["tagList"]: [...newArticle.tagList.filter((item) => data !== item)],
    });
  };

  const onKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleClickPress();
    }
  };

  const handleSubmit = async (data: newArticle) => {
    const res = await Article.postCreateArticle({ article: data });
    console.log(res);
  };

  const tagData = newArticle.tagList.map((item, index) => {
    return (
      <span
        key={`${item}_${index}`}
        className="tag-default tag-pill ng-binding ng-scope"
      >
        <i
          className="ion-close-round"
          onClick={() => handleTagDelete(item)}
        ></i>
        {item}
      </span>
    );
  });

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <div>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Article Title"
                    value={newArticle.title}
                    onChange={(e) => handleInputData("title", e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="What's this article about?"
                    value={newArticle.description}
                    onChange={(e) =>
                      handleInputData("description", e.target.value)
                    }
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    rows={8}
                    placeholder="Write your article (in markdown)"
                    value={newArticle.body}
                    onChange={(e) => handleInputData("body", e.target.value)}
                  ></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter tags"
                    onChange={(e) => setTagList(e.target.value)}
                    onKeyPress={(e) => onKeyPress(e)}
                    value={tagList}
                  />
                  <div className="tag-list">{tagData}</div>
                </fieldset>
                <button
                  className="btn btn-lg pull-xs-right btn-primary"
                  type="button"
                  onClick={() => handleSubmit(newArticle)}
                >
                  Publish Article
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
