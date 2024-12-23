import { useEffect, useState } from "react";
import Button from "../components/Button";
import useSound from "use-sound";
import Sound from "../assets/鳩時計2.mp3";

const Timer = () => {
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

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="bg-gray-50 p-32 focus:outline-none rounded-lg flex flex-col gap-8 justify-center items-center font-mono">
      <div className="flex justify-center items-center text-7xl border bg-gray-200 px-12 py-4 rounded-lg">
        <div className="flex justify-center">
          {minutes.toString().padStart(2, "0")}
        </div>
        <div className="flex justify-center">:</div>
        <div className="flex justify-center">
          {seconds.toString().padStart(2, "0")}
        </div>
      </div>
      <div className="text-lg flex flex-col justify-center items-center gap-3">
        <div className="grid grid-cols-3 justify-center items-center gap-4">
          <Button onClick={() => handleAddClick(600)} label="10分" />
          <Button onClick={() => handleAddClick(60)} label="1分" />
          <Button onClick={() => handleAddClick(10)} label="10秒" />
        </div>
        <div className="grid grid-cols-2 justify-center items-center gap-4">
          <Button onClick={handleReset} label="リセット" />
          <Button
            onClick={() => setIsRunning((running) => !running)}
            label={isRunning ? "ストップ" : "スタート"}
            disabled={time === 0}
          />
        </div>
      </div>
    </div>
  );
};

export default Timer;
