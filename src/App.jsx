import { useState, useEffect } from "react";
import "./App.css";
import { Howl } from "howler";
import { Controls } from "./components/GlobalControls/GlobalControls";
import { Channel } from "./components/Channel/Channel";
import { TrackPosition } from "./components/TrackPosition/TrackPosition";
import { kits } from "./constants";
import { KeyControls } from "./components/KeyControls/KeyControls";
import useInterval from "./hooks/useInterval";

export default function App() {
  const steps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const [isPlaying, setIsPlaying] = useState(false);
  const [beatsPerMinute, setBeatsPerMinute] = useState(104);
  const stepDuration = (15000 / beatsPerMinute).toFixed(0);
  const [width, setWidth] = useState(undefined);
  const smallScreen = width < 1080;
  const [kitIndex, setKitIndex] = useState(0);
  const kit = kits[kitIndex];
  const channels = ["kick", "snare", "clap", "hat", "perc"];
  const [fillType, setFillType ] = useState(2);

  const [preset1, setPreset1] = useState({
    kick: [1,2,7, 9,10],
    snare: [5, 13],
    clap: [5, 13],
    hat: [1,3,5, 7,9, 11,13, 15],
    perc: [12, 15],
    id: 1,
  });

  const [preset2, setPreset2] = useState({
    clap: [5, 13],
    hat: [1, 3, 5,7,9,11,13,15],
    kick: [1, 7],
    perc: [3, 6, 9, 12, 15, 16],
    snare: [5, 13],
    id: 2,
  });

  const [preset3, setPreset3] = useState({
    kick: [1, 5, 9, 13],
    snare: [4, 7, 11, 15],
    clap: [4, 7, 11, 12, 14, 15],
    hat: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
    perc: [],
    id: 3,
  });

  const [preset4, setPreset4] = useState({
    kick: [1, 4, 7, 16],
    snare: [9],
    clap: [9, 14],
    hat: [1, 3, 5, 7, 9, 11, 13, 15],
    perc: [12, 15],
    id: 4,
  });

  const [currentPattern, setCurrentPattern] = useState(
    JSON.parse(JSON.stringify(preset1))
  );
  const [activePreset, setActivePreset] = useState(
    JSON.parse(JSON.stringify(preset1))
  );
  

  //Effects

  const { currentStep, setCurrentStep } = useInterval(isPlaying, stepDuration);

  useEffect(() => setCurrentStep(1), [activePreset]);

  useEffect(() => {
    function handlePlay(e) {
      if (e.key === "p" || e.key === "P") {
        setIsPlaying(!isPlaying);
        setCurrentStep(1);
      }
    }

    document.body.addEventListener("keypress", handlePlay);

    return () => document.body.removeEventListener("keypress", handlePlay);
  }, [isPlaying]);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handlePlayButtonClick() {
    setIsPlaying(!isPlaying);
    setCurrentStep(1);
  }

  function updatePattern(step, state, newVal) {
    if (!state) {
      setCurrentPattern((prevPattern) => {
        const newPattern = { ...prevPattern };
        newPattern[step].push(newVal);
        return newPattern;
      });
    } else {
      setCurrentPattern((prevPattern) => {
        const newPattern = { ...prevPattern };
        newPattern[step] = prevPattern[step].filter((i) => i !== newVal);
        return newPattern;
      });
    }
  }

  return (
    <div className="App">
      <div className="title">
        <h1>[ Hit Box ]</h1>
        <h2>A Browser Based Drum Machine</h2>
      </div>
      {smallScreen ? (
        <p className="sorry-message">
          The screen size on your device may not be optimized for this app.
          View the app on a larger screen to see more content.
        </p>
      ) : (
        <div className="sequencer">
          <Controls
            beatsPerMinute={beatsPerMinute}
            setBeatPerMinute={setBeatsPerMinute}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            activePreset={activePreset}
            setActivePreset={setActivePreset}
            preset1={preset1}
            preset2={preset2}
            preset3={preset3}
            preset4={preset4}
            setPreset1={setPreset1}
            setPreset2={setPreset2}
            setPreset3={setPreset3}
            setPreset4={setPreset4}
            currentPattern={currentPattern}
            setCurrentPattern={setCurrentPattern}
            kits={kits}
            kitIndex={kitIndex}
            setKitIndex={setKitIndex}
            fillType={fillType}
            setFillType={setFillType}
          />
          <div className="track-position">
            {steps.map((step) => (
              <TrackPosition key={step} currentStep={currentStep} step={step} />
            ))}
          </div>
          {channels.map((channel) => (
            <Channel
              key={channel}
              steps={steps}
              currentStep={currentStep}
              isPlaying={isPlaying}
              type={channel}
              activePreset={activePreset}
              setActivePreset={setActivePreset}
              audio={kit[channel]}
              currentPattern={currentPattern}
              setCurrentPattern={setCurrentPattern}
              updatePattern={updatePattern}
              fillType={fillType}
            />
          ))}
          <button className="play-button" onClick={handlePlayButtonClick}>
            {isPlaying ? "Pause [P]" : "Play [P]"}
          </button>
        </div>
      )}
      <KeyControls kit={kit} />
    </div>
  );
}
