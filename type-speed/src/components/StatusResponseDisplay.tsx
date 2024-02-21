import React from "react";

interface StatusResponseDisplayProps {
  accuracy: number;
  typeSpeed: number;
}

const StatusResponseDisplay = ({
  accuracy,
  typeSpeed,
}: StatusResponseDisplayProps) => {
  const fontSize = { fontSize: "40px" };
  return (
    <>
      <div className="h-56 grid grid-cols-2 gap-1 content-center ...">
        <div style={fontSize}>Accuracy: {accuracy} %</div>
        <div style={fontSize}>TypeSpeed: {typeSpeed} WPM</div>
      </div>
    </>
  );
};

export default StatusResponseDisplay;
