import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface ButtonProps {
  displayText: string;
  onClick: () => void;
}

export const Button = ({ displayText, onClick }: ButtonProps) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={onClick}
      >
        {displayText}
      </button>
    </>
  );
};
