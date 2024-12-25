import { useEffect, useState } from "react";
import useSound from "use-sound";
import Sound from "../assets/鳩時計2.mp3";

export const useTimer = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState(false);
  const [play] = useSound(Sound, { volume: 0.7 });
  const handleAddClick = (time: number) => {
    setTime((prev) => prev + time);
  };
  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };
  const toggleTimer = () => {
    setIsRunning((running) => !running);
  };

  useEffect(() => {
    if (!isRunning) return;
    const intervalId = setInterval(() => {
      if (time === 0) {
        setIsRunning(false);
        play();
      } else {
        setTime((prev) => prev - 1);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, time]);

  return {
    time,
    isRunning,
    handleAddClick,
    handleReset,
    toggleTimer,
  };
};
