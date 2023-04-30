import React from "react";
import "./StatusComponent.css";
function StatusComponent({ col }) {
  return <span className="dot" style={{ backgroundColor: col }}></span>;
}

export default StatusComponent;
