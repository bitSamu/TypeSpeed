// SpeedTyper component
import React, { useState } from "react";
import Timer from "./Timer";
import { TextDisplay } from "./TextDisplay";
import { Button } from "./Button";
import TypeInput from "./TypeInput";
import StatusResponseDisplay from "./StatusResponseDisplay";

export const SpeedTyper = () => {
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const [rightIndexes, setRightIndexes] = useState<Set<number>>(new Set());
  const [falseIndexes, setFalseIndexes] = useState<Set<number>>(new Set());

  const amountOfRightIndexes = rightIndexes.size;
  const amountOfFalseIndexes = falseIndexes.size;

  let typedChars = amountOfRightIndexes + amountOfFalseIndexes;

  const WORD_LENGTH = 5; // constant for wmp calculation

  const [accuracy, setAccuracy] = useState(0);
  const [typeSpeed, setTypeSpeed] = useState(0);

  const startTimer = () => {
    setIsTimerRunning(true);
  };

  const stopTimer = () => {
    setIsTimerRunning(false);
  };

  /**
   * updates right and false index set
   * @param indexToAdd index to add
   * @param isRightIndex indicates the index is a right typed char or not
   */
  const addIndex = (indexToAdd: number, isRightIndex: boolean) => {
    const newSet = new Set(isRightIndex ? rightIndexes : falseIndexes);

    newSet.add(indexToAdd);

    isRightIndex ? setRightIndexes(newSet) : setFalseIndexes(newSet);

    setAccuracy(Math.round(calculateAccuracy()));
    setTypeSpeed(calculateTypeSpeed());
  };

  /**
   * Calculates the accuracy of the typed chars
   * @returns accuracy of the typed chars
   */
  function calculateAccuracy() {
    return amountOfRightIndexes === 0
      ? 0
      : (amountOfRightIndexes / typedChars) * 100;
  }

  /**
   * Calculates the type speed with the word constant 5
   * @returns the type speed
   */
  function calculateTypeSpeed() {
    return typedChars / WORD_LENGTH / 1;
  }

  const textToType =
    "In the midst of chaos, there lies an opportunity. In the dance of uncertainty, find your rhythm. With each step forward, embrace the unknown. For it is within the realm of the unfamiliar that true growth unfolds. Let courage be your compass, and perseverance your guide. Amidst the noise of the world, listen to the whispers of your heart. For therein lies the wisdom to navigate the journey ahead.";

  return (
    <>
      <Timer isRunning={isTimerRunning} stopTimer={stopTimer} />
      <div className="h-56 grid grid-cols-1 gap-4 content-center ...">
        <TypeInput
          correctText={textToType}
          isRunning={isTimerRunning}
          addIndex={addIndex}
        />
        <Button displayText="Start" onClick={startTimer} />
      </div>
      <TextDisplay
        rightIndexes={rightIndexes}
        falseIndexes={falseIndexes}
        textToType={textToType}
      />

      <StatusResponseDisplay accuracy={accuracy} typeSpeed={typeSpeed} />
    </>
  );
};
