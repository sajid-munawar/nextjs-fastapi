"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
// import { ToastContainer, toast } from "react-toastify";

// import "react-toastify/dist/ReactToastify.css";

const AddTodo = () => {
  const { refresh } = useRouter();
  const [task, setTask] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    if (task) {
      setLoading(true);
      try {
        if (task) {
          const res = await fetch("/api/todos?title=" + task + "", {
            method: "POST",
            // body: JSON.stringify({ title }),
            headers: {
              // name: "Sajid",
              "Content-Type": "application/json",
            },
          });
          if (res.ok) {
            (inputRef.current as HTMLInputElement).value = "";
            // toast.success("Task added successfully");
            toast.success("Task added successfully");
            refresh();
            setTask("");
            setLoading(false);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
    // else {
    //   toast.warn("Please write something to add");
    // }
  };
  return (
    <>
      {/* <ToastContainer
        position="top-center"
        autoClose={4000}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        rtl={false}
        theme="light"
      /> */}
      <div>
        <form className="flex gap-3">
          <input
            ref={inputRef}
            placeholder="Write a new task"
            type="text"
            className="w-full rounded-full px-3 py-2 focus:outline-seconday"
            onChange={(e) => setTask(e.target.value)}
          />
          {loading ? (
            <Image src={"/loading.svg"} width={20} height={20} alt="saving" />
          ) : (
            <button
              type="button"
              className="shrink-0 rounded-full bg-gradient-to-b from-seconday to-primary p-2"
              onClick={handleSubmit}
            >
              <Image src={"/Vector.svg"} width={20} height={20} alt="save" />
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default AddTodo;
