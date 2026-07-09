import Stripe from "stripe";

export const isStripeConfigured = Boolean(process.env.STRIPE_SECRET_KEY);

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "sk_test_placeholder");
