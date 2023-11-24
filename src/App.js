import "./App.css";
import SettingsContext from "./components/SettingContext";
import Settings from "./views/settings";
import Timer from "./views/timer";
import { useState } from "react";

function App() {
  const [showSettings, setShowsettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <main>
      <SettingsContext.Provider
        value={{
          showSettings,
          setShowsettings,
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}>
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
