import { useTimer } from "../../hooks/useTimer";
import TimerDisplay from "./components/TimerDisplay";
import TimerHandlers from "./components/TimerHandlers";

const Timer = () => {
  const { time, isRunning, handleAddClick, handleReset, toggleTimer } =
    useTimer();
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="bg-gray-50 p-32 focus:outline-none rounded-lg flex flex-col gap-8 justify-center items-center font-mono">
      <TimerDisplay minutes={minutes} seconds={seconds} />
      <TimerHandlers
        time={time}
        isRunning={isRunning}
        onAddTime={handleAddClick}
        onReset={handleReset}
        onToggle={toggleTimer}
      />
    </div>
  );
};

export default Timer;
