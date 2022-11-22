import React, { useEffect, useState } from "react";
import Counter from "./components/Counter/Counter";
import Random from "./components/Random/Random";
import Total from "./components/Total/Total";

import "./styles/app.css";

function App() {
  const [level, setLevel] = useState(1);
  const [items, setItems] = useState(0);
  const [total, setTotal] = useState(level + items);

  useEffect(() => {
    setTotal(level + items);
  }, [level, items]);

  const incrementLevel = () => {
    setLevel((level) => Math.min(10, level + 1));
  };

  const decrementLevel = () => {
    setLevel((level) => Math.max(1, level - 1));
  };

  const incrementItems = () => {
    setItems((items) => items + 1);
  };

  const decrementItems = () => {
    setItems((items) => items - 1);
  };

  return (
    <div className="App">
      <Random />
      <Total value={total} />
      <div className="counters">
        <Counter
          title={"Уровень"}
          value={level}
          increment={incrementLevel}
          decrement={decrementLevel}
          reset={() => setLevel(1)}
        />
        <Counter
          title={"Шмотки"}
          value={items}
          increment={incrementItems}
          decrement={decrementItems}
          reset={() => setItems(0)}
        />
      </div>
    </div>
  );
}

export default App;
