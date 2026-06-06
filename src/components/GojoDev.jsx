import { motion } from "framer-motion";
import Image from "./Image";

const GojoDev = () => {
  const bday = new Date("06/08/2004");
  const today = new Date();
  const age = ((today.getTime() - bday.getTime()) / 1000 / 31556952).toFixed(3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="flex flex-col items-center justify-center py-8 px-6 md:w-1/3 border-b md:border-b-0 md:border-r border-[#1f1f1f]"
    >
      <div className="relative mb-4">
        <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[#023cdb]/20 via-[#023cdb]/5 to-transparent blur-xl pointer-events-none" />
        <div className="relative rounded-2xl overflow-hidden border border-[#262626]">
          <Image src="./images/gojodev.webp" />
        </div>
      </div>
      <p className="text-white font-bold text-sm mt-1">Emmanuel Koledoye</p>
      <p className="text-[#444] text-xs mt-0.5">~{age} yrs</p>
    </motion.div>
  );
};

export default GojoDev;
