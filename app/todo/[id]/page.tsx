import React from "react";

const page = async ({ params, searchParams }: any) => {
  console.log(searchParams);
  const id = params.id;
  const result = await fetch(
    `https://nextjs-fastapi-tawny.vercel.app/api/todo/${id}?name=${searchParams.name}`,
    {
      cache: "no-store",
    }
  );
  const data = await result.json();
  console.log("data", data);
  return (
    <div>
      {/* {data.onetodo} <br />
      {data.name} */}
    </div>
  );
};

export default page;
