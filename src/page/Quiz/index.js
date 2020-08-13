import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Question from "../../components/Question";
import { actionResetGame } from "../../store/reducers/questions";

const questions = [
  {
    question: "1 + 1",
    right: 2,
    wrong1: 3,
    wrong2: 5
  },
  {
    question: "2 + 2",
    right: 4,
    wrong1: 3,
    wrong2: 5
  },
  {
    question: "5 + 5",
    right: 10,
    wrong1: 3,
    wrong2: 5
  },
  {
    question: "6 + 6",
    right: 12,
    wrong1: 3,
    wrong2: 5
  },
  {
    question: "7 + 7",
    right: 14,
    wrong1: 3,
    wrong2: 5
  }
];

const Quiz = () => {
  const dispatch = useDispatch();
  const quizReducer = useSelector((state) => state.quiz);
  const questionsState = useSelector((state) => state.questions);

  const NextQuestion = () => {
    return questions[quizReducer.currentQuestion] ? (
      <Question question={questions[quizReducer.currentQuestion]} />
    ) : (
      <>
        <span>Fim de jogo: </span>
        <h3 style={{ color: "green" }}>Acertos: {questionsState.answers}</h3>
        <h3 style={{ color: "orange" }}>Acertos: {questionsState.wrongs}</h3>

        <button type="button" onClick={(e) => dispatch(actionResetGame())}>
          Voltar
        </button>
      </>
    );
  };

  const AnyQuestions = () => {
    return <h1>Não existem perguntas!</h1>;
  };

  return <>{questions.length ? <NextQuestion /> : <AnyQuestions />}</>;
};

export default Quiz;
