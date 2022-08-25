import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useLocation } from "react-router-dom";
import "./Pomodoro.css";
import { useState, useEffect } from "react";
import {
  formatSeconds,
  startTimer,
  pauseTimer,
  resetTimer,
} from "../../utils/pomodoroActions";
import { useTitle } from "../../utils/useTitle";
import { getTheme } from "../../utils/getTheme";
import { useTheme } from "../../contexts/ThemeContext";
import { Task, TaskState } from "../../contexts/TaskContext.types";

type locationStateType = {
  task: Task;
};

export const Pomodoro = () => {
  const location = useLocation();
  const { task } = location.state as locationStateType;
  const [progressValue, setProgressValue] = useState(0);
  const [timerId, setTimerId] = useState(0);
  const { theme } = useTheme();

  // to reset the timer (if set) when we leave the pomodor page
  useEffect(() => {
    return () => {
      resetTimer(timerId, setProgressValue);
    };
  }, []);

  // Update page title along with pomodoro time
  useTitle(`${formatSeconds(task.taskTime * 60 - progressValue)} | Focus`);

  // When the timer ends, reset it!
  if (progressValue > task.taskTime * 60) {
    resetTimer(timerId, setProgressValue);
  }

  return (
    <main className={`main-container ${getTheme(theme)}`}>
      <div className="container">
        <section className={`task-container ${getTheme(theme)}`}>
          <div className="grid-2-col gap-1">
            <article className="flex flex-col align-ctr">
              <div className="pomodoro-circle">
                <CircularProgressbar
                  value={progressValue}
                  text={formatSeconds(task.taskTime * 60 - progressValue)}
                  minValue={0}
                  maxValue={task.taskTime * 60}
                  styles={buildStyles({
                    textSize: "0.8rem",
                    textColor: theme === "dark" ? "white" : "",
                    pathColor: "#50bdff",
                    trailColor: theme === "dark" ? "white" : "",
                  })}
                />
              </div>

              <div className="flex flex-col width-100">
                <div className="flex">
                  <button
                    className="btn btn-primary btn-icon flex-1"
                    onClick={() =>
                      startTimer(timerId, setTimerId, setProgressValue)
                    }
                  >
                    <i className="fas fa-play"></i>
                    Start
                  </button>
                  <button
                    className="btn btn-secondary btn-icon flex-1"
                    onClick={() => pauseTimer(timerId)}
                  >
                    <i className="fas fa-pause"></i>
                    Pause
                  </button>
                </div>
                <button
                  className="btn"
                  onClick={() => resetTimer(timerId, setProgressValue)}
                >
                  Reset
                </button>
              </div>
            </article>

            <article>
              <div className="heading txt-center mg-y-1">{task.taskTitle}</div>
              <div className="task-detail txt-center">
                {task.taskDescription}
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
};
