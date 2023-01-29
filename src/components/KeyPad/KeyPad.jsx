import { useEffect, useState } from 'react';

export const KeyPad = ({ keyPad, activeKeys, kit, i }) => {
    
    const [isClicked, setIsClicked] = useState(false);
    const isActive = activeKeys.includes(keyPad) || isClicked;
  
    const keyStyle = {
      backgroundColor: "rgb(255,200,160)",
      marginTop: -10,
      color: "orangered",
      border: "2px solid orangered",
      boxShadow: "0 0 35px 2px orangered",
    };
  
    useEffect(() => {
      if (isActive) {
        const audio = Object.values(kit)[i]
        audio.play();
      }
    }, [isActive]);
  
    return (
      <div
        className="key-pad"
        style={isActive ? keyStyle : null}
        onMouseDown={() => setIsClicked(true)}
        onMouseUp={() => setIsClicked(false)}
      >
        {keyPad}
      </div>
    );
  };