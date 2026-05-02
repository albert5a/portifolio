import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Gallery } from "@/components/gallery";
import { Hobbies } from "@/components/hobbies";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Gallery />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
