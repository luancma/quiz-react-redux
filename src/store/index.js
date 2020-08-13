import { createStore, combineReducers } from "redux";
import { questionReducer } from "./reducers/questions";
import { quizReducer } from "./reducers/quiz";

const rootReducer = combineReducers({
  questions: questionReducer,
  quiz: quizReducer
});

export const store = createStore(rootReducer);
