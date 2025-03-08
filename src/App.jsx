import React from "react";
import Tag from "./components/Tag"
import Random from "./components/Random"

export default function App() {
  return (
    <div className=" flex flex-col h-screen w-full background items-center">
      <h1 className="bg-white w-11/12 text-center mt-[40px]  py-5 px-5  font-bold text-3xl rounded-lg
           items-center ">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center background gap-y-10 mt-[30px]">
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>

  );
}
