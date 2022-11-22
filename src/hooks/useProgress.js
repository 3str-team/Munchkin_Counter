import { useEffect, useState } from "react";

export const useProgress = (duration, delay) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress((progress) => progress - (100 * delay) / duration);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  });

  return progress;
};
