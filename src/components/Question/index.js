import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionRigth, actionWrong } from "../../store/reducers/questions";
import { actionNextQuestion } from "../../store/reducers/quiz/index";

const Question = ({ question }) => {
  const dispatch = useDispatch();
  const quizReducer = useSelector((state) => state.quiz);
  const questionState = useSelector((state) => state.questions);

  const handleClick = (event) => {
    const clickedValue = event.target.value;

    if (clickedValue !== "false") {
      dispatch(actionRigth());
    } else {
      dispatch(actionWrong());
    }

    return dispatch(actionNextQuestion());
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center"
      }}
    >
      <span>Bem vindo a questão {quizReducer.currentQuestion + 1}</span>
      <h2>{question.question}</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <button
            style={{
              width: "200px"
            }}
            value={true}
            onClick={(e) => handleClick(e)}
          >
            {question.right}
          </button>
        </li>
        <li>
          <button
            style={{
              width: "200px"
            }}
            value={false}
            onClick={(e) => handleClick(e)}
          >
            {question.wrong1}
          </button>
        </li>
        <li>
          <button
            style={{
              width: "200px"
            }}
            value={false}
            onClick={(e) => handleClick(e)}
          >
            {question.wrong2}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Question;
