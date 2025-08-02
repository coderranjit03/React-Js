import React, { useState, useCallback, useRef, useEffect } from "react";
import AppName from "./componemnts/AppName"
import AddTodo from "./componemnts/AddTodo";
import TodoItems from "./componemnts/TodoItems";
import PassGen from "../PassGenerator";
import "./App.css";
function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "Like this video",
      dueDate: "right now",
    },
  ];

  return (
      <>
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
    <div className="pass-gen-container">
      <PassGen />
    </div>
    </>
  );
}

export default App;