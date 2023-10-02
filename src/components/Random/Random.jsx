import React from "react";
import { useState, useRef } from "react";
import axios from "axios";
import ProgressBar from "../ProgressBar/ProgressBar";

const duration = 2000; // 3 sec

const Random = () => {
  const [randomValue, setRandomValue] = useState(null);
  const timeViewRef = useRef();
  timeViewRef.current = 100;

  const getRandomValue = async () => {
    setRandomValue(-1);
    const response = await axios.post(
      "https://api.random.org/json-rpc/1/invoke",
      {
        headers: {
          contentType: "application/json",
        },
        jsonrpc: "2.0",
        method: "generateIntegers",
        params: {
          apiKey: "e7149772-93ae-48bd-b9a4-ede77705d8f8",
          n: 1,
          min: 1,
          max: 6,
          replacement: true,
        },
        id: Date.now(),
      }
    );

    setRandomValue(response.data.result.random.data[0]);
  };

  return (
    <section className="randomWrapper">
      {/* <div className="elements"> */}
      <button className="randomBtn" onClick={getRandomValue}>
        <i className="bx bxs-dice-5"></i>
      </button>
      {randomValue ? (
        <div className="value">
          {randomValue !== -1 ? (
            <div className="wrapper">
              {randomValue}
              <ProgressBar
                duration={duration}
                delay={10}
                onFinish={() => {
                  setRandomValue(null);
                }}
              />
            </div>
          ) : (
            <div className="loader"></div>
          )}
        </div>
      ) : (
        ""
      )}
      {/* </div> */}
    </section>
  );
};

export default Random;
