import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Workshop from "@/components/Workshop";
import Builds from "@/components/Builds";
import Process from "@/components/Process";
import Chassis from "@/components/Chassis";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Builds />
        <Workshop />
        <Process />
        <Chassis />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
