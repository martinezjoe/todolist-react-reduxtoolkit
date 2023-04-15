import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoList from "./todoList";
import TodoForm from "./TodoForm";
import {
  filterAll,
  filterCompleted,
  filterPending,
} from "../reducers/todoSlice";
import { showAll, showCompleted, showPending } from "../reducers/filterSlice";

const TodoContainer = () => {
  const todosLists = useSelector((state) => state.todos.todosList);
  const allTodosLists = useSelector((state) => state.todos.allTodosLists);

  const dispatch = useDispatch();

  function all() {
    dispatch(filterAll());
    dispatch(showAll());
  }

  function completed() {
    dispatch(filterCompleted());
    dispatch(showCompleted());
  }

  function pending() {
    dispatch(filterPending());
    dispatch(showPending());
  }

  return (
    <div>
      <div className="todos-container">
        <h3 className="header"> Here your TO DOs list </h3>

        <div className="buttons">
          <button className="btn btn-success" onClick={() => all()}>
            Show All
          </button>
          <button className="btn btn-success" onClick={() => completed()}>
            Show Completed
          </button>
          <button className="btn btn-success" onClick={() => pending()}>
            Show Pending
          </button>
        </div>

        <div className="header-list">
          <h5 className="id"> Id</h5>
          <h5> Title </h5>
          <h5> Description </h5>
          <h5> Completed </h5>
          <h5> Delete </h5>
        </div>
        <hr className="hr" />

        {allTodosLists.length == 0 ? (
          <p style={{ textAlign: "center" }}> Please, create a new one... </p>
        ) : (
          <TodoList todoslist={todosLists} />
        )}
      </div>

      <div>
        <TodoForm />
      </div>
    </div>
  );
};

export default TodoContainer;
