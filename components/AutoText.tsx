import React, { useState, useEffect, useRef, FC } from "react";
import clsx from "clsx";
import Caret from "./Caret";

interface AutoTextProps {
  textArray: string[];
  speed: number;
  delay: number;
  className?: string;
  stopAfterFirst?: boolean;
  controlled?: boolean;
  typingEffect?: "default" | "fade-in";
  newLineEnabled?: boolean;
}

/**
 * AutoText component for creating typing effects.
 * @param {Object} props - Component props.
 * @param {string[]} props.textArray - Array of strings to be displayed sequentially.
 * @param {number} props.speed - Typing speed in milliseconds.
 * @param {number} props.delay - Delay before typing starts.
 * @param {string} [props.className=""] - Additional CSS class.
 * @param {boolean} [props.stopAfterFirst=false] - Whether to stop after typing each string once.
 * @param {boolean} [props.controlled=false] - Whether typing is controlled externally.
 * @param {string} [props.typingEffect="default"] - Typing effect style.
 * @param {boolean} [props.newLineEnabled=true] - Whether to enable new line after each string.
 */
const AutoText: FC<AutoTextProps> = ({
  textArray,
  speed,
  delay,
  className = "",
  stopAfterFirst = false,
  controlled = false,
  typingEffect = "default",
  newLineEnabled = true,
}) => {
  // State variables
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingPaused, setIsTypingPaused] = useState(false);
  const [showCaret, setShowCaret] = useState(true);
  const [isTextFullyTyped, setIsTextFullyTyped] = useState(false);
  const [isGatewayClosed, setIsGatewayClosed] = useState(true);

  // Typing logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isGatewayClosed && !isTypingPaused) {
        const currentText = textArray[currentIndex];
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        } else {
          setIsTextFullyTyped(false);
          if (!stopAfterFirst && !isTextFullyTyped) {
            setIsTypingPaused(true);
            setTimeout(() => {
              setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
              setDisplayText("");
              setIsTypingPaused(false);
            }, speed / 0.9);
          }
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [
    displayText,
    currentIndex,
    textArray,
    speed,
    isTypingPaused,
    stopAfterFirst,
    isTextFullyTyped,
    isGatewayClosed,
  ]);

  // Controlled behavior
  useEffect(() => {
    if (
      controlled &&
      currentIndex === 0 &&
      displayText.length === textArray[currentIndex].length
    ) {
      setIsTypingPaused(true);
    }
  }, [controlled, currentIndex, displayText, textArray]);

  // Caret visibility
  useEffect(() => {
    setShowCaret(!isTypingPaused && displayText.length < textArray[currentIndex].length);
  }, [displayText, currentIndex, textArray, isTypingPaused]);

  // Fully typed state
  useEffect(() => {
    setIsTextFullyTyped(!isTypingPaused && displayText === textArray[currentIndex]);
  }, [isTypingPaused, displayText, currentIndex, textArray]);

  // Gateway opening
  useEffect(() => {
    const gatewayTimeout = setTimeout(() => {
      setIsGatewayClosed(false);
    }, delay);

    return () => clearTimeout(gatewayTimeout);
  }, [delay]);

  // Click handler
  const handleTextClick = () => {
    if (
      !controlled &&
      currentIndex === 0 &&
      displayText.length === textArray[currentIndex].length
    ) {
      setIsTypingPaused(true);
    }
  };

  // Render
  return (
    <span
      className={clsx("autoText text-dark-1 dark:text-light-1", className)}
      onClick={handleTextClick}
    >
      {displayText}
      {isTextFullyTyped && newLineEnabled && <br />}
      {showCaret && <Caret className="caret" />}
    </span>
  );
};

export default AutoText;
