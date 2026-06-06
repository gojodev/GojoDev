import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faGithub, faEnvelope, faCheck);

const phrases = ["a programmer", "a gamer", "GojoDev"];

const Welcome = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (phraseIndex >= phrases.length - 1) return;
    const timer = setTimeout(() => {
      setPhraseIndex((prev) => prev + 1);
    }, 2000);
    return () => clearTimeout(timer);
  }, [phraseIndex]);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("gojo@gojodev.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center p-8 bg-[#0a0a0a] border-b md:border-b-0 md:border-r border-[#1f1f1f] md:w-1/3"
    >
      <p className="text-[#444] text-xs mb-3 tracking-widest">$ whoami</p>

      <div className="mb-1">
        <span className="text-white text-2xl font-bold">Hi, I'm </span>
      </div>

      <div className="h-10 flex items-center mb-2">
        <AnimatePresence mode="wait">
          <motion.span
            key={phrases[phraseIndex]}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.25 }}
            className="gradient-text text-2xl"
          >
            {phrases[phraseIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      <p className="text-[#555] text-sm mb-8">Software Development Student</p>

      <div className="flex items-center gap-5">
        <a
          href="https://github.com/gojodev/GojoDev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#555] hover:text-[#023cdb] transition-colors duration-200"
        >
          <motion.span whileHover={{ scale: 1.2, y: -2 }} style={{ display: "inline-block" }}>
            <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
          </motion.span>
        </a>

        <motion.button
          whileHover={{ scale: 1.2, y: -2 }}
          onClick={handleEmailClick}
          className={`transition-colors duration-200 cursor-pointer border-none bg-transparent p-0 ${
            isCopied ? "text-green-400" : "text-[#555] hover:text-[#023cdb]"
          }`}
        >
          <FontAwesomeIcon
            icon={isCopied ? ["fas", "check"] : ["fas", "envelope"]}
            size="lg"
          />
        </motion.button>

        <AnimatePresence>
          {isCopied && (
            <motion.span
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="text-green-400 text-xs"
            >
              copied!
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Welcome;
