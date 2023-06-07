import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import Gallery from "../components/gallery";
import AboutImage from "../assets/10.jpg";
// import ExplorePicture from "../components/ExplorePicture";


function Service() {
  return (
    <>
      <Navbar/>
      <Hero
      cName="hero-mid"
      heroImg ={AboutImage}
      title="Экспозиция музея"
      btnClass="hide"
      />
      <Trip/>
      <Gallery/>
      {/* <ExplorePicture/> */}
      <Footer/>
    </>
  );
}

export default Service;
