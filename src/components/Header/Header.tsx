import React from "react";
import Link from "next/link";
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
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <div className="">
              <Image
                className="h-6 w-6 rounded-full outline-2 outline-offset-2 outline-white"
                src={session.user.image || ""}
                alt=""
                width={24}
                height={24}
              />
              <ChevronDownIcon className="h-4 w-4 stroke-primary stroke-2" />
            </div>
            <ul className="">
              <li className="rounded-none">
                <Link
                  href="#"
                  onClick={() => signOut()}
                  className="btn btn-ghost"
                >
                  Sign out
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      )}
      {!session?.user && (
        <Link
          className="btn-ghost btn"
          href="#"
          onClick={() => signIn("google")}
        >
          Sign in
        </Link>
      )}
    </div>
  );
};

export default Header;
