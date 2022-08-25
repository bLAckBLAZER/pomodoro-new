import React from "react";

export const formatSeconds = (timeInSeconds: number) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  const mm = minutes.toString().padStart(2, "0");
  const ss = seconds.toString().padStart(2, "0");

  const mmss = `${mm}m : ${ss}s`;

  return mmss;
};

export const startTimer = (
  timerId: number,
  setTimerId: React.Dispatch<any>,
  setProgressValue: React.Dispatch<any>
) => {
  clearInterval(timerId);

  let temp = setInterval(() => setProgressValue((p: number) => p + 1), 1000);

  setTimerId(temp);
};

export const pauseTimer = (timerId: number) => {
  clearInterval(timerId);
};

export const resetTimer = (
  timerId: number,
  setProgressValue: React.Dispatch<any>
) => {
  setProgressValue(0);
  clearInterval(timerId);
};

export {};
