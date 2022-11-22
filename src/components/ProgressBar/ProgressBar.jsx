import React from "react";
import { useEffect } from "react";
import { useProgress } from "../../hooks/useProgress";

const ProgressBar = ({ duration, delay, onFinish }) => {
  const width = useProgress(duration, delay);

  useEffect(() => {
    if (width <= 0) {
      onFinish();
    }
  }, [width]);

  return <div className="progress" style={{ width: width + "%" }}></div>;
};

export default ProgressBar;
