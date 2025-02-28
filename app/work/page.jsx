"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsBoxArrowInUpRight, BsGithub } from "react-icons/bs";

import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Tooltip,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSlideBtns from "@/components/ui/WorkSlideBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Spotify-clone",
    description:
      "A Spotify clone developed with React.js, with a modern, responsive and fluid interface. It includes music browsing, playlist management, and dark mode support, demonstrating my skills in frontend development and performance optimization.",
    stack: [
      {
        name: "React.js",
      },
      {
        name: "Vite",
      },
      {
        name: "Typescript",
      },
    ],
    image: "/images/spotify.png",
    live: "https://spotify-clone-d6oo1m8m2-jefersons-projects-17f98225.vercel.app ",
    github: "https://github.com/jefergv28/Spotify-clone",
  },
  {
    num: "02",
    category: "frontend",
    title: "E-commerce",
    description:
      "Developed a modern and responsive e-commerce interface using React.js, Vite and TypeScript, optimizing performance and user experience. The platform allows product navigation, shopping cart management and an intuitive checkout process.",
    stack: [
      {
        name: "React.js",
      },
      {
        name: "Vite",
      },
      {
        name: "Typescript",
      },
    ],
    image: "/images/ecommerce.png",
    live: "https://ecommerce-frontend-kfwyxt0tt-jefersons-projects-17f98225.vercel.app",
    github: "https://github.com/jefergv28/ecommerce/tree/master",
  },
  {
    num: "03",
    category: "frontend",
    title: "Portafolio",
    description:
      "Web portfolio with a modern and responsive interface. Includes a projects section, personal information and links to professional profiles. Optimized for performance and accessible on different devices.",
    stack: [
      {
        name: "React.js",
      },
      {
        name: "Vite",
      },
      {
        name: "Typescript",
      },
    ],
    image: "/images/portafolio.png",
    live: "/",
    github: "https://github.com/jefergv28/Portafolio-Nya/tree/master",
  },
  {
    num: "04",
    category: "frontend",
    title: "Promodoro ",
    description:
      "is a web application developed with JavaScript, HTML and CSS, based on the Pomodoro technique to improve productivity. It allows you to configure work and rest times, with a simple and functional interface. It is hosted on GitHub Pages for easy access and use.",
    stack: [
      {
        name: "JavaScript",
      },
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
    ],
    image: "/images/PROMODORO.png",
    live: "https://jefergv28.github.io/Promodoro/",
    github: "https://github.com/jefergv28/Promodoro",
  },
  {
    num: "05",
    category: "frontend",
    title: "password-generator",
    description:
      "is a web application developed with JavaScript, HTML and CSS, based on the Pomodoro technique to improve productivity. It allows you to configure work and rest times, with a simple and functional interface. It is hosted on GitHub Pages for easy access and use.",
    stack: [
      {
        name: "JavaScript",
      },
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
    ],
    image: "/images/contrasena.png",
    live: "https://jefergv28.github.io/Generador-de-contrasena/",
    github: "https://github.com/jefergv28/Generador-de-contrasena",
  },
];

const work = () => {
  const [project, setProject] = useState(projects[0]);

  const HandleSlideChange = (swiper) => {
    //obtener el índice de diapositivas actual
    const currentIndex = swiper.activeIndex;
    // actualizar el estado con la diapositiva actual
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-8-vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* projects category  */}

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-accent">
                      {item.name}
                      {/* remove the last coma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex items-center gap-4 ">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* gith hub project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={HandleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center  bg-pink-50/20">
                      {/* ovberlay */}
                      <div
                        className="absolute top-0 bottom-0 w-full bg-black/10 z-10
                      "
                      ></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSlideBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default work;
