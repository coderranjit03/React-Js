import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  // State to handle editing
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  // Start editing a todo
  const handleUpdateClick = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  // Save updated todo
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    if (editText.trim() === "") return;
    dispatch(updateTodo({ id: editId, text: editText }));
    setEditId(null);
    setEditText("");
  };

  // Cancel editing
  const handleCancel = () => {
    setEditId(null);
    setEditText("");
  };

  return (
    <>
      <div className="text-2xl text-white font-bold mb-4">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editId === todo.id ? (
              <form
                onSubmit={handleUpdateSubmit}
                className="flex w-full justify-between items-center gap-2"
              >
                <input
                  type="text"
                  className="flex-grow bg-gray-700 text-white px-3 py-1 rounded outline-none"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  autoFocus
                />
                <button
                  type="submit"
                  className="text-white bg-green-600 py-1 px-4 rounded hover:bg-green-700"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="text-white bg-gray-500 py-1 px-4 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </form>
            ) : (
              <>
                <div className="text-white">{todo.text}</div>
                <div className="flex gap-2">
                  <button
                    onClick={() => dispatch(removeTodo({ id: todo.id }))}
                    className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                  >
                    🗑
                  </button>
                  <button
                    onClick={() => handleUpdateClick(todo)}
                    className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
                  >
                    ✏️
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
