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

const PrivateGithubIcon = () => {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const tooltip = hovered
    ? ReactDOM.createPortal(
        <AnimatePresence>
          <motion.div
            key="private-tooltip"
            initial={{ opacity: 0, scale: 0.92, y: 4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 4 }}
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
          </motion.div>
        </AnimatePresence>,
        document.body
      )
    : null;

  return (
    <>
      <span
        className="relative inline-block cursor-default select-none"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
        style={{ lineHeight: 1 }}
      >
        {/* GitHub icon — transitions to red on hover */}
        <motion.span
          animate={{ color: hovered ? "#ef4444" : "#939490" }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          style={{ display: "inline-block" }}
        >
          <FontAwesomeIcon icon={["fab", "github"]} />
        </motion.span>

        {/* Strikethrough line — draws left to right on hover */}
        <motion.span
          initial={false}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          style={{
            position: "absolute",
            top: "50%",
            left: "-12%",
            width: "124%",
            height: "1.5px",
            borderRadius: "1px",
            backgroundColor: "#ef4444",
            transformOrigin: "left center",
            transform: "translateY(-50%) rotate(-8deg)",
            pointerEvents: "none",
          }}
        />
      </span>

      {tooltip}
    </>
  );
};

const Project = ({ img, desc, github, webLink, name, techStack }: Props) => {
  const techList = techStack.split(", ").map((t) => t.trim());
  const primaryLink = webLink || github;

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
                <PrivateGithubIcon />
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
