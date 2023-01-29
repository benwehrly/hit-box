import { useEffect, useState } from "react";
import "./step.css";

export const Step = ({
  step,
  currentStep,
  isPlaying,
  activePreset,
  audio,
  updatePattern,
  type,
  rate,
  volume,
  currentPattern,
  userCanDraw,
}) => {
  const [isActive, setIsActive] = useState(false);
  const isCurrent = currentStep === step;
  const beat = (step - 1) / 4 + 1;

  useEffect(() => {
    setIsActive(false);
    activePreset[type].map((val) => {
      if (val === step) {
        setIsActive(true);
      }
    });
  }, [activePreset]);

  useEffect(() => {
    setIsActive(false);
    currentPattern[type].map((val) => {
      if (val === step) {
        setIsActive(true);
      }
    });
  }, [currentPattern]);

  useEffect(() => {
    function playAudio() {
      if (isActive && isPlaying && isCurrent) {
        audio.rate(rate).volume(volume).play();
      }
    }
    playAudio();
  }, [isPlaying, isActive, isCurrent, audio]);

  const activeStyles = {
    backgroundColor:
      isCurrent && isPlaying ? "rgb(230,255,250)" : "rgb(200,255,230)",
    boxShadow: "0 0 10px 0 rgb(0,255,160)",
    scale: isCurrent && isPlaying && "1.2",
    color: "seagreen",
    transition: isCurrent ? "none" : "all .4s",
  };

  function handleClick() {
    setIsActive(!isActive);
    updatePattern(type, isActive, step);
  }

  function handleHoverFill() {
    if (isActive) return;
    if (userCanDraw) {
      setIsActive(true);
      updatePattern(type, isActive, step);
    }
  }

  return (
    <button
      className="step"
      style={isActive ? activeStyles : null}
      onMouseDown={handleClick}
      onMouseEnter={handleHoverFill}
    >
      {beat % 1 === 0 && beat}
    </button>
  );
};
