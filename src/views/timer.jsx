import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Playbutton from "../components/Playbutton";
import Pausebutton from "../components/Pausebutton";
import Settingsbutton from "../components/Settingsbutton";

const red = "#f54e4e";
const green = "#4aec8c";

export default function Timer() {
  return (
    <div>
      <CircularProgressbar
        value={60}
        text={"60%"}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: "red",
          trailColor: "rgba(255,255,255,.2)",
        })}
      />
      <div style={{ marginTop: "20px" }}>
        <Playbutton />
        <Pausebutton />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Settingsbutton />
      </div>
    </div>
  );
}
