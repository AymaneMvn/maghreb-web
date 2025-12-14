import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Process from "./components/Process";
// import Brands from "./components/Brands";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Technology from "./components/Technology";
import Team from "./components/Team";
import Banner from "./components/Banner";
// import Testimonial from "./components/Testimonial";
import Blog from "./components/Blog";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Offcanvas from "./components/Offcanvas";

export default function Home() {
  return (
    <>
      <Offcanvas />
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Hero />
            {/* <Brands /> */}
            <Services />
            <About />
            <Process />
            <Portfolio />
            <Technology />
            <Team />
            <Banner />
            {/* <Testimonial /> */}
            <Blog />
            <CTA />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
