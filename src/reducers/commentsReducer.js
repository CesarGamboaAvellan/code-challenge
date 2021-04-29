// check actual comments to see what needs to be added
import { CREATE_COMMENT, FETCH_COMMENTS } from "../actionTypes/actionTypes";
const initialState = { comments: [] };
const commentsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_COMMENTS:
      return { ...state, comments: payload };
    case CREATE_COMMENT:
      return { ...state, comments: state.comments.concat(payload) };
    default:
      return state;
  }
};
export default commentsReducer;
