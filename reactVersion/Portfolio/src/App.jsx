import "./output.css";
import Footer from "./components/Footer";
import GojoDev from "./components/GojoDev.jsx";
import MetaTags from "./components/MetaTags.tsx";
import "./components/Welcome";
import Welcome from "./components/Welcome";

import { HelmetProvider } from "react-helmet-async";
import Project from "./components/Project.tsx";

function App() {
  return (
    <div>
      <div className="container-h">
        <Welcome />

        <GojoDev />

        <div className="generalBlackBG white generalText w-[33%] container-v hoverEffect">
          <div className="center">
            {
              "I create helpful websites and programming scripts. I'm a 3rd year software development student. I make projects about things that I want to improve or interest me."
            }
          </div>
        </div>
      </div>

      <br />

      <div className="white generalText bg-black p-3 box-shadow">Projects</div>

      <br />

      <div className="container-v">
        <Project
          img="./images/caopoints.webp"
          desc="Shows the easiest way grades that are needed to get into College / University."
          github="https://github.com/gojodev/caopoints"
          webLink="https://caopoints.com/"
          name="Caopoints"
          techStack="HTML, CSS, JS, Firebase"
        />

        <Project
          img="./images/swipeBack.png"
          desc="An extension for finger gestures to navigate tabs in Opera GX (Coming Soon)"
          github="https://github.com/gojodev/swipeBack"
          webLink=""
          name="SwipeBack"
          techStack="HTML, CSS, JS"
        />
      </div>

      <br />

      <HelmetProvider>
        <MetaTags />
        <Footer />
      </HelmetProvider>
    </div>
  );
}

export default App;
