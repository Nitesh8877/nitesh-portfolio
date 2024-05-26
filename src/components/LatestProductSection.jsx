import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContextHookUse } from "../hook/useContext";
import LatestProduct from "./LatestProduct";
import { Container, ContainerCenter, Heading } from "./utility";

const LatestProductSection = () => {
  const [latest, setLatest] = useState();
  const {data} = ContextHookUse();

  useEffect(() => {
    setLatest(() => {
      return data.filter((item) => (item.latest ? item : ""));
    });
  }, []);

  return (
    <Container className="py-8">
      <Heading className="text-center py-3">LatestProject</Heading>
      <div className="flex justify-between items-center px-3">
        <h2 className="text-2xl text-baseColor ">All Project</h2>
        <Link
          to="/about"
          className="bg-white py-2 px-4 rounded-md  text-sm text-baseColor border hover:border-baseColor hover:bg-transparent transition-colors duration-300 ease-in  "
        >
          Check
        </Link>
      </div>
      <ContainerCenter className="gap-8 p-4 flex-col md:flex-row">
        {latest &&
          latest.map((item, index) => {
            return <LatestProduct key={item.id} item={item} index={index} />;
          })}
      </ContainerCenter>
    </Container>
  );
};

export default LatestProductSection;
