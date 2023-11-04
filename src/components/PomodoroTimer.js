import React, { useEffect, useState } from 'react';
import ControllerPanel from './ControlPanel';
import NavBar from './NavBar';

const PomodoroTimer = () => {
    //  const [minute, setMinute] = useState(25);
    const [second, setSecond] = useState(1500);
    const [isActive, setIsActive] = useState(false);
    const [isBreak, setIsBreak] = useState(false)
    const [progress, setProgress] = useState(100);
    const [totals, setTotalS] = useState(1500);

    const handleStartPomodoro = (minute) => {
        //  setMinute(minute);
        setTotalS(minute*60)
        setSecond(minute * 60);
        setProgress(100);
        setIsActive(!isActive);
    };

    const handleReset = () => {
        setIsActive(false);
        setIsBreak(false); // Reset to work interval
        setTotalS(1500)
        setSecond(1500);
        setProgress(100)
    };

    useEffect(() => {
        let countdown;
        if (isActive) {
            countdown = setInterval(() => {
                if (second === 0) {
                    handleReset();
                } else {
                    setSecond(second - 1);
                    setProgress(Math.floor((second / totals) * 100))
                    console.log(progress)
                }
                //  const totalSeconds = (minute * 60) + second;
            }, 1000);
        }

        return () => clearInterval(countdown);
    }, [isActive, isBreak, totals, second, progress]);

    return (
        <div className='bg-gray-900 h-screen flex'>
            <NavBar/>
            <div className="m-auto w-max rounded  bg-cyan-400 font-[Times] md:w-2/5">
                <h1 className="text-center md:text-5xl text-3xl font-bold p-8 ">Pomodoro Timer</h1>
                <div className="flex h-[200px] w-[200px] m-auto">
                    <svg width="200" height="200" >
                        <g transform='rotate(-90,100,100)'>
                            <circle
                                r="70"
                                cx="100"
                                cy="100"
                                fill='transparent'
                                stroke='currentColor'
                                strokeWidth='1rem'
                                strokeDasharray="439.8"
                                strokeDashoffset="0"
                                className='text-cyan-100'
                            >
                            </circle>
                            <circle
                                r="70"
                                cx="100"
                                cy="100"
                                fill='transparent'
                                stroke='currentColor'
                                strokeWidth='1rem'
                                strokeDasharray="439.8"
                                strokeDashoffset={`${(440 - (440 * (progress / 100)))}`}
                                className='text-gray-900'
                            >
                            </circle>
                            <text className='text-3xl font-bold' transform='rotate(90,100,100)' x="50%" y="50%" dominantBaseline="central" textAnchor='middle'>
                                {`${Math.floor(second / 60)}:${(second % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 })}`}
                            </text>
                        </g>
                    </svg>
                </div>
                <div className="mb-4 text-center">
                    <button
                        onClick={handleReset}
                        className="px-4 py-1 mx-4 rounded-full font-bold bg-orange-300 text-black shadow-lg focus:ring-2
          focus:ring-offset-2 focus:ring-orange-400 hover:bg-orange-400"
                    >
                        Reset
                    </button>
                    <button
                        onClick={() => setIsActive(!isActive)}
                        className={` px-4 py-1 rounded-full text-black font-bold ${isActive ? "bg-red-300 focus:ring-2 focus:ring-offset-2 focus:ring-red-400 shadow-lg hover:bg-red-400" : "bg-green-300 focus:ring-2 focus:ring-offset-2 focus:ring-green-400 shadow-lg hover:bg-green-400"}
        `}
                    >
                        {isActive ? 'Pause' : 'Start'}
                    </button>
                </div>
                <div className="mb-9">
                    <ControllerPanel onStartPomodoro={handleStartPomodoro} onStartLongBreak={handleStartPomodoro} onStartBreak={handleStartPomodoro} />
                </div>
                <div>
                </div>
            </div>
        </div >
    );
};

export default PomodoroTimer;
