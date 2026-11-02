import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Builds from "@/components/Builds";
import Process from "@/components/Process";
import Sectors from "@/components/Sectors";
import Chassis from "@/components/Chassis";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Builds />
        <Process />
        <Sectors />
        <Chassis />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
