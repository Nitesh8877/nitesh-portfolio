// import React from "react";
// import { Button, ContainerCenter } from "./utility";
// import { LazyLoadImage } from "react-lazy-load-image-component";

// const HeroSectionContainer = ({
//   image,
//   paragraph,
//   typewriterText,
//   title,
//   name,
//   left,
// }) => {
//   return (
//     <section className="flex flex-col-reverse md:flex-row flex-wrap gap-5 p-4">
//       <ContainerCenter className="flex-1 justify-center pt-6 md:p-0 ">
//         <div className="max-auto gap-2 flex flex-col">
//           {title && <h2 className="text-6xl ">{title}</h2>}
//           {name && <h3 className="md:text-4xl text-2xl ">{name}</h3>}
//           <h3 className="md:text-5xl text-3xl max-w-min animate-typing overflow-hidden whitespace-nowrap pr-5 border-r-4 border-r-baseColor text-baseColor">
//             {typewriterText ?? "Full Stack Devloper."}
//           </h3>
//           <p className="text-xl ">
//             {paragraph ??
//               "Building & Maintaining responsive websites. Exploring new Technology."}
//           </p>
//           <Button
//             basecolor
//             className="text-white"
//             target="_blank"
//             download="/assets/Nitesh-software-developer-resume.pdf"
//             link="/assets/Nitesh-software-developer-resume.pdf"
//           >
//             Download CV
//           </Button>
//         </div>
//       </ContainerCenter>
//       <ContainerCenter className="flex-1 justify-center relative pt-6">
//         <div
//           className={`bg-baseColor h-72 w-72 p-2 ${
//             left
//               ? "rounded-br-3x1 rounded-tr-[250px] rounded-bl-[250px] rounded-tl-3x1"
//               : "rounded-br-[250px] rounded-tr-3x1 rounded-bl-3x1 rounded-tl-[250px]"
//           }`}
//         >
//           <LazyLoadImage
//             src={image}
//             effect="blur"
//             alt="Profile Pic"
//             className="w-full drop-shadow-2xl"
//           />
//         </div>
//       </ContainerCenter>
//     </section>
//   );
// };

// export default HeroSectionContainer;


// src/components/HeroSectionContainer.jsx
import { useState, useEffect } from "react";
import { Button, ContainerCenter } from "./utility";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { HiDownload } from "react-icons/hi";

const HeroSectionContainer = ({
  image,
  paragraph,
  typewriterText,
  title,
  name,
  left,
}) => {
  const [resumeUrl, setResumeUrl] = useState(null);

  useEffect(() => {
    const savedResume = localStorage.getItem("resumeUrl");
    if (savedResume) {
      setResumeUrl(savedResume);
    }
  }, []);

  const handleDownload = (e) => {
    e.preventDefault();
    
    const downloadUrl = resumeUrl || "/assets/Nitesh-software-developer-resume.pdf";
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "Nitesh-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="flex flex-col-reverse md:flex-row flex-wrap gap-8 p-4">
      <ContainerCenter className="flex-1 justify-center pt-6 md:p-0">
        <div className="max-auto gap-4 flex flex-col">
          {title && (
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800">
              {title}
            </h2>
          )}
          {name && (
            <h3 className="md:text-4xl text-2xl font-semibold text-gray-700">
              {name}
            </h3>
          )}
          <h3 className="md:text-5xl text-3xl max-w-min animate-typing overflow-hidden whitespace-nowrap pr-5 border-r-4 border-r-baseColor text-baseColor font-bold">
            {typewriterText ?? "Full Stack Developer."}
          </h3>
          <p className="text-xl text-gray-600 leading-relaxed">
            {paragraph ??
              "Building & Maintaining responsive websites. Exploring new Technology."}
          </p>
          
          {/* Download Button with Icon */}
          <button
            onClick={handleDownload}
            className="bg-baseColor text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-all duration-300 flex items-center gap-3 max-w-fit shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <HiDownload className="text-2xl" />
            <span className="text-lg font-medium">Download CV</span>
          </button>
        </div>
      </ContainerCenter>

      <ContainerCenter className="flex-1 justify-center relative pt-6">
        <div
          className={`bg-gradient-to-br from-baseColor to-green-600 h-72 w-72 md:h-80 md:w-80 p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300 ${
            left
              ? "rounded-br-3xl rounded-tr-[250px] rounded-bl-[250px] rounded-tl-3xl"
              : "rounded-br-[250px] rounded-tr-3xl rounded-bl-3xl rounded-tl-[250px]"
          }`}
        >
          <LazyLoadImage
            src={image}
            effect="blur"
            alt="Profile Pic"
            className="w-full h-full object-cover drop-shadow-2xl"
          />
        </div>
        {/* Decorative Elements */}
        <div className="absolute -z-10 top-0 right-0 w-32 h-32 bg-baseColor/20 rounded-full blur-3xl"></div>
        <div className="absolute -z-10 bottom-0 left-0 w-40 h-40 bg-green-400/20 rounded-full blur-3xl"></div>
      </ContainerCenter>
    </section>
  );
};

export default HeroSectionContainer;
