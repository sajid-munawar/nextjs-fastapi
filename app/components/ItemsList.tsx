import React from "react";
import DeleteItem from "./DeleteItem";
import EditTodo from "./EditTodo";
const getData = async () => {
  const res = await fetch(
    "https://nextjs-fastapi-tawny.vercel.app/api/todos/",
    {
      cache: "no-store",
    }
  );
  const { todos } = await res.json();
  return todos;
};
const ItemsList = async () => {
  const data = await getData();
  console.log("data from api", data);
  return (
    <>
      <div className="mb-4 max-h-96 overflow-y-auto px-2 pt-4">
        {data &&
          data.map((item: any) => (
            <div
              className="mb-3 flex  w-full items-center gap-4 rounded-lg bg-white px-3 py-2"
              key={item.id}
            >
              <div className="rounded-full bg-seconday p-1"></div>
              <div>{item.title}</div>
              <div className="ml-auto cursor-pointer">
                <DeleteItem id={item.id} />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ItemsList;
