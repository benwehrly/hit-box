import "./trackposition.css";

export const TrackPosition = ({ step, currentStep }) => {
  const isCurrent = step === currentStep;

  const onStyle = {
    backgroundColor: "white",
    boxShadow: "0 0 1rem 4px red",
  };

  const offStyle = { transition: "5s all cubic-bezier(0,2,1,1)" };

  return <div style={isCurrent ? onStyle : offStyle} />;
};
