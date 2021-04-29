import axios from "axios";
import { FETCH_COMMENTS } from "../actionTypes/actionTypes";
import { apiEndPoints } from "../constants/apiUrls";

export const fetchComments = () => {
  return async (dispatch) => {
    const response = await axios.get(apiEndPoints.COMMENTS_URL);
    dispatch({
      type: FETCH_COMMENTS,
      payload: response.data,
    });
  };
};
