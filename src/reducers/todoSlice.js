import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  allTodosLists: [],
  todosList: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState: initialValues,
  reducers: {
    addTodo: (state, action) => {
      if (state.allTodosLists.length > 0) {
        action.payload.id =
          state.allTodosLists[state.allTodosLists.length - 1].id + 1;
      }
      state.allTodosLists = [...state.allTodosLists, action.payload];
      state.todosList = state.allTodosLists;
    },
    toggleTodo: (state, action) => {
      const todoId = action.payload.id;
      const index = state.allTodosLists.findIndex((list) => list.id == todoId);
      state.allTodosLists[index].completed =
        !state.allTodosLists[index].completed;

      if (action.payload.filterOption == "SHOW_ALL") {
        state.todosList = state.allTodosLists;
      }

      if (action.payload.filterOption == "SHOW_COMPLETED") {
        state.todosList = state.allTodosLists.filter(
          (list) => list.completed == true
        );
      }

      if (action.payload.filterOption == "SHOW_PENDING") {
        state.todosList = state.allTodosLists.filter(
          (list) => list.completed == false
        );
      }
    },
    deleteTodo: (state, action) => {
      const todoId = action.payload.id;
      state.allTodosLists = state.allTodosLists.filter(
        (todo) => todo.id != todoId
      );

      if (action.payload.filterOption == "SHOW_ALL") {
        state.todosList = state.allTodosLists;
      }

      if (action.payload.filterOption == "SHOW_COMPLETED") {
        state.todosList = state.allTodosLists.filter(
          (list) => list.completed == true
        );
      }

      if (action.payload.filterOption == "SHOW_PENDING") {
        state.todosList = state.allTodosLists.filter(
          (list) => list.completed == false
        );
      }
    },
    filterAll: (state) => {
      state.todosList = state.allTodosLists;
    },
    filterCompleted: (state) => {
      state.todosList = state.allTodosLists.filter(
        (list) => list.completed == true
      );
    },
    filterPending: (state) => {
      state.todosList = state.allTodosLists.filter(
        (list) => list.completed == false
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  filterAll,
  filterCompleted,
  filterPending,
} = todosSlice.actions;

export default todosSlice.reducer;
