"use client";
import About from "./components/About/About";
import Video from "./components/Video";
import TextScrolling from "./components/About/components/TextScrolling";
import ProjectList from "./components/ProjectList/ProjectList";
import Agend from "./components/Agend";
import Gallery from "./components/Gallery/Gallery";
import ServicesDescription from "./components/ServicesDescription/ServicesDescription";
import AboutMe from "./components/AboutMe/AboutMe";
import AgendCalendar from "./components/AgendCalendar/AgendCalendar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* Video */}
      <Video />

      {/* Project list */}
      <ProjectList />

      {/* Agend  */}
      <Agend />

      {/* Gallery */}
      <Gallery />

      {/* Services descriptions */}
      <ServicesDescription />

      {/* About me */}
      <AboutMe />

      {/* Agend Calendar */}
      <AgendCalendar />

      {/* Footer */}
      <Footer />
    </>
  );
}
