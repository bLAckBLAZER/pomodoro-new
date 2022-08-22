// export const formatSeconds = (timeInSeconds) => {
//   const minutes = Math.floor(timeInSeconds / 60);
//   const seconds = timeInSeconds % 60;

//   const mm = minutes.toString().padStart(2, "0");
//   const ss = seconds.toString().padStart(2, "0");

//   const mmss = `${mm}m : ${ss}s`;

//   return mmss;
// };

// export const startTimer = (timerId, setTimerId, setProgressValue) => {
//   clearInterval(timerId);

//   let temp = setInterval(() => setProgressValue((p) => p + 1), 1000);

//   setTimerId(temp);
// };

// export const pauseTimer = (timerId) => {
//   clearInterval(timerId);
// };

// export const resetTimer = (timerId, setProgressValue) => {
//   setProgressValue(0);
//   clearInterval(timerId);
// };

export {};
