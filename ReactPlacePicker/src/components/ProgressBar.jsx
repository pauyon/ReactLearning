import { useState, useEffect } from "react";

export default function ProgressBar({ timer }) {
    const [remainingTime, setRemainingTime] = useState(timer);
    
      useEffect(() => {
        const interval = setInterval(() => {
          console.log('Interval set')
          setRemainingTime(prevTime => prevTime - 10);
        }, 10);
    
        return () => {
          // Cleanup function to clear the timeout if the component dismounts
          // Dismounting meaning it disappears from DOM
          console.log('Interval cleared');
          clearInterval(interval);
        };
      }, []);
        
      return <progress value={remainingTime} max={timer} />;
}