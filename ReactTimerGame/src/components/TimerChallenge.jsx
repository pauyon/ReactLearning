import { useState, useRef } from 'react';
import ResultModal from './ResultModal.jsx';

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleStartChallenge() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10);
    }

    function handleStopChallenge() {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleResetChallenge() {
        setTimeRemaining(targetTime * 1000);
    }

    return (
        <>
            <ResultModal 
                ref={dialog} 
                targetTime={targetTime} 
                timeRemaining={timeRemaining}
                onReset={handleResetChallenge} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStopChallenge : handleStartChallenge}>
                        {timerIsActive ? "Stop" : "Start"} Start Challenge
                    </button>
                </p>
                <p className={timerIsActive ? "active" : undefined}>
                    {timerIsActive ? "Timer is running..." : "Timer is inactive"}
                </p>
            </section>
        </>
    );
}