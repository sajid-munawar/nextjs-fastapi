import AddTodo from "./components/AddTodo";
import DeleteTodo from "./components/DeleteTodo";
import ItemsList from "./components/ItemsList";

export default async function Home() {
  return (
    <div>
      <main className="flex h-screen items-center justify-center bg-gradient-to-tr from-primary to-seconday">
        {/* container */}
        <div className=" w-full max-w-md rounded-lg bg-gradient-to-br from-whiteBg/20 to-whiteBg/50 px-3 py-4">
          {/* @ts-ignore */}
          <ItemsList />
          <AddTodo />
          <div className="mx-auto my-4 h-1 w-1/2 rounded-full bg-black/80"></div>
        </div>
      </main>
    </div>
  );
}
