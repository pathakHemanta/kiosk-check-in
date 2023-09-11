import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("None");
  const [serverInfo, setServerInfo] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [reasonForVisit, setReasonForVisit] = useState("");

  function handleNameChange(e) {
    Object.keys(e).forEach((element) => {
      console.log(element);
    });

    if (e.target.name == "visitor") {
      setName(e.target.value);
    } else if (e.target.name == "reason") {
      setReasonForVisit(e.target.value);
    }
  }

  function handleSelect(e) {
    setSelectedValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setServerInfo([name, selectedValue, reasonForVisit]);
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-red-400">
      <form
        className="flex flex-col items-center max-w-sm"
        onSubmit={handleSubmit}
      >
        <label>
          Name:
          <input
            type="text"
            value={name}
            name="visitor"
            placeholder="Type your name"
            className="input input-bordered input-primary w-full h-8 text-sm spacing focus:outline-red-600"
            onChange={handleNameChange}
          />
        </label>
        <label>
          Host:
          <select
            value={selectedValue}
            onChange={handleSelect}
            className="w-full rounded-md spacing"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </label>
        <label>
          Reason for Visit
          <input
            name="reason"
            type="text"
            value={reasonForVisit}
            placeholder="Reason for visit"
            className="input input-bordered input-primary w-full text-sm spacing"
            onChange={handleNameChange}
          />
        </label>
        <button className="btn btn-primary spacing" type="submit">
          SUBMIT
        </button>
      </form>
      <div className="bg-yellow-300 rounded-md p-auto mt-80">
        <ul>
          {serverInfo.map((element) => (
            <li key={serverInfo.indexOf(element)}>{element}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
