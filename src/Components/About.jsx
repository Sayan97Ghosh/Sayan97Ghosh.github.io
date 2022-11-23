import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hi Everyone, I am Sayan Ghosh from Kolkata, West-Bengal. I have completed my Degree in Bachelor in Computer Application from Singhaniya University.
          Some of my interests apart form Coding :  Technology Enthusiast,
          Love Singing,
          Travelling,
           && Calisthenics.
          
        </p>

        <br />

        <p className="text-xl">
        The basic architecture concepts which I believe every web developer should learn and understand. If you have just started with web development, you may find it complicated, but it’s worth reading. I won’t say much, as the below diagram says it all.

        I always try to understand the flow before doing any change or while debugging issues. Once you know workflow like where is the input coming from, where is the logic and data, and how the response is returned makes a lot of difference in your day-to-day work.
        </p>
      </div>
    </div>
  );
};

export default About;