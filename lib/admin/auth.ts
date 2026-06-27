import "server-only";

// Demo credential check. Swap this for a real user lookup (hashed password,
// database, etc.) once auth is wired to a backend — call sites only depend
// on this function's signature, not its implementation.

const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "admin@solsticeprive.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "solstice2026";

export async function verifyCredentials(email: string, password: string): Promise<boolean> {
  return email === ADMIN_EMAIL && password === ADMIN_PASSWORD;
}

export const DEMO_CREDENTIALS = { email: ADMIN_EMAIL, password: ADMIN_PASSWORD };
