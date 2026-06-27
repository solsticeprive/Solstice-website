import type { Metadata } from "next";
import Nav from "@/components/Nav/Nav";
import NotFound from "@/components/NotFound/NotFound";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Page Not Found | Solstice Privé",
};

export default function NotFoundPage() {
  return (
    <>
      <Nav />
      <NotFound />
      <Footer />
    </>
  );
}
