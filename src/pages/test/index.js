import React from "react";

const index = () => {
  return (
    <div>
      index
      <div className="grid sm:grid-cols-3 gap-2">
        <div className="border border-solid border-white">1</div>
        <div className="col-span-2 border border-solid border-white">2</div>
        <div className="border border-solid border-white">3</div>
        <div className="border border-solid border-white">4</div>
        <div className="border border-solid border-white">5</div>
        <div className="border border-solid border-white">6</div>
        <div className="border border-solid border-white">7</div>
        <div className="border border-solid border-white">8</div>
        <div className="border border-solid border-white">9</div>
      </div>
    </div>
  );
};

export default index;
