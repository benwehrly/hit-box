import { useEffect, useState } from "react";
import { ChannelControls } from "../ChannelControls/ChannelControls";
import { Step } from "../Step/Step";
import "./channel.css";

export const Channel = ({
  steps,
  type,
  currentStep,
  isPlaying,
  activePreset,
  setActivePreset,
  audio,
  currentPattern,
  setCurrentPattern,
  updatePattern,
  fillType,
}) => {
  const [volume, setVolume] = useState(1);
  const [rate, setRate] = useState(1);
  const [fill, setFill] = useState("none");
  const [userCanDraw, setUserCanDraw] = useState(false);

  useEffect(() => {
    function endAnimationOnMouseUp() {
      setUserCanDraw(false);
    }

    window.addEventListener("mouseup", endAnimationOnMouseUp);

    return () => window.removeEventListener("mouseup", endAnimationOnMouseUp);
  }, []);

  return (
    <div
      className={userCanDraw ? "drawAnimation channel" : "channel"}
      onMouseDown={() => setUserCanDraw(true)}
      onMouseUp={() => setUserCanDraw(false)}
    >
      <p tabIndex={0} onClick={() => audio.play()}>
        {type}
      </p>
      {steps.map((step) => (
        <Step
          key={step}
          type={type}
          currentStep={currentStep}
          steps={steps}
          step={step}
          isPlaying={isPlaying}
          activePreset={activePreset}
          audio={audio}
          currentPattern={currentPattern}
          setCurrentPattern={setCurrentPattern}
          updatePattern={updatePattern}
          volume={volume}
          rate={rate}
          fill={fill}
          setFill={setFill}
          userCanDraw={userCanDraw}
        />
      ))}
      <ChannelControls
        userCanDraw={userCanDraw}
        setUserCanDraw={setUserCanDraw}
        rate={rate}
        steps={steps}
        setRate={setRate}
        volume={volume}
        setVolume={setVolume}
        fill={fill}
        type={type}
        setCurrentPattern={setCurrentPattern}
        currentPattern={currentPattern}
        activePreset={activePreset}
        setActivePreset={setActivePreset}
        fillType={fillType}
      />
    </div>
  );
};
