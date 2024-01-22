"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];
export const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col items-center lg:justify-center gap-y-4 fixed h-max bottom-0 mt-auto lg:right-[2%] z-50 top-0 w-full lg:w-16 lg:max-w-md lg:h-screen">
      <div className="flex w-full lg:flex-col items-center justify-between lg:justify-center gap-y-10 px-4 md:px-40 lg:px-0 h-[60px] lg:h-max py-8 bg-white/10 backdrop-blur-sm text-2xl lg:text-xl lg:rounded-full">
        {navData.map((data) => (
          <Link
            href={data.path}
            key={data.name}
            className={cn(
              "relative flex items-center group hover:text-theme transition-all duration-300",
              data.path === pathname && "text-theme"
            )}
          >
            <div className="absolute pr-14 right-0 hidden lg:group-hover:flex">
              <div className="bg-white/20 relative flex text-primary items-center p-[4px] rounded-[3px] ">
                <div className="text-[12px] leading-none font-semibold capitalize text-white">
                  {data.name}
                </div>
                <div className="border-solid border-l-white/20 border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2" />
              </div>
            </div>
            <div>{data.icon}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};
