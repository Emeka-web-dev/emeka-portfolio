"use client";
import { Header } from "@/components/header";
import { Nav } from "@/components/nav";
import { Transition } from "@/components/transition";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div className="page relative">
      {/* <AnimatePresence mode="wait">
        <motion.div className="h-full" key={pathname}>
          <Transition />
        </motion.div>
      </AnimatePresence> */}
      <Nav />
      <Header />
      <div className="h-[calc(100%-7rem)] lg:h-[calc(100%-4rem)] mt-28 lg:mt-16">
        {children}
      </div>
    </div>
  );
};

export default UserLayout;
