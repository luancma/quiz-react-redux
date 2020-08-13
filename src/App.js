import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Quiz from "./page/Quiz";
import Notification from "./components/Notification";

export default function App() {
  return (
    <Provider store={store}>
      <Quiz />
      <Notification />
    </Provider>
  );
}
