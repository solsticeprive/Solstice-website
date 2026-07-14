"use server";

import { addWaitlistSignup } from "@/lib/admin/data";
import { resend, isResendConfigured } from "@/lib/resend";
import { contactEmail } from "@/lib/content";

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

  if (isResendConfigured) {
    try {
      await resend.emails.send({
        from: "Solstice Privé Waitlist <onboarding@resend.dev>",
        to: contactEmail,
        replyTo: email,
        subject: `New waitlist signup — ${name}`,
        text: `${name} just joined the Solstice Privé waitlist.\n\nEmail: ${email}\nInterested in: ${interest || "General"}`,
      });
    } catch (error) {
      console.error("Failed to send waitlist notification email:", error);
    }
  }

  return { status: "success", message: "You're on the list! We'll be in touch soon." };
}
