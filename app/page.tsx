import Nav from "@/components/Nav/Nav";
import Hero from "@/components/Hero/Hero";
import Why from "@/components/Why/Why";
import Experiences from "@/components/Experiences/Experiences";
import Difference from "@/components/Difference/Difference";
import Story from "@/components/Story/Story";
import Testimonials from "@/components/Testimonials/Testimonials";
import Waitlist from "@/components/Waitlist/Waitlist";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Why />
        <Experiences />
        <Difference />
        <Story />
        <Testimonials />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
