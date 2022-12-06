import React, { SetStateAction, Dispatch } from "react";
import { TagsProperty } from "@/common/module/api/interface/article";

interface tagBoxProps extends TagsProperty {
  setTag: Dispatch<SetStateAction<string>>;
}
const tagBox = ({ tags, setTag }: tagBoxProps) => {
  const tagEventHandler = (item: string) => {
    setTag(item);
  };
  return (
    <div className="col-md-3">
      <div className="sidebar">
        <p>Popular Tags</p>
        <div className="tag-list">
          {tags?.map((item: string, index) => {
            return (
              <a
                key={`${item}_${index}`}
                onClick={() => tagEventHandler(item)}
                className="tag-pill tag-default"
              >
                {item}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default tagBox;
