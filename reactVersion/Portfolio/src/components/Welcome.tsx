import React, { useState, useEffect } from "react";

const Welcome = () => {
  const [currentText, setCurrentText] = useState("a programmer");
  const [fadeClass, setFadeClass] = useState("fadeIn");
  const phrases = ["a programmer", "a gamer", "GojoDev"];
  let index = 0;


// I have to use useEffect so that everything gets rendered properly every 2s
  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeClass("");
      setTimeout(() => {
        if (index < 3) {
          setCurrentText(phrases[index]);
          console.log(phrases[index],index)
          setFadeClass("fadeIn");
          index++;
        }
        else {
          setCurrentText("GojoDev")
          clearInterval(intervalId);
        }
      }, 0);
    }, 2000);

    () => clearInterval(intervalId);
  }, []);

  return (
    <div id="welcome" className="fadeIn box-shadow">
      <h2 className="white">Hi, I'm </h2>
      <h2 id="text-switch" className={`gradient-text ${fadeClass}`}>
        {currentText}
      </h2>
    </div>
  );
};

export default Welcome;
