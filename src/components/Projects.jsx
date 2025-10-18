import { LazyLoadImage } from "react-lazy-load-image-component";
import { ContainerCenter } from "./utility";
import { BsLink45Deg, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const Projects = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { title, image, reverse, link, description, technologies, github } = item;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <ContainerCenter
        className={`flex flex-col md:flex-row gap-8 my-12 p-8 rounded-3xl shadow-2xl bg-white hover:shadow-3xl transition-all duration-300 overflow-hidden ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image Section */}
        <motion.div
          className="flex-1 group relative overflow-hidden rounded-2xl"
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative h-80 overflow-hidden">
            <LazyLoadImage
              src={image}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              effect="blur"
              alt={title}
              placeholderSrc="/images/dummy.png"
            />

            {/* Gradient Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-end justify-end p-6"
            >
              <div className="space-y-3 w-full">
                <p className="text-white/90 text-sm font-semibold">
                  {isHovered ? "Explore Project" : ""}
                </p>
                <div className="flex gap-3">
                  <Link
                    target="_blank"
                    to={link}
                    className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold transform hover:scale-105"
                  >
                    <span>Live Demo</span>
                    <BsLink45Deg className="text-xl" />
                  </Link>
                  {github && (
                    <Link
                      target="_blank"
                      to={github}
                      className="flex items-center justify-center gap-2 bg-gray-800 text-white px-4 py-3 rounded-lg hover:bg-gray-900 transition-colors font-semibold"
                    >
                      <BsGithub className="text-xl" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Project Stats Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
          >
            #{index + 1}
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <div className="flex flex-1 flex-col justify-center space-y-5">
          {/* Project Badge */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <span className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Project 0{index + 1}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-black text-gray-900 leading-tight hover:text-green-600 transition-colors"
          >
            {title}
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-700 leading-relaxed text-lg"
            >
              {description}
            </motion.p>
          )}

          {/* Technologies */}
          {technologies && technologies.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {technologies.map((tech, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="bg-gradient-to-r from-green-50 to-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold border-2 border-green-200 hover:border-green-500 transition-all cursor-pointer"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          )}

          {/* Key Features */}
          {item.features && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-2"
            >
              <p className="text-sm font-bold text-gray-600">✨ Key Features:</p>
              <ul className="space-y-1">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Stats */}
          {item.stats && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              {item.stats.map((stat, idx) => (
                <div key={idx} className="bg-gray-50 p-3 rounded-lg text-center">
                  <p className="text-2xl font-bold text-green-600">{stat.value}</p>
                  <p className="text-xs text-gray-600">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          )}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 pt-6"
          >
            <Link
              target="_blank"
              to={link}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all font-bold text-lg group"
            >
              <BsLink45Deg className="text-xl group-hover:rotate-45 transition-transform" />
              View Live
            </Link>
            {github && (
              <Link
                target="_blank"
                to={github}
                className="flex items-center justify-center gap-2 border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-800 hover:text-white transition-all font-bold"
              >
                <BsGithub />
                Source Code
              </Link>
            )}
          </motion.div>
        </div>
      </ContainerCenter>
    </motion.div>
  );
};

export default Projects;