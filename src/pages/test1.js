import React, { useEffect, useState } from "react";

const Test = () => {
  const regularObject = { key: "value", number: 42 };
  const jsonString = JSON.stringify(regularObject);

  console.log(jsonString);

  const jsonObject = JSON.parse(jsonString);

  console.log(jsonObject);
  useEffect(() => {
    sessionStorage.setItem("myBio", "Pink");
    console.log(sessionStorage.getItem("myBio"));
    console.log(sessionStorage);

    localStorage.setItem(
      "userInfo",
      JSON.stringify({ name: "Hemanta Pathak" })
    );
    console.log(localStorage);
  });

  return (
    <div className="h-screen flex flex-col w-full bg-lime-500">
      <form className="flex flex-col bg-blue-300 my-auto w-full p-3">
        <section className="mx-auto w-[60%] max-w-lg">
          <label htmlFor="first-name" className="label">
            First Name:
          </label>
          <input id="first-name" type="text" className="input w-full" />

          <label htmlFor="last-name" className="label">
            Last Name:
          </label>
          <input id="last-name" type="text" className="input w-full" />

          <label htmlFor="email" className="label">
            Email:{" "}
          </label>
          <input id="email" type="email" className="input w-full" />

          <label htmlFor="host" className="label">
            Host:{" "}
          </label>
          <select id="host" name="host" className="w-full rounded-md p-4">
            <option value="Hari">Hari</option>
            <option value="Shyam">Shyam</option>
            <option value="Krishna">Krishna</option>
          </select>

          <label htmlFor="phone-number" className="label">
            Phone Number:{" "}
          </label>
          <input id="phone-number" type="number" className="input w-full" />

          <label htmlFor="reason" className="label">
            Reason for visit:{" "}
          </label>
          <textarea id="reason" className="input w-full pt-3"></textarea>
        </section>
        <div className="flex flex-col border-b-2 border-white mx-auto w-[60%] max-w-lg">
          <label htmlFor="pic" className="">
            Submit an image:{" "}
          </label>
          <input type="image" id="pic" className="" />
        </div>
        <button
          type="submit"
          className="w-[60%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-auto mt-1 max-w-lg"
        >
          Submit
        </button>
      </form>
      <footer className="bg-pink-700">this is the footer</footer>
    </div>
  );
};

export default Test;
