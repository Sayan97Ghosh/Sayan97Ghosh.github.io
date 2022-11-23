import React from "react";
// import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
// import installNode from "../assets/portfolio/installNode.jpg";
// import navbar from "../assets/portfolio/navbar.jpg";
// import reactParallax from "../assets/portfolio/reactParallax.jpg";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";

import Bitrix24 from "../assets/Bitrix24.png";
import news from "../assets/news.png";
import weather from "../assets/weather.png";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: news,
      title:"First-Post News website Clone",
      desc:"Firstpost is an Indian online news and media website. The site is a part of the Network 18 media conglomerate owned by Reliance Industries, which also runs CNN-News18 and CNBC-TV18.[1]"
      ,
      tech:"React , Api's,Html,Css,JavaScript",
      deploy:"https://fabulous-figolla-a1702b.netlify.app",
      git:"https://github.com/Sayan97Ghosh/sharp-head-9647/tree/main/news-app",

    },
    {
      id: 2,
      src: weather,
      title:"Weather website Clone",
      desc:"Locations can be added or removed by pressing the list icon in the bottom right corner of the application, which allows the user to type in the city's name"
      ,
      tech:" Api's,Html,Css,JavaScript",
      deploy:"https://stirring-crumble-2ce13e.netlify.app",
      git:"https://github.com/Sayan97Ghosh/Weather_App-Geo_Location-/tree/main/Weather%20Application%204",
    },
    {
      id: 3,
      src: Bitrix24,
      title:"Bitrix24 website Clone",
      desc:"Bitrix24 is a collaboration software with complete tools for management, collaboration, and communication. Bitrix24 gives you a unified platform for your files, projects, messages, tasks, and contacts. You can immediately use the platform by simply registering for an account and then inviting your colleagues."
      ,
      tech:" Api's,Html,Css,JavaScript",
      deploy:"https://betrix24.netlify.app/",
      git:"https://github.com/arupadhyay25/Betrix24-App-Clone",
    },
   
   
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
           Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,title,desc,tech,deploy,git }) => (
            <div key={id} className="shadow-md shadow-red-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
               <h4 className=" mt-6 text-1xl font-bold inline border-b-4 border-gray-500" >{title}</h4>
               <p style = {{padding:"10px",fontSize:"15px",color:""}}
                >{desc}</p>
               <p style = {{padding:"10px",fontSize:"15px",color:"white"}}>Tech Use : {tech}</p>
              <div className="flex items-center justify-center ">
                <a href={deploy} target="_blank">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ">
                  Demo
                </button>
                </a>
                <a href={git} target="_blank">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    
    </div>
  );
};

export default Portfolio;