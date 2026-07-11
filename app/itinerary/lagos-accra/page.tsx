import type { Metadata } from "next";
import { Suspense } from "react";
import Nav from "@/components/Nav/Nav";
import ItineraryDetail from "@/components/ItineraryDetail/ItineraryDetail";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Passport to Detty | Solstice Privé",
  description: "Celebrate culture, music, food, and nightlife during the most exciting season in West Africa.",
};

export default function LagosItineraryPage() {
  return (
    <>
      <Nav />
      <main>
        <Suspense fallback={null}>
          <ItineraryDetail />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
