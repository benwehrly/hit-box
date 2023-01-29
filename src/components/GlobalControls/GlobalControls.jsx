import "./controls.css";
import { useEffect, useState } from "react";
import { IoIosSave } from "react-icons/Io";

export const Controls = ({
  beatsPerMinute,
  setBeatPerMinute,
  activePreset,
  setActivePreset,
  preset1,
  preset2,
  preset3,
  preset4,
  setPreset1,
  setPreset2,
  setPreset3,
  setPreset4,
  currentPattern,
  setCurrentPattern,
  kits,
  kitIndex,
  setKitIndex,
  fillType,
  setFillType,
}) => {
  const presets = [preset1, preset2, preset3, preset4];
  const setPresets = [setPreset1, setPreset2, setPreset3, setPreset4];

  function savePatternToPreset() {
    presets.forEach((preset, i) => {
      if(JSON.stringify(activePreset) === JSON.stringify(preset)){
        setPresets[i](currentPattern)
      }
    })
  }

  return (
    <div className="controls">
      <p>Controls</p>
      <div className="control-inputs">
        <div>
          <label htmlFor="bpm">Bpm</label>
          <input
            type="number"
            id="bpm"
            placeholder="bpm"
            value={beatsPerMinute}
            onChange={(e) => setBeatPerMinute(Number(e.target.value))}
            min={20}
            max={300}
          />
        </div>
        <Kits kits={kits} kitIndex={kitIndex} setKitIndex={setKitIndex} />
        <FillType fillType={fillType} setFillType={setFillType} />
        <div className="presets">
          {presets.map((preset, i) => (
            <Preset
              key={i}
              preset={preset}
              i={i}
              activePreset={activePreset}
              setActivePreset={setActivePreset}
              currentPattern={currentPattern}
              setCurrentPattern={setCurrentPattern}
            />
          ))}
          <button className="save-button" onClick={savePatternToPreset}>
            <IoIosSave size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

const Kits = ({ kits, kitIndex, setKitIndex }) => {
  const name = kits[kitIndex].name;

  function nextKit() {
    if (kitIndex === kits.length - 1) {
      setKitIndex(0);
    } else {
      setKitIndex((curr) => curr + 1);
    }
  }

  function prevKit() {
    if (kitIndex === 0) {
      setKitIndex(kits.length - 1);
    } else {
      setKitIndex((curr) => curr - 1);
    }
  }

  return (
    <div className="kits flex">
      <label htmlFor="">Kit</label>
      <button onClick={prevKit}>&#9664;</button>
      <p className="flex">{name}</p>
      <button onClick={nextKit}>&#9654;</button>
    </div>
  );
};

const Preset = ({
  preset,
  i,
  activePreset,
  setActivePreset,
  setCurrentPattern,
}) => {
  const currentPresetStyle = {
    backgroundColor: "rgb(255,200,160)",
    boxShadow: "0 0 15px 0 orangered",
    border: "2px solid orangered",
    color: "orangered",
  };

  const isCurrentPreset = preset.id === activePreset.id;
  const presetId = i + 1

  useEffect(() => {
    setCurrentPattern(JSON.parse(JSON.stringify(activePreset)));
  }, [activePreset]);

  return (
    <button
      onClick={() => setActivePreset(preset)}
      style={isCurrentPreset ? currentPresetStyle : null}
    >
      {presetId}
    </button>
  );
};

const FillType = ({ setFillType }) => {
  
  function handleFillType(e) {
    setFillType(Number(e.target.value));
  }

  return (
    <div className="flex fill-controls">
      <label>Fill Every</label>
      <div className='fill-options'>
        <label htmlFor="radio1">2</label>
        <input name="fill" id='radio1' type="radio" value={2} defaultChecked onChange={handleFillType} />
        <label htmlFor="radio2">3</label>
        <input name="fill" id='radio2' type="radio" value={3} onChange={handleFillType} />
        <label htmlFor="radio3">4</label>
        <input name="fill" id='radio3' type="radio" value={4} onChange={handleFillType} />
      </div>
      <p>steps</p>
    </div>
  );
};
