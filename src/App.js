import React, { useState } from "react";
import DarkModeWrapper from "./components/DarkModeWrapper";
import Header from "./components/Header";
import TweetsContainer from "./components/TweetsContainer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <DarkModeWrapper darkMode={darkMode}>
      <Header darkMode={darkMode} onToggle={toggleDarkMode} />
      <TweetsContainer />
    </DarkModeWrapper>
  );
}

export default App;
