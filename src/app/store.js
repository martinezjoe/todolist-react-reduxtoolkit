import { configureStore } from "@reduxjs/toolkit";

// Reducers

import todosReducer from "../reducers/todoSlice";
import filterReducer from "../reducers/filterSlice";

export default configureStore({
  reducer: {
    todos: todosReducer,
    filterOption: filterReducer,
  },
});
