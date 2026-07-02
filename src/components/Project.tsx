import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, type IconName, type IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faLock, faImages } from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom";
import Lightbox from "./Lightbox";
import type { Screenshot } from "../data/eufylogsScreenshots";

library.add(faGithub, faGlobe, faLock, faImages);

interface Props {
  img: string;
  desc: string;
  github?: string;
  webLink?: string;
  name: string;
  techStack: string;
  privateSite?: boolean;
  screenshots?: Screenshot[];
}

interface PrivateIconProps {
  show: boolean;
  icon: [IconPrefix, IconName];
  title: string;
  subtitle: string;
}

const PrivateIcon = ({ show, icon, title, subtitle }: PrivateIconProps) => {
  const [iconHovered, setIconHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.span
            key="private-icon"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="relative inline-block cursor-default select-none"
            style={{ lineHeight: 1, color: "#ef4444", fontSize: "1.35em" }}
            onMouseEnter={() => setIconHovered(true)}
            onMouseLeave={() => setIconHovered(false)}
            onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
          >
            <FontAwesomeIcon icon={icon} />

            {/*
              Outer span: static 45° rotation + position.
              Inner motion.span: scaleX draw animation only, kept
              separate so it doesn't fight the rotation transform.
            */}
            <span
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) rotate(-45deg)",
                width: "160%",
                height: "2px",
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
                  boxShadow: "0 0 3px rgba(239,68,68,0.9), 0 0 1px rgba(0,0,0,0.6)",
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
                {title}
              </span>
              <span className="text-[10px] text-[#939490] mx-0.5">·</span>
              <span className="text-[10px] text-[#939490]">{subtitle}</span>
            </motion.div>,
            document.body
          )
        : null}
    </>
  );
};

const Project = ({
  img,
  desc,
  github,
  webLink,
  name,
  techStack,
  privateSite,
  screenshots,
}: Props) => {
  const techList = techStack.split(", ").map((t) => t.trim());
  const primaryLink = webLink || github;
  const hasGallery = Boolean(screenshots && screenshots.length > 0);
  const [cardHovered, setCardHovered] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const handleCardClick = () => {
    if (primaryLink) window.open(primaryLink, "_blank");
    else if (hasGallery) setGalleryOpen(true);
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
                <PrivateIcon
                  show={cardHovered}
                  icon={["fab", "github"]}
                  title="Private Repository"
                  subtitle="Source code is not publicly available"
                />
              </span>
            )}

            {webLink ? (
              <a
                href={webLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[#939490] hover:text-white transition-colors duration-200"
              >
                <motion.span whileHover={{ scale: 1.2 }} style={{ display: "inline-block" }}>
                  <FontAwesomeIcon icon={["fas", "globe"]} />
                </motion.span>
              </a>
            ) : privateSite ? (
              <span onClick={(e) => e.stopPropagation()}>
                <PrivateIcon
                  show={cardHovered}
                  icon={["fas", "globe"]}
                  title="Private Deployment"
                  subtitle="This project is not publicly accessible"
                />
              </span>
            ) : null}

            {hasGallery && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setGalleryOpen(true);
                }}
                aria-label="View screenshots"
                className="text-[#939490] hover:text-white transition-colors duration-200"
              >
                <motion.span whileHover={{ scale: 1.2 }} style={{ display: "inline-block" }}>
                  <FontAwesomeIcon icon={["fas", "images"]} />
                </motion.span>
              </button>
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

      {galleryOpen && hasGallery && (
        <Lightbox slides={screenshots as Screenshot[]} onClose={() => setGalleryOpen(false)} />
      )}
    </motion.div>
  );
};

export default Project;
