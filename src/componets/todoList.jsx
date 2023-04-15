import React from "react";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, deleteTodo } from "../reducers/todoSlice";

const TodoList = ({ todoslist }) => {
  const filterOption = useSelector((state) => state.filterOption.setVisibility);
  const dispatch = useDispatch();

  function toggleChange(id) {
    const values = {
      id: id,
      filterOption: filterOption,
    };
    dispatch(toggleTodo(values));
  }

  function removeTodo(id) {
    const values = {
      id: id,
      filterOption: filterOption,
    };
    dispatch(deleteTodo(values));
  }

  return (
    <div>
      {todoslist.map((todo, index) => {
        return (
          <div key={index} className="todos-list">
            <p className="id"> {todo.id} </p>
            <p> {todo.title} </p>
            <p> {todo.description} </p>
            <p className="toggle-icon">
              {todo.completed ? (
                <ToggleOnIcon
                  style={{
                    color: "darkgreen",
                    fontSize: "2.5rem",
                    cursor: "pointer",
                  }}
                  onClick={() => toggleChange(todo.id)}
                />
              ) : (
                <ToggleOffIcon
                  style={{
                    color: "darkred",
                    fontSize: "2.5rem",
                    cursor: "pointer",
                  }}
                  onClick={() => toggleChange(todo.id)}
                />
              )}
            </p>
            <p
              className="delete-icon btn btn-danger"
              onClick={() => removeTodo(todo.id)}
            >
              <DeleteIcon />
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
