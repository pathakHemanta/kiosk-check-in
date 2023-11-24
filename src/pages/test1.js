import React, { useState } from "react";

const Test = () => {
  return (
    <div className="h-screen flex flex-col w-full bg-lime-500">
      <form className="flex flex-col bg-blue-300 mx-auto my-auto w-full p-3">
        <section className="mx-auto w-[60%]">
          <label for="first-name" className="label">
            First Name:
          </label>
          <input id="first-name" type="text" className="input w-full" />

          <label for="last-name" className="label">
            Last Name:
          </label>
          <input id="last-name" type="text" className="input w-full" />

          <label for="email" className="label">
            Email:{" "}
          </label>
          <input id="email" type="email" className="input w-full" />

          <label for="host" className="label">
            Host:{" "}
          </label>
          <select id="host" name="host" className="w-full rounded-md p-4">
            <option value="Hari">Hari</option>
            <option value="Shyam">Shyam</option>
            <option value="Krishna">Krishna</option>
          </select>

          <label for="phone-number" className="label">
            Phone Number:{" "}
          </label>
          <input id="phone-number" type="number" className="input w-full" />

          <label for="reason" className="label">
            Reason for visit:{" "}
          </label>
          <textarea id="reason" className="input w-full pt-3"></textarea>
        </section>

        <button
          type="submit"
          className="w-[60%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-auto mt-1"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Test;
