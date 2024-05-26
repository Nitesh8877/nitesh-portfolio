import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ContainerCenter } from "./utility";
import { BsLink45Deg } from "react-icons/bs";
import { Link } from "react-router-dom";

const Projects = ({ item }) => {
  const { title, image, reverse, link } = item;
  return (
    <ContainerCenter
      className={`flex flex-col md:flex-row gap-4 my-8 py-8 rounded shadow-xl ${
        reverse && "md:flex-row-reverse"
      }`}
    >
      <div className="flex-1 border-b-2 border-baseColor">
        <LazyLoadImage
          src={image}
          className="rounded-lg object-cover"
          effect="blur"
          alt={image}
          placeholderSrc="/images/dummy.png"
        />
      </div>
      <div className="flex flex-1 px-2 items-center justify-center">
        <Link
          target="_blank"
          to={link}
          className="flex gap-3 border-b-2 border-b-baseColor md:border-0"
        >
          <h1 className="text-2xl text-baseColor font-semibold">{title}</h1>
          <BsLink45Deg className="text-3xl pt-1 text-baseColor " />
        </Link>
      </div>
    </ContainerCenter>
  );
};

export default Projects;
