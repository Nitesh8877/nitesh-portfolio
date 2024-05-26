import {lazy,Suspense} from "react"
import HeroSectionContainer from "../components/HeroSectionContainer";
import ImageProfile from "/images/profile.webp";
import { Container } from "../components/utility";
import Spinner from "../components/Spinner";

const Skills = lazy(()=>import("../components/Skills"));
const LatestProductSection = lazy(()=>import("../components/LatestProductSection"))

const Home = () => {
  return (
    <Container>
      <div className="py-8">
        <HeroSectionContainer
          title="Hii, i am"
          name="Nitesh Kumar Ram" 
          image={ImageProfile}
        />
      </div>
    <Suspense fallback={<Spinner/>}>
      <Skills />
      <LatestProductSection />
      </Suspense>     
    </Container>
  );
};

export default Home;
