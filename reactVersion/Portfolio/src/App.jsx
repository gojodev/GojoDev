import "./output.css";
import Footer from "./components/Footer";
import GojoDev from "./components/GojoDev.jsx";
import MetaTags from "./components/MetaTags.tsx";
import "./components/Welcome";
import Welcome from "./components/Welcome";

import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <div>
      <div className="center">
        <Welcome className="w-[33%]"></Welcome>

        <GojoDev className="w-[33%]"></GojoDev>

        <div className="generalBlackBG white generalText box-shadow w-[33%]">
          {
            "I create helpful websites and programming scripts. I'm a 3rd year software development student. I make projects about things that I want to improve or interest me."
          }
        </div>
      </div>

      <br />
      <br />


      <div className="white generalText bg-black p-3">
        Projects
      </div>

      <HelmetProvider>
        <MetaTags />
        <Footer />
      </HelmetProvider>
    </div>
  );
}

export default App;
