import type { Metadata } from "next";
import Nav from "@/components/Nav/Nav";
import Gallery from "@/components/Gallery/Gallery";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Gallery | Solstice Privé",
  description: "Real trips, real friendships, real memories from the Solstice Privé community.",
};

export default function GalleryPage() {
  return (
    <>
      <Nav />
      <main>
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
