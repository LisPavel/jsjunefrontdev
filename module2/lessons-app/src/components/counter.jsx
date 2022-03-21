import React from "react";

const Counter = () => {
  const count = 2;
  const formatCount = () => {
    return count === 0 ? "Empty" : count;
  };
  return (
    <>
      <span>{formatCount()}</span>
      <button className="button">+</button>
    </>
  );
};

export default Counter;
