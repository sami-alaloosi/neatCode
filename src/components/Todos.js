/** @format */

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import store from "../state-manegment/store";
import { axiosCallTodos } from "../state-manegment/userReducer";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import Header from "./Header";

import QuestionCard from "./QuestionCard";

function Todos() {
  const componentName = "Todos";
  useEffect(() => {
    store.dispatch(axiosCallTodos());
  }, []);

  const todos = useSelector((state) => state.todos);

  const deleteTodo = (todoId) => {
    axiosWithAuth()
      .delete(`user/todos/${todoId}`)
      .then(() => {
        store.dispatch(axiosCallTodos());
      })
      .catch((err) => console.log("deleting Todo Error", err));
  };

  return (
    <div className="gridContainer">
      <Header componentName={componentName} />
      <QuestionCard
        questions={todos}
        hiddenWord="Delete"
        iconName="delete"
        fn={deleteTodo}
      />
    </div>

  );
}

export default Todos;
