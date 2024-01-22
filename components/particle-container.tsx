"use client";
import { loadFull } from "tsparticles";

import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
export const ParticleContainer = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            //TODO:
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  //   const particlesInit = useCallback(async (engine: any) => {
  //     await loadFull(engine);
  //   }, []);

  //   const particlesLoaded = useCallback(async () => {}, []);

  return (
    // <Particles
    //   className="w-full h-full translate-z-0 border"
    //   id="tsparticles"
    //   init={particlesInit}
    //   loaded={particlesLoaded}
    //   options={{
    //     fullScreen: {
    //       enable: false,
    //     },
    //     background: {
    //       color: {
    //         value: " ",
    //       },
    //     },
    //     fpsLimit: 120,
    //     interactivity: {
    //       events: {
    //         onClick: {
    //           enable: false,
    //           mode: "push",
    //         },
    //         onHover: {
    //           enable: true,
    //           mode: "repulse",
    //         },
    //         resize: true,
    //       },
    //       modes: {
    //         push: {
    //           quanlity: 90,
    //         },
    //         repulse: {
    //           distance: 200,
    //           duration: 0.4,
    //         },
    //       },
    //     },
    //     particles: {
    //       color: {
    //         value: "#e68e2e",
    //       },
    //       links: {
    //         color: "#f5d393",
    //         distance: 150,
    //         enable: true,
    //         opacity: 0.5,
    //         width: 1,
    //       },
    //       collisions: {
    //         enable: true,
    //       },
    //       move: {
    //         direction: "none",
    //         enable: true,
    //         outModes: {
    //           default: "bounce",
    //         },
    //         random: false,
    //         speed: 1,
    //         straight: false,
    //       },
    //       number: {
    //         density: {
    //           enable: true,
    //           area: 800,
    //         },
    //         value: 80,
    //       },
    //       opacity: {
    //         value: 0.5,
    //       },
    //       shape: {
    //         type: "circle",
    //       },
    //       size: {
    //         value: {
    //           min: 1,
    //           max: 5,
    //         },
    //       },
    //     },
    //     detectRetina: true,
    //   }}
    // />
    <Particles
      className="w-full h-full"
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
    />
  );
};
