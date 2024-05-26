import React from "react";
import { Button, ContainerCenter, Divider } from "./utility";

const FooterContact = () => {
  return (
    <>
      <ContainerCenter className=" flex-wrap bg-baseColor justify-between md:px-28 px-4 py-8 m-4 rounded-lg gap-3">
        <div className="text-white">
          <h2 className="text-2xl md:text-4xl pb-3">Ready To Get Started</h2>
          <h1 className="text-xl md:text-3xl">Tell US About Today</h1>
        </div>
        <Button className="text-baseColor" link="/contact">
          Hire Me
        </Button>
      </ContainerCenter>
      <Divider />
    </>
  );
};

export default FooterContact;
