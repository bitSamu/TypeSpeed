// Timer component
import React, { useState, useEffect } from "react";
import "../style/Timer.css"; // Import der CSS-Datei

interface TimerProps {
  isRunning: boolean;
  stopTimer: () => void;
}

const SECONDS = 60;

const Timer = ({ isRunning, stopTimer }: TimerProps) => {
  const [counter, setCounter] = useState(SECONDS);

  useEffect(() => {
    let timerId: string | number | NodeJS.Timeout | undefined;

    if (isRunning && counter > 0) {
      timerId = setTimeout(() => setCounter(counter - 1), 1000);
    }
    if (counter === 0) {
      stopTimer();
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [counter, isRunning]);

  return (
    <div className="h-56 grid grid-cols-1 gap-4 content-center ...">
      <div className="counter-style">{counter}</div>
    </div>
  );
};

export default Timer;
