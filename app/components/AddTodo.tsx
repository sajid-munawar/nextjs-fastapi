"use client";

import { useState } from "react";

const AddTodo = () => {
  const [title, setTitle] = useState("");

  const addTodo = async (e: any) => {
    e.preventDefault();
    const result = await fetch(
      "https://nextjs-fastapi-tawny.vercel.app/api/todos?title=" + title + "",
      {
        method: "POST",
        // body: JSON.stringify({ title }),
        headers: {
          // name: "Sajid",
          "Content-Type": "application/json",
        },
      }
    );
    const data = await result.json();
    console.log("data", data);
  };

  return (
    <div>
      <form>
        <input
          className="border"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-2 py-1 rounded-md"
          onClick={(e) => addTodo(e)}
        >
          Add todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
