import React, { useState } from "react";
import { random } from "../../lib/random";
import ProgressBar from "../ProgressBar/ProgressBar";

const duration = 2000; // 3 sec

const Random = () => {
  const [randomValue, setRandomValue] = useState({ value: null });

  const getRandomValue = () => {
    setRandomValue({ value: random(1, 6), key: Date.now() });
  };

  const resetRandomValue = () => {
    setRandomValue((prev) => ({ ...prev, value: null }));
  };

  return (
    <section className="randomWrapper">
      <button className="randomBtn" onClick={getRandomValue}>
        <i className="bx bxs-dice-5"></i>
      </button>
      {randomValue.value && (
        <div className="value">
          <div className="wrapper">
            {randomValue.value}
            <ProgressBar
              key={randomValue.key}
              duration={duration}
              delay={10}
              onFinish={resetRandomValue}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Random;
