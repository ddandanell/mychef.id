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
  additionalServices: text("additional_services").array(),
  cuisine: text("cuisine"),
  dateMode: text("date_mode"),
  selectedDates: text("selected_dates").array(),
  timeOfDay: text("time_of_day"),
  foodPreferences: text("food_preferences"),
  moodDescription: text("mood_description"),
  
  // Multiple service fields (nullable for single service)
  recurringServiceType: text("recurring_service_type"),
  serviceDuration: text("service_duration"),
  peopleCount: text("people_count"),
  dietaryFocus: text("dietary_focus"),
  chefQualities: text("chef_qualities"),
  budgetRange: text("budget_range"),
  startDate: text("start_date"),
  
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
  additionalServices: z.array(z.string()).nullish(),
  cuisine: z.string().nullish(),
  dateMode: z.string().nullish(),
  selectedDates: z.array(z.string()).nullish(),
  timeOfDay: z.string().nullish(),
  foodPreferences: z.string().nullish(),
  moodDescription: z.string().nullish(),
  
  // Multiple service fields (optional for single service)
  recurringServiceType: z.string().nullish(),
  serviceDuration: z.string().nullish(),
  peopleCount: z.string().nullish(),
  dietaryFocus: z.string().nullish(),
  chefQualities: z.string().nullish(),
  budgetRange: z.string().nullish(),
  startDate: z.string().nullish(),
});

export type InsertQuoteSubmission = z.infer<typeof insertQuoteSubmissionSchema>;
export type QuoteSubmission = typeof quoteSubmissions.$inferSelect;
