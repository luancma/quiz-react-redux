import { RESET } from "../questions/index";

const NEXT_QUESTION = "NEXT_QUESTION";

export const actionNextQuestion = () => {
  return {
    type: NEXT_QUESTION
  };
};

const intialState = {
  totalQuestions: 5,
  currentQuestion: 0
};

export const quizReducer = (state = intialState, action) => {
  switch (action.type) {
    case NEXT_QUESTION:
      return {
        ...state,
        totalQuestions: state.totalQuestions - 1,
        currentQuestion: state.currentQuestion + 1
      };

    case RESET:
      return {
        ...state,
        totalQuestions: 5,
        currentQuestion: 0
      };

    default:
      return state;
  }
};
