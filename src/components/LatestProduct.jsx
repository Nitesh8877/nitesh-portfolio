import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const LatestProduct = ({ item, index }) => {
  return (
    <Link
      to={item.link}
      target="_blank"
      className="flex-1 cursor-pointer relative "
    >
      <LazyLoadImage
      height="100%"
      width="100%"
        src={item.image}
        effect="blur"
        placeholderSrc="/images/dummy.png"
        className="rounded-md shadow-lg object-cover "
      />
      <div className="absolute text-white px-6 py-4 bg-baseColor text-xl -bottom-2 -left-1 rounded-full shadow-lg">
        {index + 1} {item.title}
      </div>
    </Link>
  );
};

export default LatestProduct;
