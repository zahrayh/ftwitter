import React, { useState } from "react";
import Menu from "./Menu";

function Header({ darkMode, onToggle }) {
  return (
    <div className={`ui fixed menu ${darkMode ? "inverted" : ""}`}>
      <div className="menu item">Fwitter</div>
      <div className="right menu">
        <Menu onToggle={onToggle} />
      </div>
    </div>
  );
}

export default Header;
