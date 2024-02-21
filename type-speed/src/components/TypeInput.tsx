import React, { useState, useEffect } from "react";

interface TypeInputProps {
  correctText: string;
  isRunning: boolean;
  addIndex: (indexToAdd: number, isRightIndex: boolean) => void;
}

const TypeInput = ({ correctText, isRunning, addIndex }: TypeInputProps) => {
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypedText(event.target.value);
  };

  useEffect(() => {
    addIndex(
      index - 1,
      typedText.charAt(index - 1) === correctText.charAt(index - 1)
        ? true
        : false
    );

    setIndex(index + 1);
  }, [typedText]);

  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          style={{ color: "#000000" }}
          onChange={handleChange}
          disabled={!isRunning}
          autoFocus
        />
      </div>
    </>
  );
};

export default TypeInput;
