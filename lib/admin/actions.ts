"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyCredentials } from "./auth";
import { createTrip, updateBookingStatus, updateTrip } from "./data";
import { SESSION_COOKIE_NAME, SESSION_MAX_AGE_SECONDS } from "./session";
import type { BookingStatus, TripInput, TripStatus } from "./types";

function parseTripInput(formData: FormData): TripInput {
  return {
    title: String(formData.get("title") ?? ""),
    tag: String(formData.get("tag") ?? ""),
    location: String(formData.get("location") ?? ""),
    description: String(formData.get("description") ?? ""),
    startDate: String(formData.get("startDate") ?? ""),
    endDate: String(formData.get("endDate") ?? ""),
    capacity: Number(formData.get("capacity") ?? 0),
    price: Number(formData.get("price") ?? 0),
    status: String(formData.get("status") ?? "draft") as TripStatus,
    image: String(formData.get("image") ?? ""),
  };
}

export async function createTripAction(formData: FormData) {
  await createTrip(parseTripInput(formData));
  redirect("/admin/trips");
}

export async function updateTripAction(id: string, formData: FormData) {
  await updateTrip(id, parseTripInput(formData));
  redirect("/admin/trips");
}

export async function updateBookingStatusAction(id: string, status: BookingStatus, _formData: FormData) {
  await updateBookingStatus(id, status);
  redirect(`/admin/bookings/${id}`);
}

export interface LoginActionState {
  error?: string;
}

export async function loginAction(
  _prevState: LoginActionState | null,
  formData: FormData
): Promise<LoginActionState> {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");

  const isValid = await verifyCredentials(email, password);
  if (!isValid) {
    return { error: "Invalid email or password." };
  }

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, "active", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  });

  redirect("/admin");
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
  redirect("/admin/login");
}
