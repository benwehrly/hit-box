import { useState, useEffect } from 'react';

const useInterval = (bool, duration) => {

    const [currentStep, setCurrentStep ] = useState(1)

    useEffect(() => {
        if(!bool) return
        const id = setInterval(() => {
            if (currentStep === 16) {
              setCurrentStep(1);
            } else {
              setCurrentStep((curr) => curr + 1);
            }
          }, duration);
          return () => clearInterval(id)

    },[currentStep, bool])

    return {
        currentStep, setCurrentStep, 
    }
}

export default useInterval