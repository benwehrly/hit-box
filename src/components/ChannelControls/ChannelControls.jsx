import { useEffect, useState } from "react";
import "./channelcontrols.css";

export const ChannelControls = ({
  rate,
  steps,
  setRate,
  volume,
  setVolume,
  setCurrentPattern,
  currentPattern,
  fillType,
  type,
  setUserCanDraw
}) => {
  const [volumeFocused, setVolumeFocused] = useState(false);
  const [rateFocused, setRateFocused] = useState(false);
  const volumeThumbStyle = { top: `${-(volume * 25) + 25}px` };
  const volumeTrackStyle = { outline: volumeFocused && "1px solid orangered" };
  const rateThumbStyle = { top: `${-(rate * 25) + 37.5}px` };
  const rateTrackStyle = { outline: rateFocused && "1px solid orangered" };
  const ticks = Array(11).fill(null);

  function handleClear() {
    const clone = JSON.parse(JSON.stringify(currentPattern));
    clone[type] = [];
    setCurrentPattern(clone);
  }

  function handleFill() {
    const clone = JSON.parse(JSON.stringify(currentPattern));
    const newPattern = steps.filter((step) => step % fillType === 1);
    clone[type] = newPattern;
    setCurrentPattern(clone);
  }

  return (
    <div className="channel-controls" onMouseDown={() => requestAnimationFrame(() => setUserCanDraw(false))}>
      <input
        orient="vertical"
        type="range"
        min={0}
        max={1}
        step={0.1}
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
        onFocus={() => setVolumeFocused(true)}
        onBlur={() => setVolumeFocused(false)}
        title={`volume ${volume}`}
      />
      <input
        orient="vertical"
        type="range"
        min={0.5}
        max={1.5}
        step={0.1}
        value={rate}
        onChange={(e) => setRate(Number(e.target.value))}
        onFocus={() => setRateFocused(true)}
        onBlur={() => setRateFocused(false)}
        title={`rate ${rate}`}
      />
      <div className="sliders">
        <div className="slider" style={volumeTrackStyle}>
          <div className="thumb" style={volumeThumbStyle} />
          <div className="ticks">
            {ticks.map((tick, i) => (
              <div key={i} className="tick" />
            ))}
          </div>
        </div>
        <div className="slider" style={rateTrackStyle}>
          <div className="thumb" style={rateThumbStyle} />
          <div className="ticks">
            {ticks.map((tick, i) => (
              <div key={i} className="tick" />
            ))}
          </div>
        </div>
      </div>
      <div className="button-container">
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleFill}>Fill</button>
      </div>
    </div>
  );
};
