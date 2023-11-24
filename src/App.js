import "./App.css";
import Settings from "./views/settings";
import Timer from "./views/timer";
import { useState } from "react";

function App() {
  const [showSettings, setShowsettings] = useState(true);

  return <main>{showSettings ? <Settings /> : <Timer />}</main>;
}

export default App;
