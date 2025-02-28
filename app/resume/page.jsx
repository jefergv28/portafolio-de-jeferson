"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//datos de contacto
const about = {
  title: "About me",
  description:
    "I am a frontend developer with experience in React.js, HTML, CSS and MySQL. I have one year of experience building attractive and functional web interfaces. My passion for development leads me to continue learning and improving my skills to create intuitive and dynamic user experiences. Currently, I am looking to expand my knowledge and face new challenges in projects that allow me to continue growing.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Jeferson Galvis",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+57) 315 461 86 98",
    },
    {
      fieldName: "Experience",
      fieldValue: "1 + Years",
    },
    {
      fieldName: "Git hub",
      fieldValue: "Jefergv28",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Venezuelan",
    },
    {
      fieldName: "Email",
      fieldValue: "jefergv28@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "@jefersongv28",
    },
  ],
};

//experiencia
const experience = {
  icon: "/images/badge.svg",
  title: "My experience",
  description:
    "Although I have no formal work experience, I have worked on several personal projects using React.js, HTML, CSS, and MySQL. Here are some of the projects I have worked on:",
  items: [
    {
      title: "Inventario-PRO-REACT",
      description: "Sistema de gestión de inventarios con React.",
      technologies: "REACT-HTML-CSS-MySQL",
    },
    {
      title: "Spotify-clone",
      description:
        "Clon de Spotify con funcionalidades básicas de reproducción.",
      technologies: "REACT-HTML-CSS ",
    },
    {
      title: "Consumo de API Filmoteca",
      description: "Proyecto que consume una API para mostrar películas.",
      technologies: "REACT-HTML-CSS-API",
    },

    {
      title: "Generador de contraseñas",
      description: "Generador de contraseñas seguras.",
      technologies: "HTML-CSS-JS",
    },
    {
      title: "Promodoro",
      description: "Aplicación basada en la técnica Pomodoro.",
      technologies: "HTML-CSS-JS",
    },
    {
      title: "Ecommerce",
      description: "Tienda en línea con React y Tailwind CSS.",
      technologies: "REACT-HTML-TS-TAILWINDCSS",
    },
  ],
};

//education
const education = {
  icon: "/images/cap.svg",
  title: "My Education",
  description:
    "I am currently studying the Software Analysis and Development program at SENA. My focus is on learning to develop efficient and modern technological solutions.",
  items: [
    {
      institution: "SENA  ",
      title: "Software Analysis and Development",
      description:
        "Studies focused on software development and the solution of technological problems.",
      duration: "2023- Present",
    },
    {
      institution: "Academy Hello World",
      title: "React course",
      description:
        "Course that covers the fundamentals of React to create interactive web applications.",
      duration: "14 hours",
    },
    {
      institution: "Academy Hello World",
      title: "JavaScript course ",
      description:
        "Course focused on the fundamental concepts of JavaScript for web development.",
      duration: "5 hours",
    },
    {
      institution: "Academy Hello World",
      title: "HTML course",
      description:
        "Course that teaches the basics of HTML for creating structured web pages.",
      duration: "5 hours",
    },
    {
      institution: "Academy Hello World",
      title: "CSS course",
      description:
        "CSS course to learn how to design and style websites effectively.",
      duration: "5 hours",
    },
  ],
};

//skills data
const skills = {
  title: "My skills",
  description:
    "I am a frontend developer passionate about technology and creating interactive web experiences. Currently, I am studying at SENA and combine my training with practical experience in React.js, HTML, CSS and MySQL. I like to face new challenges, constantly learn and apply my knowledge in projects that add value. I am a proactive person, eager to continue growing and contributing to dynamic work teams, looking for opportunities where I can develop my skills and contribute with efficient and innovative solutions.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaGit />,
      name: "Git",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
  ],
};
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[480px] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* contenido */}
          <div className="min-h-[70px] w-full">
            {/* experiencia */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.title}</span>
                          <h3 className="text-sm max-w[260px] min-h-[60px] text-center lg:text-left">
                            {item.description}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.technologies}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* educación */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-sm max-w[260px] min-h-[60px] text-center lg:text-left">
                            {item.title}
                          </h3>
                          <div className="flex flex-wrap xl:flex  items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* habilidades */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default resume;
