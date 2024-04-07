"use client";
import React from "react";
import { useRouter } from "next/navigation";

const DeleteTodo = ({ id }: any) => {
  const { refresh } = useRouter();
  const handleDeleteTodo = async () => {
    console.log("id", id);
    const result = await fetch(`/api/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (result.ok) {
      refresh();
    }
  };
  return (
    <div
      className="text-red-500 px-2 py-1 rounded-md cursor-pointer bg-red-200 hover:bg-red-300"
      onClick={() => handleDeleteTodo()}
    >
      Delete
    </div>
  );
};

export default DeleteTodo;
