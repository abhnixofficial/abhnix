import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Projects from "../components/sections/Projects";
import Process from "../components/sections/Process";
import Contact from "../components/sections/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Process />
      <Contact />
    </>
  );
};

export default Home;