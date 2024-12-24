type TimerDisplayProps = {
  minutes: number;
  seconds: number;
};

const TimerDisplay = ({ minutes, seconds }: TimerDisplayProps) => {
  return (
    <div className="flex justify-center items-center text-7xl border bg-gray-200 px-12 py-4 rounded-lg">
      <div className="flex justify-center">
        {minutes.toString().padStart(2, "0")}
      </div>
      <div className="flex justify-center">:</div>
      <div className="flex justify-center">
        {seconds.toString().padStart(2, "0")}
      </div>
    </div>
  );
};

export default TimerDisplay;
