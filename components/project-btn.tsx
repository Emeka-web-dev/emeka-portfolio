import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export const ProjectBtn = () => {
  return (
    <div className="mx-auto lg:mx-0 w-fit">
      <Link
        href="/project"
        className="relative w-[170px] h-[170px] items-center justify-center flex bg-circleStar bg-cover bg-center group"
      >
        <Image
          src="/rounded-text.png"
          width={100}
          height={100}
          alt="project button"
          className="animate-spin-slow"
        />
        <ArrowRight className="text-4xl absolute group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};
