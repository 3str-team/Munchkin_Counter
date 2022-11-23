import React from "react";

const Counter = ({ title, increment, decrement, value, reset }) => {
  return (
    <div className="counter">
      <div className="result">{value}</div>
      <div className="controlls">
        <button className="btn down" onClick={decrement}>
          <i className="bx bxs-down-arrow"></i>
        </button>
        <h3>{title}</h3>
        <button className="btn up" onClick={increment}>
          <i className="bx bxs-up-arrow"></i>
        </button>
      </div>
      <button className="reset btn" onClick={reset}>
        Сброс
      </button>
    </div>
  );
};

export default Counter;
