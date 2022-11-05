import About from "./Components/About";

import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import SocialLinks from "./Components/SocialLinks";


import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import GitHubStats from "./Components/GithubStats";


function App() {
  return (
    <>

      <Navbar/>
       <Home/>
       <SocialLinks/>
       <About/>
       <Portfolio/>
       <Skills/>
      <GitHubStats/>
       <Contact/>
      
    </>
  );
}

export default App;
