import React from "react";
import "./App.css";
import PlayerList from "./components/PlayerList";
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div>
      <label>
        <input
          type="checkbox"
          onClick={() => setDarkMode(!darkMode)}
          checked={darkMode}
        />{" "}
        Dark Mode
      </label>
      <PlayerList />
    </div>
  );
}

export default App;
