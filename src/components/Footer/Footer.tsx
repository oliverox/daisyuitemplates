import React from "react";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="footer p-10 max-w-7xl mx-auto">
      <div>
        <Logo size="sm" className="fill-neutral-content" spin={false}/>
      </div>
      <div>
        <span className="footer-title">Social</span>
      </div>
    </footer>
  );
};

export default Footer;
