import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

library.add(faGithub, faGlobe);

interface Props {
  img: string;
  desc: string;
  github?: string;
  webLink?: string;
  name: string;
  techStack: string;
}

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
        hover:border-[#023cdb]/40 hover:shadow-[0_8px_32px_rgba(2,60,219,0.12)]
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
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[#444] hover:text-white transition-colors duration-200"
              >
                <motion.span whileHover={{ scale: 1.2 }} style={{ display: "inline-block" }}>
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </motion.span>
              </a>
            )}
            {webLink && (
              <a
                href={webLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[#444] hover:text-[#023cdb] transition-colors duration-200"
              >
                <motion.span whileHover={{ scale: 1.2 }} style={{ display: "inline-block" }}>
                  <FontAwesomeIcon icon={["fas", "globe"]} />
                </motion.span>
              </a>
            )}
          </div>
        </div>

        <p className="text-[#555] text-xs leading-relaxed mb-4 flex-1">{desc}</p>

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
