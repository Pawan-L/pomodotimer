import React from "react";
import NavBar from "./NavBar";

const Home = () => {
    
    return (
        <div className="bg-gray-900 h-screen flex">
            <NavBar/>
            <div className="text-white mx-2 font-[poppins] mt-24 md:mx-48 md:mt-44">
            <h3 className="font-bold text-2xl">Pomodoro Technique:</h3>
            <p className="mx-4">
                The Pomodoro Technique is designed to help individuals focus and be more productive by breaking work into short, concentrated intervals known as "Pomodoros." 
                A Pomodoro is typically set to 25 minutes, followed by a 5-minute break.
                The Pomodoro Timer is a simple yet effective technique that aims to boost productivity, improve time management, and reduce procrastination. 
                It's popular among students, professionals, and anyone looking to enhance their efficiency in tasks that require focused work.
            </p>
            <h3 className="font-bold text-2xl">Benefits:</h3>
            <ul className="mx-4 list-disc">
                <li>Helps maintain focus and concentration on tasks</li>
                <li>Prevents burnout by encouraging regular breaks.</li>
                <li>Increases productivity by breaking tasks into manageable chunks.</li>
                <li>Enhances time management skills.</li>
            </ul>
            </div>
        </div>
    )
}

export default Home;