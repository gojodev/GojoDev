import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faLock } from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom";

library.add(faGithub, faGlobe, faLock);

interface Props {
  img: string;
  desc: string;
  github?: string;
  webLink?: string;
  name: string;
  techStack: string;
}

const PrivateGithubIcon = ({ show }: { show: boolean }) => {
  const [iconHovered, setIconHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.span
            key="private-github"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="relative inline-block cursor-default select-none"
            style={{ lineHeight: 1, color: "#ef4444" }}
            onMouseEnter={() => setIconHovered(true)}
            onMouseLeave={() => setIconHovered(false)}
            onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
          >
            <FontAwesomeIcon icon={["fab", "github"]} />

            {/*
              Outer span: handles position + 45° rotation (static).
              Inner motion.span: handles the scaleX draw animation cleanly,
              without competing with the rotation transform.
            */}
            <span
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) rotate(-45deg)",
                width: "155%",
                height: "1.5px",
                pointerEvents: "none",
                overflow: "visible",
              }}
            >
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.26, ease: "easeOut" }}
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  borderRadius: "1px",
                  backgroundColor: "#ef4444",
                  transformOrigin: "left center",
                }}
              />
            </span>
          </motion.span>
        )}
      </AnimatePresence>

      {show && iconHovered
        ? ReactDOM.createPortal(
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              style={{
                position: "fixed",
                left: mousePos.x + 14,
                top: mousePos.y - 36,
                pointerEvents: "none",
                zIndex: 99999,
              }}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md
                bg-[#0f0f0f] border border-[#3f1010] shadow-[0_4px_20px_rgba(0,0,0,0.6)]
                whitespace-nowrap"
            >
              <FontAwesomeIcon
                icon={["fas", "lock"]}
                className="text-[#ef4444]"
                style={{ fontSize: "9px" }}
              />
              <span className="text-[10px] font-medium tracking-wide text-[#c0c0c0]">
                Private Repository
              </span>
              <span className="text-[10px] text-[#5a5a5a] mx-0.5">·</span>
              <span className="text-[10px] text-[#5a5a5a]">
                Source code is not publicly available
              </span>
            </motion.div>,
            document.body
          )
        : null}
    </>
  );
};

const Project = ({ img, desc, github, webLink, name, techStack }: Props) => {
  const techList = techStack.split(", ").map((t) => t.trim());
  const primaryLink = webLink || github;
  const [cardHovered, setCardHovered] = useState(false);

  const handleCardClick = () => {
    if (primaryLink) window.open(primaryLink, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      onClick={handleCardClick}
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
      className="cursor-pointer flex flex-col bg-[#0a0a0a] border border-[#1f1f1f] rounded-2xl overflow-hidden
        hover:border-white/40 hover:shadow-[0_8px_32px_rgba(255,255,255,0.08)]
        transition-all duration-300"
    >
      {/* Project image */}
      <div className="flex items-center justify-center bg-[#050505] h-[160px] border-b border-[#141414]">
        <img
          src={img}
          alt={name}
          className="max-h-[120px] max-w-[120px] object-contain rounded-xl fadeIn"
        />
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-white font-bold text-sm leading-tight pr-2">{name}</h3>
          <div className="flex gap-3 shrink-0">
            {github ? (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[#939490] hover:text-white transition-colors duration-200"
              >
                <motion.span whileHover={{ scale: 1.2 }} style={{ display: "inline-block" }}>
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </motion.span>
              </a>
            ) : (
              <span onClick={(e) => e.stopPropagation()}>
                <PrivateGithubIcon show={cardHovered} />
              </span>
            )}
            {webLink && (
              <a
                href={webLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[#939490] hover:text-[#023cdb] transition-colors duration-200"
              >
                <motion.span whileHover={{ scale: 1.2 }} style={{ display: "inline-block" }}>
                  <FontAwesomeIcon icon={["fas", "globe"]} />
                </motion.span>
              </a>
            )}
          </div>
        </div>

        <p className="text-[#939490] text-xs leading-relaxed mb-4 flex-1">{desc}</p>

        <div className="flex flex-wrap gap-1.5">
          {techList.map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-2 py-0.5 bg-[#023cdb]/8 text-[#4d80ff] border border-[#023cdb]/20 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
