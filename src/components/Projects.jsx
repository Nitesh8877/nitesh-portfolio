// src/components/Projects.jsx - Enhanced
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ContainerCenter } from "./utility";
import { BsLink45Deg, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = ({ item, index }) => {
  const { title, image, reverse, link, description, technologies } = item;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <ContainerCenter
        className={`flex flex-col md:flex-row gap-6 my-8 p-6 rounded-2xl shadow-2xl bg-white hover:shadow-3xl transition-all duration-300 ${
          reverse && "md:flex-row-reverse"
        }`}
      >
        {/* Image Section */}
        <div className="flex-1 group relative overflow-hidden rounded-xl">
          <div className="relative">
            <LazyLoadImage
              src={image}
              className="rounded-xl object-cover w-full h-64 md:h-80 transform group-hover:scale-110 transition-transform duration-500"
              effect="blur"
              alt={title}
              placeholderSrc="/images/dummy.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Hover Overlay */}
          <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <Link
              target="_blank"
              to={link}
              className="flex items-center justify-center gap-2 bg-baseColor text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold"
            >
              <span>View Live</span>
              <BsLink45Deg className="text-2xl" />
            </Link>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-1 flex-col justify-center space-y-4 px-2">
          <div className="flex items-center gap-3">
            <span className="bg-baseColor text-white px-4 py-1 rounded-full text-sm font-semibold">
              Project #{index + 1}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-baseColor transition-colors">
            {title}
          </h1>

          {description && (
            <p className="text-gray-600 leading-relaxed text-lg">
              {description}
            </p>
          )}

          {technologies && (
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-green-50 text-baseColor px-3 py-1 rounded-md text-sm font-medium border border-green-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="flex gap-4 pt-2">
            <Link
              target="_blank"
              to={link}
              className="flex items-center gap-2 text-baseColor hover:text-green-600 font-semibold transition-colors"
            >
              <BsLink45Deg className="text-2xl" />
              Live Demo
            </Link>
          </div>
        </div>
      </ContainerCenter>
    </motion.div>
  );
};

export default Projects;