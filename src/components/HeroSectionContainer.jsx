import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";

const HeroSectionContainer = ({
  image,
  paragraph,
  typewriterText,
  title,
  name,
  left,
}) => {
  const [displayImage, setDisplayImage] = useState(image);
  const [resumeData, setResumeData] = useState(null);
  const [resumeFileName, setResumeFileName] = useState("");

  useEffect(() => {
    // Load uploaded profile image from localStorage
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setDisplayImage(savedImage);
    }

    // Load uploaded resume from localStorage
    const savedResume = localStorage.getItem("resumeUrl");
    const savedFileName = localStorage.getItem("resumeFileName");
    if (savedResume) {
      setResumeData(savedResume);
      setResumeFileName(savedFileName || "Resume.pdf");
    }
  }, []);

  const handleDownloadResume = (e) => {
    e.preventDefault();
    
    if (!resumeData) {
      // Download default resume
      const link = document.createElement("a");
      link.href = "/assets/Nitesh-software-developer-resume.pdf";
      link.download = "Nitesh-Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Download uploaded resume
      const link = document.createElement("a");
      link.href = resumeData;
      link.download = resumeFileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section className="flex flex-col-reverse md:flex-row flex-wrap gap-8 p-4">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center pt-6 md:p-0"
      >
        <div className="max-w-md gap-4 flex flex-col">
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
          <h3 className="md:text-5xl text-3xl max-w-min animate-typing overflow-hidden whitespace-nowrap pr-5 border-r-4 border-r-green-500 text-green-600 font-bold">
            {typewriterText ?? "Full Stack Developer."}
          </h3>
          <p className="text-xl text-gray-600 leading-relaxed">
            {paragraph ??
              "Building & Maintaining responsive websites. Exploring new Technology."}
          </p>

          {/* Download Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadResume}
            className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-all duration-300 flex items-center gap-3 max-w-fit shadow-lg hover:shadow-xl font-semibold"
          >
            <HiDownload className="text-2xl" />
            <span className="text-lg">
              {resumeData ? "Download My Resume" : "Download CV"}
            </span>
          </motion.button>

          {resumeData && (
            <p className="text-sm text-green-600 font-medium">
              ✅ Using uploaded resume: {resumeFileName}
            </p>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center relative pt-6"
      >
        <div
          className={`bg-gradient-to-br from-green-500 to-green-600 h-72 w-72 md:h-80 md:w-80 p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300 ${
            left
              ? "rounded-br-3xl rounded-tr-[250px] rounded-bl-[250px] rounded-tl-3xl"
              : "rounded-br-[250px] rounded-tr-3xl rounded-bl-3xl rounded-tl-[250px]"
          }`}
        >
          <LazyLoadImage
            src={displayImage}
            effect="blur"
            alt="Profile Pic"
            className="w-full h-full object-cover drop-shadow-2xl rounded-full"
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute -z-10 top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -z-10 bottom-0 left-0 w-40 h-40 bg-green-400/20 rounded-full blur-3xl"></div>
      </motion.div>
    </section>
  );
};

export default HeroSectionContainer;