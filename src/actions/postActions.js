import axios from "axios";
import { FETCH_POSTS } from "../actionTypes/actionTypes";
import { apiEndPoints } from "../constants/apiUrls";

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await axios.get(apiEndPoints.POSTS_URL);
    dispatch({
      type: FETCH_POSTS,
      payload: response.data,
    });
  };
};
