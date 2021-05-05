import React, { useRef } from "react";
import AddComment from "./addComment";

const Comments = (props) => {
  const lastCommentRef = useRef(null);
  const executeScroll = () => lastCommentRef.current.scrollIntoView();
  return (
    <div className="bg-light rounded p-3">
      <h2 className="text-secondary">Comments</h2>
      <div className="comments">
        {props.comments.length ? (
          props.comments.map((item, i) => {
            if (props.comments.length - 1 === i) {
              console.log("last item", item, i);
              return (
                <div
                  ref={lastCommentRef}
                  className="bg-white shadow m-2 p-2 rounded"
                  key={item.id}
                >
                  <h6>{item.name}</h6>
                  <p className="comments-text">{item.body}</p>
                  <p className="p-1 emails-text text-secondary">{item.email}</p>
                </div>
              );
            }
            return (
              <div className="bg-white shadow m-2 p-2 rounded" key={item.id}>
                <h6>{item.name}</h6>
                <p className="comments-text">{item.body}</p>
                <p className="p-1 emails-text text-secondary">{item.email}</p>
              </div>
            );
          })
        ) : (
          <span className="text-warning">Click a Post to see comments</span>
        )}
      </div>
      {props.comments.length && (
        <AddComment executeScroll={executeScroll} postId={props.postId} />
      )}
    </div>
  );
};
export default Comments;
