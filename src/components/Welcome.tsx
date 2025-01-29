import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(faHouse, faLinkedin, faGithub, faEnvelope);

const Welcome = () => {
  const [currentText, setCurrentText] = useState("a programmer");
  const [fadeClass, setFadeClass] = useState("fadeIn");
  const phrases = ["a programmer", "a gamer", "GojoDev"];
  let index = 0;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeClass("");
      setTimeout(() => {
        if (index < 3) {
          setCurrentText(phrases[index]);
          console.log(phrases[index], index);
          setFadeClass("fadeIn");
          index++;
        } else {
          setCurrentText("GojoDev");
          clearInterval(intervalId);
        }
      }, 0);
    }, 2000);

    () => clearInterval(intervalId);
  }, []);

  return (
    <div className="generalBlackBG container-v rounded-br-3xl width33">
      <div>
        <h3 className="white generalText">Hi, I'm </h3>
        <h3 className={`gradient-text ${fadeClass} generalText`}>
          {currentText}
        </h3>
        <h3 className="white generalText">Software Development Student</h3>

        <div>
          <a href="https://github.com/gojodev/GojoDev" target="_blank">
            <FontAwesomeIcon
              icon={["fab", "github"]}
              size="2x"
              className="pulseAnimation"
            />
          </a>
        </div>

        <div className="center">
          <div className="center">            
          <h2 className="white generalText blueText">gojo@gojodev.com</h2>
          <FontAwesomeIcon
            icon={["fas", "envelope"]}
            size="2x"
            className="pulseAnimation"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
