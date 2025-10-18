import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContextHookUse } from "../hook/useContext";
import { Container, ContainerCenter, Heading } from "./utility";

const LatestProductSection = () => {
  const [latest, setLatest] = useState([]);
  const { data } = ContextHookUse();

  useEffect(() => {
    const filtered = data.filter((item) => item.latest);
    setLatest(filtered);
  }, [data]);

  return (
    <Container className="py-10 bg-gray-50">
      {/* Section Heading */}
      <Heading className="text-center py-2 text-3xl font-bold text-gray-800 relative after:absolute after:w-16 after:h-1 after:bg-baseColor after:rounded after:left-1/2 after:-translate-x-1/2 after:bottom-0">
        Latest Projects
      </Heading>

      {/* Top bar */}
      <div className="flex flex-col md:flex-row justify-between items-center my-5 px-3">
        <h2 className="text-xl text-baseColor font-semibold mb-2 md:mb-0">
          All Projects
        </h2>
        <Link
          to="/about"
          className="bg-baseColor text-white py-1.5 px-5 rounded-md text-sm font-medium shadow-sm hover:bg-transparent hover:text-baseColor border border-baseColor transition-all duration-300 ease-in-out"
        >
          Check
        </Link>
      </div>

      {/* Cards Grid */}
      <ContainerCenter className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-2">
        {latest && latest.length > 0 ? (
          latest.map((item, index) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-md overflow-hidden transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 max-w-[160px] w-full mx-auto"
            >
              {/* Image Section */}
              <div className="w-full h-[110px] bg-gray-100 overflow-hidden">
                <img
                  src={item.image || "/placeholder.png"}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Project Name */}
              <div className="p-2 text-center">
                <h3
                  className="text-sm font-semibold text-gray-800 truncate"
                  title={item.name}
                >
                  {item.name}
                </h3>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full text-sm">
            No latest projects available.
          </p>
        )}
      </ContainerCenter>
    </Container>
  );
};

export default LatestProductSection;
