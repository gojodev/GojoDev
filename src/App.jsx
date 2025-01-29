import "./output.css";
import Footer from "./components/Footer";
import GojoDev from "./components/GojoDev.jsx";
import "./components/Welcome";
import Welcome from "./components/Welcome";

import Project from "./components/Project.tsx";

function App() {
  return (
    <div>
      <div className="intro-container">
        <Welcome />
        <br />

        <GojoDev />
        <br />

        {/* // todo make this div use the full 33% */}
        <div className="generalBlackBG white generalText center self-desc rounded-bl-3xl">
          {
            "I create helpful websites and programming scripts. I make projects about things that I want to improve or interest me."
          }
        </div>
      </div>

      <br />

      <div className="white generalText bg-black p-3 box-shadow">Projects</div>
      <br />

      <div className="container-v">
        <Project
          img="./images/caopoints.webp"
          desc="Shows the easiest way grades that are needed to get into College / University"
          github="https://github.com/gojodev/caopoints"
          webLink="https://caopoints.com/"
          name="Caopoints"
          techStack="HTML, CSS, JS, NodeJS, Firebase"
        />

        <br />

        <Project
          img="./images/jsLogo.png"
          desc="I mainly handled the backend for an AI trading bot to invest in stocks and cryptos"
          github="https://github.com/gojodev/3rd-yr-group-project/tree/emmanuel"
          name="AI Trader"
          techStack="HTML, CSS, JS, NodeJS, Python, Firebase"
        />

        <br />

        <Project
          img="./images/jsLogo.png"
          desc="A coding workshop where you can book classes to learn more about coding"
          github="https://github.com/gojodev/Server-Side-Web-Development"
          name="Coding Workshop"
          techStack="HTML, CSS, JS, NodeJS, MongoDB"
        />

        <br />

        <Project
          img="./images/swipeBack.png"
          desc="A chrome extension for finger gestures to navigate tabs in Opera GX (Coming Soon)"
          github="https://github.com/gojodev/swipeBack"
          name="SwipeBack"
          techStack="HTML, CSS, JS, NodeJS, Manifest"
        />

        <br />

        <Project
          img="./images/sfx_rocks.webp"
          desc="Soundboard collection with firebase Technologies"
          github="https://github.com/gojodev/sfx.rocks"
          webLink="https://sfx.rocks"
          name="Sfx.rocks"
          techStack="HTML, CSS, JS, NodeJS, Firebase"
        />

        <br />

        <Project
          img="./images/cLogo.png"
          desc="Space Explorer game to find the life-changing planet before you run out of fuel"
          github="https://github.com/gojodev/SpaceExplorer"
          name="Space Explorer"
          techStack="C"
        />

        <br />

        <Project
          img="./images/gojodev.webp"
          desc="The source code for this portfolio website"
          github="https://github.com/gojodev/gojodev"
          webLink="https://gojodev.com"
          name="gojodev.com"
          techStack="HTML, CSS, JS, TS, NodeJS, React, Tailwind, Firebase"
        />
      </div>

      <br />

      <Footer />
    </div>
  );
}

export default App;
