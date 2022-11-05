import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

const selectLastHalfYear = (contributions) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 12;

  return contributions.filter((day) => {
    const date = new Date(day.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};

const GitHubStats = () => {
  return (
    <div className="w-full grid justify-center gap-4 align-middle h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white ">
      <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">GitHub Stats</p>
      {/* Contribution status */}
      <div>
        <GitHubCalendar
          style={{ margin: "auto" }}
          blockSize={16}
          fontSize={14}
          blockMargin={4}
          blockRadius={6}
          username="Sayan97Ghosh"
          transformData={selectLastHalfYear}
        >
          <ReactTooltip delayShow={20} html />
        </GitHubCalendar>
        {/* Streak Status */}
        <div className="grid justify-center grid-cols-1  md:grid-cols-2 gap-0 p-10 ">
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=Sayan97Ghosh&theme=nightowl&border_radius=7"
            alt="Github stats"
          />
          <img
            src="https://github-readme-stats.vercel.app/api?username=Sayan97Ghosh&show_icons=true&theme=tokyonight"
            alt="Github Stats"
          />
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;