import React from "react";
import FooterContact from "./FooterContact";
import { Container, ContainerCenter, Divider, IconWrapper } from "./utility";
import { BsGithub } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <Container className="w-full p-4">
      <FooterContact />
      <div className="items-start flex-col flex gap-5">
        <div>
          <h1 className="text-2xl pb-3">Connect With Me</h1>
          <ContainerCenter className="items-center gap-2">
            <IconWrapper link="https://www.linkedin.com/in/nitesh-kumar-0247151b4/">
              <ImLinkedin />
            </IconWrapper>
            <IconWrapper link="https://www.github.com/nitesh8877">
              <BsGithub />
            </IconWrapper>
            <IconWrapper link=" https://leetcode.com/u/kumarnitesh88441/">
              <SiLeetcode />
            </IconWrapper>
           
          </ContainerCenter>
        </div>
        <div>
          <h1 className="text-2xl ">Contact Us</h1>
          <p className="text-xl">
            Email : <span className="text-gray-700">kumarnitesh88441@gmail.com</span>
          </p>
        </div>
      </div>
      <Divider />
      <ContainerCenter className="justify-center ">
        <p className="md:text-2xl text-xl text-primary">
          &copy; {year} Nitesh kumar Ram. All Rights Reserved
        </p>
      </ContainerCenter>
    </Container>
  );
};

export default Footer;
