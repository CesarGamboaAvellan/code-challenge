import { combineReducers } from "redux";
import commentsReducer from "./commentsReducer";
import postReducer from "./postsReducer";

const rootReducer = combineReducers({
  commentsReducer,
  postReducer,
});
export default rootReducer;
