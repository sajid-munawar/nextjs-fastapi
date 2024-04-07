"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
// import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";

const DeleteItem = ({ id }: { id: number }) => {
  const [removing, setRemoving] = useState(false);

  const { refresh } = useRouter();
  const handleDelete = async () => {
    setRemoving(true);
    try {
      if (id) {
        const res = await fetch(`/api/todos/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.ok) {
          refresh();
          // toast.success("Task deleted successfully");
        } else {
          console.error("Error:", res.status, res.statusText);
        }
      } else {
        console.error('Error: "id" is missing or falsy.');
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
      {removing ? (
        <Image src={"/loading.svg"} width={20} height={20} alt="saving" />
      ) : (
        <Image
          src="/icons8-delete.svg"
          height="25"
          width="25"
          alt="delete"
          onClick={handleDelete}
        />
      )}
    </>
  );
};

export default DeleteItem;
