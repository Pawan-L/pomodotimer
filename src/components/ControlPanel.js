import React from 'react';

const ControllerPanel = ({ onStartPomodoro, onStartBreak, onStartLongBreak }) => {
    return (
        <div className="flex  justify-center space-x-2">
            <button
                className="p-2 font-bold rounded-full bg-blue-500  text-white shadow-lg 
                focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-500"
                onClick={() => onStartPomodoro(25)}
            >
                Pomodoro
            </button>
            <button
                className="p-1 font-bold rounded-full bg-yellow-500  text-white shadow-lg 
                focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-500"
                onClick={() => onStartBreak(5)}
            >
                Short Break
            </button>
            <button
                className="p-1 font-bold rounded-full bg-purple-500 text-white shadow-lg 
                focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-500"
                onClick={() => onStartLongBreak(30)}
            >
                Long Break
            </button>
        </div>
    );
};

export default ControllerPanel;
