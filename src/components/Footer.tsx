import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-[#1a1a1a] py-8 text-center">
      <p className="text-[#333] text-xs">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#023cdb] font-bold">GojoDev</span>
      </p>
    </footer>
  );
};

export default Footer;
