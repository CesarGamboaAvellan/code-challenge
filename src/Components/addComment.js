import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { CREATE_COMMENT } from "../actionTypes/actionTypes";

const Comment = (props) => {
  const [comment, setComment] = useState("");
  const commentTemplate = {
    postId: props.postId,
    email: "cesargamboaavel@gmail.com",
    name: "Cesar Gamboa",
    id: "",
    body: "",
  };
  const dispatch = useDispatch();
  const addComment = () => {
    dispatch({
      type: CREATE_COMMENT,
      payload: {
        ...commentTemplate,
        body: comment,
        id: uuidv4(),
      },
    });
  };
  return (
    <div>
      <div>Comment:</div>
      <input
        name="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Type a comment"
      ></input>
      <button onClick={addComment}>Add comment</button>
    </div>
  );
};
export default Comment;
