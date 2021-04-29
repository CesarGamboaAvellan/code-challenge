import React, { useEffect, useState, useCallback } from "react";
import Comments from "./comments";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import { fetchComments } from "../actions/commentActions";

const Posts = () => {
  const [comments, setComments] = useState([]);
  const [postId, setPostId] = useState(0);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const firstPostId = 1;
  const seeComments = (id) => {
    setPostId(id);
    showMessages(id);
  };
  const showMessages = useCallback(
    (id) => {
      const filterComments = state.commentsReducer.comments.filter(
        (element) => element.postId === id
      );
      setComments(filterComments);
    },
    [state.commentsReducer.comments]
  );
  useEffect(() => {
    if (postId === 0) {
      dispatch(fetchPosts());
      dispatch(fetchComments());
      setPostId(firstPostId);
    }
    showMessages(postId);
  }, [state.commentsReducer.comments, dispatch, postId, showMessages]);
  return (
    <div className="container">
      <h1 className="d-flex justify-content-center">Posts</h1>
      <div className="row">
        <div className="col-md-8 posts">
          {state.postReducer.length &&
            state.postReducer[0].map((post) => {
              return (
                <div
                  key={post.id}
                  className="shadow rounded d-flex flex-column p-5 m-3"
                >
                  <h2 className="text-primary">{post.title}</h2>
                  <p className="text-secondary">{post.body}</p>
                  <button
                    onClick={() => seeComments(post.id)}
                    className="btn btn-info w-100"
                  >
                    Load Comments
                  </button>
                </div>
              );
            })}
        </div>
        <div className="col-md-4">
          <Comments comments={comments} postId={postId} />
        </div>
      </div>
    </div>
  );
};
export default Posts;
