import React from 'react';

const ControllerPanel = ({ onStartPomodoro, onStartBreak, onStartLongBreak }) => {
    return (
        <div className="flex justify-center space-x-4">
            <button
                className="px-4 py-2 rounded-full bg-blue-500 font-bold text-white shadow-lg 
                focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-500"
                onClick={() => onStartPomodoro(25)}
            >
                Pomodoro
            </button>
            <button
                className="px-4 py-2 rounded-full bg-yellow-500 font-bold text-white shadow-lg 
                focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-500"
                onClick={() => onStartBreak(5)}
            >
                Short Break
            </button>
            <button
                className="px-4 py-2 rounded-full bg-purple-500 font-bold text-white shadow-lg 
                focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-500"
                onClick={() => onStartLongBreak(30)}
            >
                Long Break
            </button>
        </div>
    );
};

export default ControllerPanel;
