import React from "react";

interface TextDisplayProps {
  textToType: string;
  rightIndexes: Set<number>;
  falseIndexes: Set<number>;
}

export const TextDisplay = ({
  textToType,
  rightIndexes,
  falseIndexes,
}: TextDisplayProps) => {
  const renderCharacter = (char: string, index: number) => {
    const isRight = rightIndexes.has(index);
    const isFalse = falseIndexes.has(index);
    const style = {
      color: isRight ? "green" : isFalse ? "red" : "black",

      margin: "0",
      letterSpacing: "-1px",
    };
    return (
      <span key={index} style={style}>
        {char}
      </span>
    );
  };

  return (
    <div
      className="h-30 gap-x-2 content-center border-solid border-2 border-sky-500 flex flex-wrap"
      style={{ margin: 0, padding: 0 }}
    >
      {textToType.split("").map((char, index) => renderCharacter(char, index))}
    </div>
  );
};
