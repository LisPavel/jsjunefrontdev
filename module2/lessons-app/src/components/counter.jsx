import React, { useState } from "react";

const Counter = () => {
  // let count = 2;
  const [count, setCount] = useState(0);

  const formatCount = () => {
    return count === 0 ? "Empty" : count;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 ";
    classes += count === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  const handleIncrement = (ev) => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <>
      <span className={getBadgeClasses()}>{formatCount()}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>
        +
      </button>
    </>
  );
};

export default Counter;
