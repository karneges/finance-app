import React from "react";

const SenderCell = ({ sender, color }) => {
  return (
    <div className="sender-cell">
      <div>{sender}</div>
      <div style={{ backgroundColor: color }} className="rectangle"></div>
    </div>
  );
};

export default SenderCell;
