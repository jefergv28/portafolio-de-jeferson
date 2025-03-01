"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Componentes
import Social from "@/components/ui/Social";
import Photo from "@/components/ui/Photo";
import Stats from "@/components/ui/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Texto */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Frontend Developer</span>
            <h1 className="h1 mb-6">
              Hello, I'm
              <br />
              <span className="text-accent">Jeferson Galvis</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am a frontend developer passionate about creating modern and
              functional interfaces. I specialize in building attractive and
              optimized digital experiences.
            </p>
            {/* Botón para redes sociales */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/cv.pdf";
                  link.download = "Jeferson_Galvis_CV.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Foto */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
