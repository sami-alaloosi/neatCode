/** @format */

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import store from "../state-manegment/store";
import { axiosCallQuestions } from "../state-manegment/userReducer";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Header from "./Header";
import QuestionCard from "./QuestionCard";

function QuestionsList() {
  const componentName = "Questions";
  const questions = useSelector((state) => state.questions);

  useEffect(() => {
    store.dispatch(axiosCallQuestions());
  }, []);

  const addTodo = (todoId) => {
    axiosWithAuth()
      .post(`user/todos/${todoId}`)
      .then(() => {})
      .catch((err) => console.log("adding List Error", err));
  };

  return (
    <div className="gridContainer">
      <Header componentName={componentName} />
      <QuestionCard
        questions={questions}
        hiddenWord="Add"
        iconName="add"
        fn={addTodo}
      />
    </div>
  );
}

export default QuestionsList;
