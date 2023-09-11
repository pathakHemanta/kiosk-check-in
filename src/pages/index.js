import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("None");
  const [serverName, setServerName] = useState("None");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setServerName(name);
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-red-400">
      <form
        className="flex flex-col items-center max-w-sm"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={name}
          name="name"
          placeholder="Name"
          className="input input-bordered input-primary w-full h-8 text-sm spacing"
          onChange={handleNameChange}
        />
        <select className="w-full rounded-md spacing">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <input
          type="text"
          placeholder="Reason"
          className="input input-bordered input-primary w-full text-sm spacing"
        />
        <button className="btn btn-primary spacing" type="submit">
          SUBMIT
        </button>
      </form>
      <div className="bg-yellow-300 rounded-md p-auto mt-80">{serverName}</div>
    </div>
  );
}
