import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../Logo/Logo";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

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
      <div className="flex-none border-l border-base-300 px-2">
        {session?.user && (
          <div className="border-2 border-base-content rounded-full">
          <Image
            className="h-6 w-6 w- rounded-full"
            src={session.user.image || ""}
            alt=""
            width={24}
            height={24}
          />
          </div>
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
    </div>
  );
};

export default Header;
