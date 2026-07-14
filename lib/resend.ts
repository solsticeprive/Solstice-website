import { Resend } from "resend";

export const isResendConfigured = Boolean(process.env.RESEND_API_KEY);

export const resend = new Resend(process.env.RESEND_API_KEY ?? "re_placeholder");
