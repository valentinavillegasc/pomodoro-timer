import React from "react";
import ReactSlider from "react-slider";
import "../styles/slider.css";
export default function Settings() {
  return (
    <div style={{ textAlign: "left" }}>
      <label htmlFor="">Work minutes:</label>
      <ReactSlider
        className={"slider"}
        thumbClassName={"thumb"}
        value={45}
        min={1}
        max={120}
      />
      <label htmlFor="">Break minutes:</label>
    </div>
  );
}
