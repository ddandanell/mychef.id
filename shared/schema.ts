import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, jsonb, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const quoteSubmissions = pgTable("quote_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  serviceType: text("service_type").notNull(),
  
  // Common fields
  venueName: text("venue_name"),
  street: text("street"),
  city: text("city"),
  region: text("region"),
  postalCode: text("postal_code"),
  country: text("country"),
  addressSkipped: boolean("address_skipped").notNull().default(false),
  additionalNotes: text("additional_notes"),
  
  // Single service fields (nullable for multiple service)
  occasion: text("occasion"),
  guestCount: text("guest_count"),
  cuisine: text("cuisine"),
  selectedDates: text("selected_dates").array(),
  preMeetingRequested: boolean("pre_meeting_requested"),
  
  // Multiple service fields (nullable for single service)
  recurringServiceType: text("recurring_service_type"),
  serviceDuration: text("service_duration"),
  peopleCount: text("people_count"),
  startDate: text("start_date"),
  
  // Full-time chef fields (nullable for other service types)
  guestsPerMeal: text("guests_per_meal"),
  mealsNeeded: text("meals_needed").array(), // breakfast, lunch, dinner
  mealTimes: jsonb("meal_times"), // { breakfast?: string, lunch?: string, dinner?: string }
  groceryHandling: text("grocery_handling"), // mychef-handles or client-handles
  groceryPaymentMethod: text("grocery_payment_method"), // upfront-payment or daily-money (only if mychef-handles)
  dietaryRestrictions: text("dietary_restrictions"),
  workDays: text("work_days"),
  
  status: text("status").notNull().default('new'),
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
});

export const insertQuoteSubmissionSchema = createInsertSchema(quoteSubmissions).omit({
  id: true,
  createdAt: true,
  status: true,
}).extend({
  // Common fields
  venueName: z.string().nullish(),
  street: z.string().nullish(),
  city: z.string().nullish(),
  region: z.string().nullish(),
  postalCode: z.string().nullish(),
  country: z.string().nullish(),
  additionalNotes: z.string().nullish(),
  
  // Single service fields (optional for multiple service)
  occasion: z.string().nullish(),
  guestCount: z.string().nullish(),
  cuisine: z.string().nullish(),
  selectedDates: z.array(z.string()).nullish(),
  preMeetingRequested: z.boolean().nullish(),
  
  // Multiple service fields (optional for single service)
  recurringServiceType: z.string().nullish(),
  serviceDuration: z.string().nullish(),
  peopleCount: z.string().nullish(),
  startDate: z.string().nullish(),
  
  // Full-time chef fields (optional for other service types)
  guestsPerMeal: z.string().nullish(),
  mealsNeeded: z.array(z.string()).nullish(),
  mealTimes: z.any().nullish(),
  groceryHandling: z.string().nullish(),
  groceryPaymentMethod: z.string().nullish(),
  dietaryRestrictions: z.string().nullish(),
  workDays: z.string().nullish(),
});

export type InsertQuoteSubmission = z.infer<typeof insertQuoteSubmissionSchema>;
export type QuoteSubmission = typeof quoteSubmissions.$inferSelect;
