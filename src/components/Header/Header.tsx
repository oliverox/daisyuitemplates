import React from "react";
import Link from "next/link";
import Logo from "../Logo/Logo";
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

const Header = () => {
  return (
    <div className="navbar bg-base-100 max-w-7xl mx-auto max-w">
      <div className="flex-1">
        <Logo size="sm" className="fill-secondary" />
      </div>
      <div className="mr-2">
        <ThemeSwitcher />
      </div>
      <div className="flex-none border-l border-base-300 px-2">
        <Link className="btn btn-ghost" href="">Sign in</Link>
      </div>
    </div>
  );
};

export default Header;
