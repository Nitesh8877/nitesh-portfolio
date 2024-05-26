import React from "react";
import { Button, ContainerCenter } from "./utility";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HeroSectionContainer = ({
  image,
  paragraph,
  typewriterText,
  title,
  name,
  left,
}) => {
  return (
    <section className="flex flex-col-reverse md:flex-row flex-wrap gap-5 p-4">
      <ContainerCenter className="flex-1 justify-center pt-6 md:p-0 ">
        <div className="max-auto gap-2 flex flex-col">
          {title && <h2 className="text-6xl ">{title}</h2>}
          {name && <h3 className="md:text-4xl text-2xl ">{name}</h3>}
          <h3 className="md:text-5xl text-3xl max-w-min animate-typing overflow-hidden whitespace-nowrap pr-5 border-r-4 border-r-baseColor text-baseColor">
            {typewriterText ?? "Full Stack Devloper."}
          </h3>
          <p className="text-xl ">
            {paragraph ??
              "Passionate to Full Stack Developer, Building & Maintaining responsive websites. Exploring new Technology."}
          </p>
          <Button
            basecolor
            className="text-white"
            target="_blank"
            download="/assets/Nitesh-software-developer-resume.pdf"
            link="/assets/Nitesh-software-developer-resume.pdf"
          >
            Download CV
          </Button>
        </div>
      </ContainerCenter>
      <ContainerCenter className="flex-1 justify-center relative pt-6">
        <div
          className={`bg-baseColor h-72 w-72 p-2 ${
            left
              ? "rounded-br-3x1 rounded-tr-[250px] rounded-bl-[250px] rounded-tl-3x1"
              : "rounded-br-[250px] rounded-tr-3x1 rounded-bl-3x1 rounded-tl-[250px]"
          }`}
        >
          <LazyLoadImage
            src={image}
            effect="blur"
            alt="Profile Pic"
            className="w-full drop-shadow-2xl"
          />
        </div>
      </ContainerCenter>
    </section>
  );
};

export default HeroSectionContainer;
