import React, { useContext, useEffect, useRef, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Playbutton from "../components/Playbutton";
import Pausebutton from "../components/Pausebutton";
import Settingsbutton from "../components/Settingsbutton";
import SettingsContext from "../components/SettingContext";

const red = "#f54e4e";
const green = "#4aec8c";

export default function Timer() {
  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState("work"); //! work/break/null
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  const tick = () => {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  };

  const initTimer = () => {
    setSecondsLeft(settingsInfo.workMinutes * 60);
  };

  const switchMode = () => {
    const nextMode = modeRef.current === "work" ? "break" : "work";
    const nextSeconds =
      (nextMode === "work"
        ? settingsInfo.workMinutes
        : settingsInfo.breakMinutes) * 60;

    setMode(nextMode);
    modeRef.current = nextMode;

    setSecondsLeft(nextSeconds);
    secondsLeftRef.current = nextSeconds;
  };

  useEffect(() => {
    initTimer();

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }
      tick();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [settingsInfo]);

  const totalSeconds =
    mode === "work"
      ? settingsInfo.workMinutes * 60
      : settingsInfo.breakMinutes * 60;

  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;

  if (seconds < 10) seconds = "0" + seconds;

  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={minutes + ":" + seconds}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: mode === "work" ? red : green,
          trailColor: "rgba(255,255,255,.2)",
        })}
      />
      <div style={{ marginTop: "20px" }}>
        {isPaused ? <Playbutton /> : <Pausebutton />}
      </div>
      <div style={{ marginTop: "20px" }}>
        <Settingsbutton onClick={() => settingsInfo.setShowsettings(true)} />
      </div>
    </div>
  );
}
