import type { Metadata } from "next";
import Nav from "@/components/Nav/Nav";
import CancellationPolicy from "@/components/CancellationPolicy/CancellationPolicy";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | Solstice Privé",
  description: "Read Solstice Privé's cancellation, refund, and payment policy before booking your trip.",
};

export default function CancellationPolicyPage() {
  return (
    <>
      <Nav />
      <main>
        <CancellationPolicy />
      </main>
      <Footer />
    </>
  );
}
