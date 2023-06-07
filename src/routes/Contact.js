import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImage from "../assets/8.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import MyContact from "../components/MyContact";

function Contact() {
  return (
    <>
      <Navbar/>
      <Hero
      cName="hero-mid"
      heroImg ={AboutImage}
      title="Контакты"
      btnClass="hide"
      />
      <ContactForm/>
      <MyContact/>
      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A890c4527cd1403f19ebb72602bdbd5d4f5228f93c538a9379ebe9a6a14a5bd47&amp;source=constructor" width="95%" height="580" frameborder="0"></iframe>
      <Footer/>
    </>
  );
}

export default Contact;
