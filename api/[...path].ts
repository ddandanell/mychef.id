import express, { type Request, Response, NextFunction } from "express";
import { z } from "zod";
import { randomUUID } from "crypto";

/**
 * Vercel serverless function handling /api/* routes.
 *
 * Self-contained — does NOT import server/routes.ts or shared/schema.ts because
 * those pull in drizzle-orm/pg-core which doesn't resolve cleanly under
 * @vercel/node's ESM bundler (ERR_MODULE_NOT_FOUND).
 *
 * Storage is in-process (Map). On Vercel that means submissions are lost on
 * cold start. To persist, wire up a real DB and replace the Map calls.
 */

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// --- Validation ---
const quoteSubmissionInputSchema = z.object({
  serviceType: z.string(),
  venueName: z.string().nullish(),
  street: z.string().nullish(),
  city: z.string().nullish(),
  region: z.string().nullish(),
  postalCode: z.string().nullish(),
  country: z.string().nullish(),
  addressSkipped: z.boolean().nullish(),
  additionalNotes: z.string().nullish(),
  occasion: z.string().nullish(),
  occasionCustom: z.string().nullish(),
  guestCount: z.string().nullish(),
  guestCountUnsure: z.boolean().nullish(),
  guestCountCustom: z.string().nullish(),
  cuisine: z.string().nullish(),
  cuisineCustom: z.string().nullish(),
  selectedDates: z.array(z.string()).nullish(),
  datesFlexible: z.boolean().nullish(),
  datesNote: z.string().nullish(),
  preMeetingRequested: z.boolean().nullish(),
  recurringServiceType: z.string().nullish(),
  recurringServiceCustom: z.string().nullish(),
  serviceDuration: z.string().nullish(),
  durationFlexible: z.boolean().nullish(),
  durationNote: z.string().nullish(),
  peopleCount: z.string().nullish(),
  peopleCountUnsure: z.boolean().nullish(),
  peopleCountCustom: z.string().nullish(),
  startDate: z.string().nullish(),
  startDateFlexible: z.boolean().nullish(),
  startDateNote: z.string().nullish(),
  guestsPerMeal: z.string().nullish(),
  guestsPerMealVaries: z.boolean().nullish(),
  guestsPerMealCustom: z.string().nullish(),
  mealsNeeded: z.array(z.string()).nullish(),
  mealTimes: z.any().nullish(),
  groceryHandling: z.string().nullish(),
  groceryPaymentMethod: z.string().nullish(),
  dietaryRestrictions: z.string().nullish(),
  workDays: z.string().nullish(),
  workDaysCustom: z.string().nullish(),
});

type QuoteSubmissionInput = z.infer<typeof quoteSubmissionInputSchema>;

interface QuoteSubmission extends QuoteSubmissionInput {
  id: string;
  status: string;
  createdAt: string;
}

// --- Storage (in-memory, wiped on cold start) ---
const quoteSubmissions = new Map<string, QuoteSubmission>();

// --- Routes ---
app.post("/api/quotes", (req, res) => {
  const parsed = quoteSubmissionInputSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.message });
  }
  const id = randomUUID();
  const quote: QuoteSubmission = {
    ...parsed.data,
    id,
    status: "new",
    createdAt: new Date().toISOString(),
  };
  quoteSubmissions.set(id, quote);
  return res.json(quote);
});

app.get("/api/quotes", (_req, res) => {
  const list = Array.from(quoteSubmissions.values()).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  return res.json(list);
});

app.get("/api/quotes/:id", (req, res) => {
  const quote = quoteSubmissions.get(req.params.id);
  if (!quote) return res.status(404).json({ error: "Quote not found" });
  return res.json(quote);
});

app.patch("/api/quotes/:id/status", (req, res) => {
  const status = (req.body as { status?: unknown })?.status;
  if (!status || typeof status !== "string") {
    return res.status(400).json({ error: "Status is required" });
  }
  const existing = quoteSubmissions.get(req.params.id);
  if (!existing) return res.status(404).json({ error: "Quote not found" });
  const updated: QuoteSubmission = { ...existing, status };
  quoteSubmissions.set(updated.id, updated);
  return res.json(updated);
});

// --- Error handler ---
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err?.status || err?.statusCode || 500;
  const message = err?.message || "Internal Server Error";
  res.status(status).json({ message });
});

export default function handler(req: any, res: any) {
  return app(req, res);
}
