import HeroSection from "./components/HeroSection";
import LimitedEdition from "./components/LimitedEdition";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  const data = {
   name: "GemStore" //properly assigning the name property
  };

  return (
    <>
      <HeroSection myData={data} />
      <LimitedEdition />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
