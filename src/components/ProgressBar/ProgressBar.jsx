import React, { useEffect } from "react";
import { useProgress } from "../../hooks/useProgress";

const ProgressBar = ({ duration, delay, onFinish }) => {
  const width = useProgress(duration, delay);

  useEffect(() => {
    if (width <= 0) {
      onFinish();
    }
  }, [onFinish, width]);

  return <div className="progress" style={{ width: width + "%" }}></div>;
};

export default ProgressBar;
