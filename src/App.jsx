import "./style.css";
import { motion } from "framer-motion";
import Footer from "./components/Footer";
import GojoDev from "./components/GojoDev.jsx";
import Welcome from "./components/Welcome";
import Project from "./components/Project.tsx";

function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="border-b border-[#1f1f1f]">
        <div className="flex flex-col md:flex-row">
          <Welcome />
          <GojoDev />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center p-8 md:w-1/3"
          >
            <p className="text-[#939490] text-sm text-center leading-loose max-w-xs">
              I create helpful websites and programming scripts. I make projects
              about things that I want to improve or interest me.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-4xl mx-auto px-5 py-14">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-xs tracking-widest mb-1"><span className="text-green-400">$</span><span className="text-white"> ls projects/</span></p>
          <h2 className="text-white text-xl font-bold">Projects</h2>
          <div className="h-px bg-gradient-to-r from-[#023cdb]/60 to-transparent mt-2 w-32" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Project
            img="./images/verseFinderLogo.png"
            desc="Whether you're preaching, praying, or pondering, VerseFinder helps connect your words with the Word."
            webLink="https://versefinder.dev/"
            name="VerseFinder"
            techStack="JS, ReactJS, NodeJS, Firebase"
          />
          <Project
            img="./images/caopoints.webp"
            desc="Shows the easiest way grades that are needed to get into College / University"
            github="https://github.com/gojodev/caopoints"
            webLink="https://caopoints-info.web.app"
            name="Caopoints"
            techStack="HTML, CSS, JS, NodeJS, Firebase"
          />
          <Project
            img="./images/jsLogo.png"
            desc="I mainly handled the backend for an AI trading bot to invest in stocks and cryptos"
            github="https://github.com/gojodev/3rd-yr-group-project/tree/emmanuel"
            name="AI Trader"
            techStack="HTML, CSS, JS, NodeJS, Python, Firebase"
          />
          <Project
            img="./images/swipeBack.png"
            desc="A chrome extension for finger gestures to navigate tabs in Opera GX"
            github="https://github.com/gojodev/swipeBack"
            webLink="https://chromewebstore.google.com/detail/swipeback/kajimfcbamhmbgkdfpbedcianbeobnck"
            name="SwipeBack"
            techStack="HTML, CSS, JS, NodeJS, Manifest"
          />
          <Project
            img="./images/sfx_rocks.webp"
            desc="Soundboard collection with Firebase technologies"
            github="https://github.com/gojodev/sfx.rocks"
            webLink="https://sfx-rocks.web.app"
            name="Sfx.rocks"
            techStack="HTML, CSS, JS, NodeJS, Firebase"
          />
          <Project
            img="./images/jsLogo.png"
            desc="A coding workshop where you can book classes to learn more about coding"
            github="https://github.com/gojodev/Server-Side-Web-Development"
            name="Coding Workshop"
            techStack="HTML, CSS, JS, NodeJS, MongoDB"
          />
          <Project
            img="./images/cLogo.png"
            desc="Space Explorer game to find the life-changing planet before you run out of fuel"
            github="https://github.com/gojodev/SpaceExplorer"
            name="Space Explorer"
            techStack="C"
          />
          <Project
            img="./images/gojodev.webp"
            desc="The source code for this portfolio website"
            github="https://github.com/gojodev/gojodev"
            webLink="https://gojodev.com"
            name="gojodev.com"
            techStack="HTML, CSS, JS, TS, NodeJS, React, Tailwind, Firebase"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
