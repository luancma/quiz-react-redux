// actions

const WRONG = "WRONG";
const RIGHT = "RIGHT";
export const RESET = "RESET";

export const actionRigth = () => {
  return {
    type: RIGHT
  };
};

export const actionWrong = () => {
  return {
    type: WRONG
  };
};

export const actionResetGame = () => {
  return {
    type: RESET
  };
};

// reducer
const initialState = {
  answers: 0,
  wrongs: 0
};

export const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case WRONG:
      return {
        ...state,
        wrongs: state.wrongs + 1
      };

    case RIGHT:
      return {
        ...state,
        answers: state.answers + 1
      };

    case RESET:
      return {
        ...state,
        answers: 0,
        wrongs: 0
      };

    default:
      return state;
  }
};
