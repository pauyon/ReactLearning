import { useEffect, useState } from 'react';

export default function QuestionTimer({ timeout, onTimeout, mode }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log('Setting timeout');
        const timer = setTimeout(onTimeout, timeout);

        return () => {
            console.log('Clearning imteout');
            clearTimeout(timer);
        };
    }, [timeout, onTimeout]);

    useEffect(() => {
        console.log('Setting interval');
        const interval = setInterval(() => {
            console.log('interval ticking...');
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
        }, 100);
        
        return () => {
            console.log('Clearning interval');
            clearInterval(interval);
        };
    }, []);

    return <progress id="question-time" value={remainingTime} max={timeout} className={mode} />;
}