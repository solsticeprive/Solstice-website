import { Suspense } from "react";
import Nav from "@/components/Nav/Nav";
import Hero from "@/components/Hero/Hero";
import Why from "@/components/Why/Why";
import Experiences from "@/components/Experiences/Experiences";
import Difference from "@/components/Difference/Difference";
import Story from "@/components/Story/Story";
import Testimonials from "@/components/Testimonials/Testimonials";
import VisaConcierge from "@/components/VisaConcierge/VisaConcierge";
import Waitlist from "@/components/Waitlist/Waitlist";
import Footer from "@/components/Footer/Footer";

interface HomeProps {
  searchParams: Promise<{ interest?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { interest } = await searchParams;

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
        <Suspense fallback={null}>
          <VisaConcierge />
        </Suspense>
        <Waitlist defaultInterest={interest} />
      </main>
      <Footer />
    </>
  );
}
