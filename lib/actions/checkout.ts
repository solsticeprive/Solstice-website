"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { isStripeConfigured, stripe } from "@/lib/stripe";
import type { ItineraryPackage } from "@/lib/content";

async function getOrigin(): Promise<string> {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  const headersList = await headers();
  const host = headersList.get("host") ?? "localhost:3000";
  const protocol = host.startsWith("localhost") ? "http" : "https";
  return `${protocol}://${host}`;
}

// Inserts the checkout status query param before any hash fragment, e.g.
// withCheckoutStatus("/itinerary/lagos-accra", "success") -> "/itinerary/lagos-accra?checkout=success"
// withCheckoutStatus("/#visa", "success") -> "/?checkout=success#visa"
function withCheckoutStatus(path: string, status: string): string {
  const [base, hash] = path.split("#");
  return `${base}?checkout=${status}${hash ? `#${hash}` : ""}`;
}

export async function createCheckoutSessionAction(
  productName: string,
  returnPath: string,
  pkg: ItineraryPackage
) {
  const origin = await getOrigin();

  if (!isStripeConfigured) {
    redirect(`${origin}${withCheckoutStatus(returnPath, "unavailable")}`);
  }

  let checkoutUrl: string | null = null;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: pkg.currency.toLowerCase(),
            unit_amount: Math.round(pkg.price * 100),
            product_data: {
              name: productName,
              description: pkg.description,
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}${withCheckoutStatus(returnPath, "success")}`,
      cancel_url: `${origin}${withCheckoutStatus(returnPath, "cancelled")}`,
    });
    checkoutUrl = session.url;
  } catch (error) {
    console.error("Stripe checkout session creation failed:", error);
    redirect(`${origin}${withCheckoutStatus(returnPath, "error")}`);
  }

  if (!checkoutUrl) {
    redirect(`${origin}${withCheckoutStatus(returnPath, "error")}`);
  }

  redirect(checkoutUrl);
}
