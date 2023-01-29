import React, { useEffect, useState } from "react";
import { KeyPad } from "../KeyPad/KeyPad";
import "./keycontrols.css";

export const KeyControls = ({ kit }) => {
  const [activeKeys, setActiveKeys] = useState([]);

  const keys = ["A", "D", "J", "K", "L"];

  useEffect(() => {
    function handleKeyDown(e){
      setActiveKeys((prev) => {
        const newKeys = [...prev];
        keys.forEach((k) => e.key.toUpperCase() === k && newKeys.push(k));
        return newKeys;
      });
    };
    function handleKeyUp(e){
      setActiveKeys((prev) => {
        const newKeys = prev.filter((k) => e.key.toUpperCase() !== k);
        return newKeys;
      });
    };
    document.body.addEventListener("keydown", handleKeyDown);
    document.body.addEventListener("keyup", handleKeyUp);
    return () => {
      document.body.removeEventListener("keydown", handleKeyDown);
      document.body.removeEventListener("keydown", handleKeyUp);
    };
  }, []);

  return (
    <div className="key-controls flex-start">
      <div className="key-pad-container flex-start">
        {keys.map((keyPad, i) => (
          <KeyPad
            key={i}
            keyPad={keyPad}
            activeKeys={activeKeys}
            kit={kit}
            i={i + 1}
          />
        ))}
      </div>
    </div>
  );
};
