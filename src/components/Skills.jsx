import React from "react";
import SkillList from "./SkillList";
import { BiLogoReact, BiLogoHtml5, BiLogoJavascript, BiLogoNodejs, BiLogoCPlusPlus, BiLogoMongodb, BiLogoBootstrap, BiLogoJava, BiLogoPhp, BiLogoPython, BiLogoGit, BiLogoGithub, BiLogoAws, } from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import { SiPostman } from "react-icons/si";
import { Heading } from "./utility";

const Skills = () => {
  const iconStyle = {
    height: "120px",
    width: "100%",
    color: "#28a745",
  };

  return (
    <div className="px-4 mt-6">
      <Heading className="text-center ">My Skills</Heading>
      <div className="flex items-center justify-center py-4">
        <div className="bg-baseColor w-1 h-[2180px]" />
        <div className="flex flex-col gap-2 h-full justify-between">
          <SkillList
            w="w-[75vw]"
            icon={<BiLogoHtml5 style={iconStyle} />}
            heading="HTML/CSS & Material UI "
          />
             <SkillList
            w="w-[70vw]"
            icon={<BiLogoBootstrap style={iconStyle} />}
            heading="Bootstrap"
          />
          <SkillList
            w="w-[65vw]"
            icon={<BiLogoJavascript style={iconStyle} />}
            heading="Javascript"
          />
          <SkillList
            w="w-[60vw]"
            icon={<BiLogoReact style={iconStyle} />}
            heading="React js"
          />
          <SkillList
            w="w-[55vw]"
            icon={<BiLogoNodejs style={iconStyle} />}
            heading="Node js"
          />
           <SkillList
            w="w-[50vw]"
            icon={<BiLogoMongodb style={iconStyle} />}
            heading="MongoDB"
          />
           <SkillList
            w="w-[45vw]"
            icon={<DiMysql
             style={iconStyle} />}
            heading="MySql"
          />
            <SkillList
            w="w-[40vw]"
            icon={<BiLogoAws style={iconStyle} />}
            heading="AWS"
          />
           <SkillList
            w="w-[35vw]"
            icon={<BiLogoCPlusPlus style={iconStyle} />}
            heading="C & C++"
          /> <SkillList
            w="w-[30vw]"
            icon={<BiLogoJava style={iconStyle} />}
            heading="Java"
          /> <SkillList
            w="w-[25vw]"
            icon={<BiLogoPhp style={iconStyle} />}
            heading="PHP"
          /> <SkillList
            w="w-[20vw]"
            icon={<BiLogoPython style={iconStyle} />}
            heading="Python"
          />
          <SkillList
            w="w-[15vw]"
            icon={<BiLogoGit style={iconStyle} />}
            heading="Git"
          />
            <SkillList
            w="w-[10vw]"
            icon={<BiLogoGithub style={iconStyle} />}
            heading="GitHub"
          />
          <SkillList
            w="w-[5vw]"
            icon={<SiPostman style={iconStyle} />}
            heading="Postman"
          />
         
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
