import React from "react";
import Image from "next/image";
import Logo from "../Logo/Logo";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="max-w navbar mx-auto max-w-7xl">
      <div className="flex-1">
        <Logo size="sm" className="fill-secondary" />
      </div>
      <div className="mr-2">
        <ThemeSwitcher />
      </div>
      {session?.user && (
        <ul className="menu menu-horizontal">
          <li tabIndex={0}>
            <button className="btn-ghost btn gap-2">
              <Image
                className="h-6 w-6 rounded-full outline-2 outline-offset-2 outline-white"
                src={session.user.image || ""}
                alt="User is signed in"
                width={24}
                height={24}
              />
              <div className="w-1" />
              <ChevronDownIcon className="h-4 w-4 stroke-primary stroke-2" />
            </button>
            <ul className="w-full">
              <span className="text-center text-sm text-base-content py-1">Hi {session?.user.name?.split(" ")[0]}!</span>
              <li className="rounded-none">
                <button onClick={() => signOut()} className="btn-ghost btn">
                  Sign out
                </button>
              </li>
            </ul>
          </li>
        </ul>
      )}
      {!session?.user && (
        <button className="btn-ghost btn" onClick={() => signIn("google")}>
          Sign in
        </button>
      )}
    </div>
  );
};

export default Header;
