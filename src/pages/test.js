import React from "react";
import { useState } from "react";

const Test = () => {
  const [name, setName] = useState();

  function handleNameChange(event) {
    setName(event.target.value);
  }
  return (
    <div className="h-screen flex flex-col justify-center items-center w-[500px] m-auto bg-green-500 px-3">
      <div className="bg-red-500 w-full my-3">Div 1</div>
      <div className="bg-pink-500 ">Div 2</div>
      <div className="bg-pink-500 ">{name}</div>
      <label>
        Name:
        <input
          value={name}
          onChange={handleNameChange}
          placeholder="Write your name"
        ></input>
      </label>
    </div>
  );
};

export default Test;
