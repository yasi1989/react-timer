import Button from "../../../components/Button";

type TimerHandlersProps = {
  onAddTime: (time: number) => void;
  onReset: () => void;
  onToggle: () => void;
  isRunning: boolean;
  time: number;
};

const TimerHandlers = ({
  onAddTime,
  onReset,
  onToggle,
  isRunning,
  time,
}: TimerHandlersProps) => {
  return (
    <div className="text-lg flex flex-col justify-center items-center gap-3">
      <div className="grid grid-cols-3 justify-center items-center gap-4">
        <Button onClick={() => onAddTime(600)} label="10分" />
        <Button onClick={() => onAddTime(60)} label="1分" />
        <Button onClick={() => onAddTime(10)} label="10秒" />
      </div>
      <div className="grid grid-cols-2 justify-center items-center gap-4">
        <Button onClick={onReset} label="リセット" />
        <Button
          onClick={onToggle}
          label={isRunning ? "ストップ" : "スタート"}
          disabled={time === 0}
        />
      </div>
    </div>
  );
};

export default TimerHandlers;
