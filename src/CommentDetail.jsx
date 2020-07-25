import React from "react";


const CommentDetail = (props) => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={props.imageSrc} />
        </a>
        <div>
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="metadata">
            <span className="date">{props.date}</span>
          </div>
          <div className="text">{props.comment}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
