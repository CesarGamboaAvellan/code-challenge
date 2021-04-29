import React from "react";
import AddComment from "./addComment";

const Comments = (props) => {
  return (
    <div className="bg-light rounded p-3">
      <h2 className="text-secondary">Comments</h2>
      <div className="comments">
        {props.comments.length ? (
          props.comments.map((item) => (
            <div className="bg-white shadow m-2 p-2 rounded" key={item.id}>
              <h6>{item.name}</h6>
              <p className="comments-text">{item.body}</p>
              <p className="p-1 emails-text text-secondary">{item.email}</p>
            </div>
          ))
        ) : (
          <span className="text-warning">Click a Post to see comments</span>
        )}
      </div>
      {props.comments.length && <AddComment postId={props.postId} />}
    </div>
  );
};
export default Comments;
