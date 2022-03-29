import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 4, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];

  const updatedState = [
    { id: 0, value: 1, name: "Ненужная вещь" },
    { id: 1, value: 2, name: "Ложка" },
    { id: 2, value: 3, name: "Вилка" },
    { id: 3, value: 4, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDeleteCounter = (id) => {
    // console.log(id);
    setCounters((prevState) => {
      const newState = prevState.filter((counter) => counter.id !== id);
      return newState;
    });
  };

  const handleReset = () => {
    setCounters(initialState);
    console.log("handle reset");
  };

  const handleUpdate = () => {
    setCounters(updatedState);
  };

  const handleIncrement = (id) => {
    console.log(id);
    setCounters((prevState) => {
      prevState.find((c) => c.id === id).value += 1;
      return [...prevState];
    });
  };
  const handleDecrement = (id) => {
    console.log(id);
    setCounters((prevState) => {
      const count = prevState.find((c) => c.id === id && c.value > 0);
      if (!count) return prevState;
      count.value -= 1;
      return [...prevState];
    });
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          {...count}
          onDelete={handleDeleteCounter}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handleUpdate}>
        Обновить состояние
      </button>
    </>
  );
};

export default CountersList;
