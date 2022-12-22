import React from "react";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
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
