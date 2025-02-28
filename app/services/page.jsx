"use client";

import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";

const servicesList = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Creating modern, fast, and responsive websites with HTML, CSS, JavaScript, React, and Next.js.",
    href: "#",
  },
  {
    num: "02",
    title: "Backend with Node.js",
    description: "Development of APIs and servers with Node.js and Express.",
    href: "#",
  },
  {
    num: "03",
    title: "Web Optimization",
    description:
      "Performance improvement, basic SEO, and loading optimization with modern techniques.",
    href: "#",
  },
  {
    num: "04",
    title: "Development of Interactive Interfaces",
    description:
      "Creating fluid and attractive experiences with Tailwind CSS and animations using Framer Motion.",
    href: "#",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-14"
        >
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-white/50 group-hover:text-white transition-all duration-500">
                  {service.num}
                </div>
                <a
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </a>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
