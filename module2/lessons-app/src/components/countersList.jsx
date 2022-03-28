import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const [counters, setCounters] = useState([
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 4, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ]);

  const handleDeleteCounter = (id) => {
    // console.log(id);
    setCounters((prevState) => {
      const newState = prevState.filter((counter) => counter.id !== id);
      return newState;
    });
  };

  return (
    <>
      {counters.map((count) => (
        <Counter key={count.id} {...count} onDelete={handleDeleteCounter} />
      ))}
    </>
  );
};

export default CountersList;
