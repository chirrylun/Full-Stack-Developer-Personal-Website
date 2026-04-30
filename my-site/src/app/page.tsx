import Navbar from "@/components/ui/Layout/NavBar";
import Footer  from "@/components/ui/Layout/Footer";
import Hero from "@/components/ui/Layout/Hero";
import Work from "@/components/Services/Work";
import Stack from "@/components/Services/Stack";
import About from "@/components/ui/Layout/About";
import Contact from "@/components/ui/Layout/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Work />
      <Stack />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}