import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import HomeImage from "../assets/12.jpg"

function Home() {
  return (
    <>
          <Navbar/>
      <Hero
      cName="hero"
      heroImg ={HomeImage}
      title="Национальный художественный музей Республики Беларусь"
      text = "Добро пожаловать на сайт"
      buttonText="Виртуальная галерея"
      url="/"
      btnClass="show"
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </>
  );
}

export default Home;