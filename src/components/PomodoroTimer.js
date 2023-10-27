import React, { useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import ControllerPanel from './ControlPanel';

const PomodoroTimer = () => {
    const [customTime, setCustomTime] = useState(1500);
    const [isActive, setIsActive] = useState(false);
    const [key, setKey] = useState(0);

    const handleStartPomodoro = (duration) => {
        setCustomTime(duration * 60);
        setIsActive(true);
        setKey(key + 1);
    };

    const handleReset = () => {
        setIsActive(false);
        setCustomTime(1500);
        setKey(key + 1);
    };

    const onComplete = () => {
        setIsActive(false);
        setKey(key + 1);
    };

    return (
        <div className="container overflow-x-auto  m-auto max-w-xs rounded flex flex-col items-center justify-center mt-24 bg-gray-500">
            <h1 className="text-3xl font-bold mb-4 p-8">Pomodoro Timer</h1>
            <div className="mb-6">
                <CountdownCircleTimer
                    key={key}
                    isPlaying={isActive}
                    duration={customTime}
                    colors={[['#107dac']]}
                    onComplete={onComplete}
                    size={200}
                >
                    {({ remainingTime }) => (
                        <div className="text-5xl text-center">
                            {Math.floor(remainingTime / 60)}:{(remainingTime % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 })}
                        </div>
                    )}
                </CountdownCircleTimer>
            </div>
            <div className="mb-4">
                <button
                    onClick={handleReset}
                    className="px-5 py-2 mx-4 rounded-full font-bold bg-gray-600 text-white shadow-lg focus:ring-2
          focus:ring-offset-2 focus:ring-gray-500"
                >
                    Reset
                </button>
                <button
                    onClick={() => setIsActive(!isActive)}
                    className={` px-5 py-2 rounded-full text-white font-bold ${isActive ? "bg-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-red-500 shadow-lg" : "bg-green-600 focus:ring-2 focus:ring-offset-2 focus:ring-green-500 shadow-lg"}
        `}
                >
                    {isActive ? 'Pause' : 'Start'}
                </button>
            </div>
            <div className="mb-9">
                <ControllerPanel onStartPomodoro={handleStartPomodoro} onStartLongBreak={handleStartPomodoro} onStartBreak={handleStartPomodoro} />
            </div>
        </div>
    );
};

export default PomodoroTimer;
