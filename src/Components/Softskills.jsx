import React from "react";
import time from "../assets/alarm-clock.png";
import change from "../assets/change.png";
import communication from "../assets/communication.png";
import cooperation from "../assets/cooperation.png";
import idea from "../assets/idea.png";
import leadership from "../assets/leadership.png";
import optimistic from "../assets/optimistic.png";
import presentation from "../assets/presentation.png";


const Softskills = () =>{
  const skills = [
    {
      id: 1,
      src: time,
      title: "time",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: change,
      title: "change",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: communication,
      title: "communication",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: cooperation,
      title: "cooperation",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: idea,
      title: "ideas",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: leadership,
      title: "leadership",
      style: "shadow-green-600",
    },
    {
      id: 7,
      src: optimistic,
      title: "optimistic",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: presentation,
      title: "presentation",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Soft Skills
          </p>
          <p className="py-6">These are the Softskills I've Mastered</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg bg-zinc-300 ${style}`}
            >
              <img  src={src} alt="" className="w-20 mx-auto " />
              <p className="mt-4 text-black">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Softskills;
