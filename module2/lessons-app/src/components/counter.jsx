import React from "react";

const Counter = (props) => {
  // console.log(props);
  // let count = 2;
  // const [value, setValue] = useState(props.value);
  const { value } = props;

  const formatValue = () => {
    return value === 0 ? "Empty" : value;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 ";
    classes += value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  const handleIncrement = (ev) => {
    console.log("handle increment");
    // setValue((prevState) => prevState + 1);
  };

  const handleDecrement = (ev) => {
    console.log("handle decrement");
    // setValue((prevState) => (prevState > 0 ? prevState - 1 : prevState));
  };

  return (
    <div>
      <span>{props.name}</span>
      <span className={getBadgeClasses()}>{formatValue()}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handleDecrement}>
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
