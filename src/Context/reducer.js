import { getPosts } from "../DataStore/dataStore";

export const initialState = {
  user: null, // null | {}
  token: null, // null | string
  posts: [],
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, token: action.token, user: action.user };
    case "RELOAD":
      return { ...state, posts: action.posts };
    case "FEED_QUESTIONS_FETCHED":
      return { ...state, feedQuestions: action.questions };
    case "USER_QUESTIONS_FETCHED":
      return { ...state, questionsForUser: action.questions };
    default:
      return state;
  }
};
