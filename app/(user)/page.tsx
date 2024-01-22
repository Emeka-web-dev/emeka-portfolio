"use client";
import { ParticleContainer } from "@/components/particle-container";
import { ProjectBtn } from "@/components/project-btn";
import { Shapes } from "@/components/shapes";
import { fadeIn } from "@/utils/variant";
import { motion } from "framer-motion";

export default function ClientComponentExample() {
  return (
    <div className="h-full relative">
      <div className="w-full h-full max-w-6xl mx-auto flex items-center px-6">
        <div className="flex flex-col text-center justify-center pt-10 lg:text-left h-full mx-auto lg:mx-0 ">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Transforming Ideas <br className="" /> Into{" "}
            <span className="text-theme">Digital Reality</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm lg:max-w-xl mx-auto lg:mx-0 px-4"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            suscipit asperiores reiciendis labore molestiae nobis perferendis
            quam consequuntur dolores quidem!
          </motion.p>

          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <ProjectBtn />
          </motion.div>
        </div>
        <div className="hidden lg:flex flex-1 justify-center h-full">
          <Shapes />
        </div>
      </div>
      <div className=" h-full absolute right-0 bottom-0">
        <ParticleContainer />
      </div>
    </div>
  );
}
