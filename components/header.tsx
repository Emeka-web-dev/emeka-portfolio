"use client";

import Link from "next/link";
import { Socials } from "./socials";

export const Header = () => {
  return (
    <header className="absolute z-30 px-6 xl:px-0 w-full flex h-28 lg:h-16 items-center">
      <div className="max-w-7xl mx-auto w-full h-full">
        <div className="h-full flex flex-col lg:flex-row justify-around lg:justify-between items-center">
          <h1 className="font-bold text-3xl">
            <Link href="/">
              Chukwu <span className="font-thin">Emeka</span>
              <span className="text-theme">.</span>
            </Link>
          </h1>
          <Socials />
        </div>
      </div>
    </header>
  );
};
