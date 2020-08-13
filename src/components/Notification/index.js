import React from "react";
import { useSelector } from "react-redux";
import "./styles.css";

const Notification = () => {
  const questionsState = useSelector((state) => state.questions);

  const [prevStote, setPrevStore] = React.useState(questionsState);
  const [visible, setVisible] = React.useState(false);
  const [message, setMessage] = React.useState({
    message: "",
    type: ""
  });

  React.useEffect(() => {
    const changeState = async () => {
      setTimeout(() => {
        setVisible(false);
        setMessage("");
      }, 3000);
    };

    if (questionsState.answers === 0 && questionsState.wrongs === 0) {
      return setPrevStore(questionsState);
    }

    if (prevStote.answers !== questionsState.answers) {
      setPrevStore(questionsState);
      setMessage({
        message: "Você acertou 😉",
        type: "right"
      });
      setVisible(true);
      changeState();
    }

    if (prevStote.wrongs !== questionsState.wrongs) {
      setPrevStore(questionsState);
      setMessage({
        message: "Você errou 😰",
        type: "wrong"
      });
      setVisible(true);
      changeState();
    }
  }, [questionsState]);

  return (
    <div className={visible ? `message visible ${message.type}` : "message"}>
      {visible ? <h1>{message.message}</h1> : ""}
    </div>
  );
};

export default Notification;
