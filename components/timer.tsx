import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
const Timer = () => {
  const [isPlay, setplaying] = useState(false);
  useEffect(() => {}, [isPlay]);
  const children = ({ remainingTime }: any) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="flex-col flex items-center justify-center">
      {isPlay ? (
        <>
          <CountdownCircleTimer
            isPlaying
            duration={60}
            colors="#000"
            onComplete={() => {
              setTimeout(function () {
                setplaying(false);
              }, 100);
              return { shouldRepeat: true, delay: 0.1 }; // repeat animation in 1.5 seconds
            }}
          >
            {(remainingTime) => children(remainingTime)}
          </CountdownCircleTimer>
        </>
      ) : (
        <CountdownCircleTimer duration={60} colors="#000">
          {(remainingTime) => children(remainingTime)}
        </CountdownCircleTimer>
      )}
      <button
        type="button"
        onClick={() => setplaying(!isPlay)}
        className=" mt-10 inline-flex items-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
      >
        {isPlay ? "Stop" : "Start Timer"}
      </button>
    </div>
  );
};
export default Timer;
