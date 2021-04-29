import { FETCH_POSTS } from "../actionTypes/actionTypes";
const initialState = [];

const postReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_POSTS:
      return [...state, payload];

    default:
      return state;
  }
};
export default postReducer;
