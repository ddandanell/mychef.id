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
  occasionCustom: text("occasion_custom"),
  guestCount: text("guest_count"),
  guestCountCustom: text("guest_count_custom"),
  cuisine: text("cuisine"),
  cuisineCustom: text("cuisine_custom"),
  selectedDates: text("selected_dates").array(),
  datesFlexible: boolean("dates_flexible"),
  datesNote: text("dates_note"),
  preMeetingRequested: boolean("pre_meeting_requested"),
  
  // Multiple service fields (nullable for single service)
  recurringServiceType: text("recurring_service_type"),
  recurringServiceCustom: text("recurring_service_custom"),
  serviceDuration: text("service_duration"),
  durationFlexible: boolean("duration_flexible"),
  durationNote: text("duration_note"),
  peopleCount: text("people_count"),
  peopleCountCustom: text("people_count_custom"),
  startDate: text("start_date"),
  startDateFlexible: boolean("start_date_flexible"),
  startDateNote: text("start_date_note"),
  
  // Full-time chef fields (nullable for other service types)
  guestsPerMeal: text("guests_per_meal"),
  guestsPerMealCustom: text("guests_per_meal_custom"),
  mealsNeeded: text("meals_needed").array(), // breakfast, lunch, dinner
  mealTimes: jsonb("meal_times"), // { breakfast?: string, lunch?: string, dinner?: string }
  groceryHandling: text("grocery_handling"), // mychef-handles or client-handles
  groceryPaymentMethod: text("grocery_payment_method"), // upfront-payment or daily-money (only if mychef-handles)
  dietaryRestrictions: text("dietary_restrictions"),
  workDays: text("work_days"),
  workDaysCustom: text("work_days_custom"),
  
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
  occasionCustom: z.string().nullish(),
  guestCount: z.string().nullish(),
  guestCountCustom: z.string().nullish(),
  cuisine: z.string().nullish(),
  cuisineCustom: z.string().nullish(),
  selectedDates: z.array(z.string()).nullish(),
  datesFlexible: z.boolean().nullish(),
  datesNote: z.string().nullish(),
  preMeetingRequested: z.boolean().nullish(),
  
  // Multiple service fields (optional for single service)
  recurringServiceType: z.string().nullish(),
  recurringServiceCustom: z.string().nullish(),
  serviceDuration: z.string().nullish(),
  durationFlexible: z.boolean().nullish(),
  durationNote: z.string().nullish(),
  peopleCount: z.string().nullish(),
  peopleCountCustom: z.string().nullish(),
  startDate: z.string().nullish(),
  startDateFlexible: z.boolean().nullish(),
  startDateNote: z.string().nullish(),
  
  // Full-time chef fields (optional for other service types)
  guestsPerMeal: z.string().nullish(),
  guestsPerMealCustom: z.string().nullish(),
  mealsNeeded: z.array(z.string()).nullish(),
  mealTimes: z.any().nullish(),
  groceryHandling: z.string().nullish(),
  groceryPaymentMethod: z.string().nullish(),
  dietaryRestrictions: z.string().nullish(),
  workDays: z.string().nullish(),
  workDaysCustom: z.string().nullish(),
});

export type InsertQuoteSubmission = z.infer<typeof insertQuoteSubmissionSchema>;
export type QuoteSubmission = typeof quoteSubmissions.$inferSelect;
