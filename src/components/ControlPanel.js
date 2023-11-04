import React from 'react';

const ControllerPanel = ({ onStartPomodoro, onStartBreak, onStartLongBreak }) => {
    return (
        <div className="flex justify-center md:space-x-4 space-x-2 m-3">
            <button
                className="md:px-3 md:py-1 px-2 py-1  font-bold rounded-full bg-teal-300  text-black shadow-lg 
                focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-400 hover:bg-teal-400"
                onClick={() => onStartPomodoro(25)}
            >
                Pomodoro
            </button>
            <button
                className="px-3 font-bold rounded-full bg-teal-300  text-black shadow-lg 
                focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-400 hover:bg-teal-400"
                onClick={() => onStartBreak(5)}
            >
                Short Break
            </button>
            <button
                className="px-3 font-bold rounded-full bg-teal-300 text-black shadow-lg 
                focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-400 hover:bg-teal-400"
                onClick={() => onStartLongBreak(30)}
            >
                Long Break
            </button>
        </div>
    );
};

export default ControllerPanel;
