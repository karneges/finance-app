import React from "react";

const CircleText = ({ text, value }) => {
  return (
    <div className="circle-text">
      <div>{text}</div>
      <div>{value}</div>
    </div>
  );
};

export default CircleText;
