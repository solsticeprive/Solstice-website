"use server";

import { addWaitlistSignup } from "@/lib/admin/data";

export interface WaitlistFormState {
  status: "idle" | "success" | "error";
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function joinWaitlistAction(
  _prevState: WaitlistFormState,
  formData: FormData
): Promise<WaitlistFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const interest = String(formData.get("interest") ?? "").trim();

  if (!name || !email) {
    return { status: "error", message: "Please fill in your name and email." };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  await addWaitlistSignup({ name, email, interest: interest || "General" });

  return { status: "success", message: "You're on the list! We'll be in touch soon." };
}
