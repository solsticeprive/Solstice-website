import type { Metadata } from "next";
import { Suspense } from "react";
import Nav from "@/components/Nav/Nav";
import ItineraryDetail from "@/components/ItineraryDetail/ItineraryDetail";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Lagos Itinerary | Solstice Privé",
  description:
    "Eight days across Lagos and Accra — art galleries, Afrobeats nights, Elmina Castle, and a Christmas dinner under the stars.",
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
