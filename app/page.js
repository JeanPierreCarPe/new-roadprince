import About from "./components/About";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import PlanYourTrip from "./components/PlanYourTrip";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <PlanYourTrip />
      <Gallery />
      <Testimonials />
    </>
  );
}
