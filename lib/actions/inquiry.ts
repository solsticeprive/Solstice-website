"use server";

import { addInquiry } from "@/lib/admin/data";

export interface InquiryFormState {
  status: "idle" | "success" | "error";
  message?: string;
}

export async function submitInquiryAction(
  _prevState: InquiryFormState,
  formData: FormData
): Promise<InquiryFormState> {
  const firstName = String(formData.get("firstName") ?? "").trim();
  const lastName = String(formData.get("lastName") ?? "").trim();
  const countryCode = String(formData.get("countryCode") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const question = String(formData.get("question") ?? "").trim();
  const topic = String(formData.get("topic") ?? "").trim();

  if (!firstName || !lastName || !phone || !question) {
    return { status: "error", message: "Please fill in every field." };
  }

  await addInquiry({ firstName, lastName, countryCode, phone, question, topic });

  return { status: "success", message: "Thanks — we've got your question and will reply shortly." };
}
