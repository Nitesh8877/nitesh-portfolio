import { lazy, Suspense } from "react";
import Profile2 from "/images/profile2.webp";
import { Container, Heading } from "./utility";
import { ContextHookUse } from "../hook/useContext";
import Spinner from "./Spinner";

const Projects = lazy(() => import("./Projects"));
const HeroSectionContainer = lazy(() => import("./HeroSectionContainer"));

const AboutSection = () => {
  const { data } = ContextHookUse();
  return (
    <Container className="py-4">
      <Heading className="text-center">About Me</Heading>
      <Suspense fallback={<Spinner />}>
        <div className="py-10">
          <HeroSectionContainer
            left
            title="Who I'm"
            typewriterText="I am FullStackDeveloper"
            image={Profile2}
            buttontext="Contact Me"
            paragraph="A Full Stack Developer who build's Responsive websites & exploring new web design's. Highly skilled in HTML, CSS, Javascript and working knowledge of JavaScript, React and Node Js. Learning Advances JavaScript and ReactJs."
          />
        </div>
        <div className="p-4">
          <Heading className="text-center mb-10">My Projects</Heading>
          {data.map((item) => {
            return <Projects key={item.id} item={item} image={item.image} />;
          })}
        </div>
      </Suspense>
    </Container>
  );
};

export default AboutSection;
