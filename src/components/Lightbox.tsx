import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import type { Screenshot } from "../data/eufylogsScreenshots";

interface LightboxProps {
  slides: Screenshot[];
  startIndex?: number;
  onClose: () => void;
}

const SWIPE_THRESHOLD = 80;

const Lightbox = ({ slides, startIndex = 0, onClose }: LightboxProps) => {
  const [index, setIndex] = useState(startIndex);
  const [direction, setDirection] = useState(0);

  const goTo = (nextIndex: number, dir: number) => {
    setDirection(dir);
    setIndex((nextIndex + slides.length) % slides.length);
  };

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goTo(index + 1, 1);
      if (e.key === "ArrowLeft") goTo(index - 1, -1);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD) goTo(index + 1, 1);
    else if (info.offset.x > SWIPE_THRESHOLD) goTo(index - 1, -1);
  };

  const slide = slides[index];
  if (!slide) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      <motion.div
        key="lightbox-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/85 backdrop-blur-sm"
        onClick={(e) => {
          // Portals still bubble through the React tree, not the DOM tree —
          // without this, the click would also reach the card's onClick
          // (which reopens the gallery, since this project has no primaryLink).
          e.stopPropagation();
          onClose();
        }}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close gallery"
          className="absolute top-5 right-5 text-[#939490] hover:text-white transition-colors duration-200 text-xl"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        {slides.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goTo(index - 1, -1);
              }}
              aria-label="Previous image"
              className="absolute left-3 md:left-8 text-[#939490] hover:text-white transition-colors duration-200 text-2xl p-2"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goTo(index + 1, 1);
              }}
              aria-label="Next image"
              className="absolute right-3 md:right-8 text-[#939490] hover:text-white transition-colors duration-200 text-2xl p-2"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </>
        )}

        <div
          className="flex flex-col items-center max-w-[92vw] max-h-[88vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.img
              key={slide.src}
              src={slide.src}
              alt={slide.caption}
              custom={direction}
              initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              drag={slides.length > 1 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={handleDragEnd}
              className="rounded-lg border border-[#1f1f1f] shadow-[0_8px_40px_rgba(0,0,0,0.6)]
                max-w-full max-h-[75vh] object-contain cursor-grab active:cursor-grabbing select-none"
            />
          </AnimatePresence>

          <div className="mt-4 flex flex-col items-center gap-1.5">
            <p className="text-white text-sm font-medium tracking-wide">{slide.caption}</p>
            {slides.length > 1 && (
              <p className="text-[#5a5a5a] text-xs">
                {index + 1} / {slides.length}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export default Lightbox;
