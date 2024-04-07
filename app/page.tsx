import AddTodo from "./components/AddTodo";

export default async function Home() {
  const result = await fetch(
    "https://nextjs-fastapi-tawny.vercel.app/api/todos/",
    {
      cache: "no-store",
    }
  );
  const data = await result.json();
  console.log(data);

  return (
    <div>
      {data.todos.map((todo: any) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
      {/* {data.message} */}
      <AddTodo />
    </div>
  );
}
