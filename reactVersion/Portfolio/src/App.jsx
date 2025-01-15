import "./index.css";
import Footer from "./components/Footer";
import GojoDev from "./components/GojoDev.jsx";
import MetaTags from "./components/MetaTags.tsx";
import "./components/Welcome";
import Welcome from "./components/Welcome";

import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <div>
      <div id="intro">
        <div className="width50">
          <Welcome></Welcome>
        </div>

        <GojoDev></GojoDev>
      </div>

      <HelmetProvider>
        <MetaTags />
        <Footer />
      </HelmetProvider>
    </div>
  );
}

export default App;
