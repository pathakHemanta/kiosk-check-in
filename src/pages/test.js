import React, { useState } from "react";

const Test = () => {
  const [name, setName] = useState();

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleSubmit() {
    alert("You have submitted the form!");
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center w-[500px] m-auto bg-green-500 px-3">
      <div className="bg-red-500 w-full my-3">Div 1</div>
      <div className="bg-pink-500 ">Div 2</div>
      <div className="bg-pink-500 ">{name}</div>
      <form className="flex flex-col">
        <label>
          Name:
          <input
            value={name}
            onChange={handleNameChange}
            placeholder="Write your name"
          />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Test;
