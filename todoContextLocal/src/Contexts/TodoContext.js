import React, { useContext } from "react";

// easy way of using context api
import { createContext } from "react";

// create context
export const TodoContext = createContext({
  // values==> string ,array ,object, function etc.
  todos: [{ id: "1", todo: "study", completed: false }],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleCompleteTodo: (id) => {},
});

// make custom hook for contextTodo

export const useTodo = () => {
  return useContext(TodoContext);
};

// create context provider
export const TodoProvider = TodoContext.Provider;
