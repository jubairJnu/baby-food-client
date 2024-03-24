"use client";

import { useTimer } from "react-timer-hook";

const CountDown = ({ expiryTimestamp }: { expiryTimestamp: Date }) => {
  const {  seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    autoStart: true,
  });

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "20px", color: "red" }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
    </div>
  );
};

export default CountDown;
