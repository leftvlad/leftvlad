import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import AboutImage from "../assets/about.jpg"

function About() {
  return (
    <>
       <Navbar/>
      <Hero
      cName="hero-mid"
      heroImg ={AboutImage}
      title="О музее"
      btnClass="hide"
      />
      <AboutUs/>
      <Footer/>
    </>
  );
}

export default About;