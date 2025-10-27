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
  occasion: text("occasion").notNull(),
  venueName: text("venue_name"),
  street: text("street"),
  city: text("city"),
  region: text("region"),
  postalCode: text("postal_code"),
  country: text("country"),
  addressSkipped: boolean("address_skipped").notNull().default(false),
  guestCount: text("guest_count").notNull(),
  additionalServices: text("additional_services").array().notNull(),
  cuisine: text("cuisine").notNull(),
  dateMode: text("date_mode").notNull(),
  selectedDates: text("selected_dates").array().notNull(),
  timeOfDay: text("time_of_day").notNull(),
  foodPreferences: text("food_preferences"),
  moodDescription: text("mood_description"),
  status: text("status").notNull().default('new'),
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
});

export const insertQuoteSubmissionSchema = createInsertSchema(quoteSubmissions).omit({
  id: true,
  createdAt: true,
}).extend({
  venueName: z.string().nullish(),
  street: z.string().nullish(),
  city: z.string().nullish(),
  region: z.string().nullish(),
  postalCode: z.string().nullish(),
  country: z.string().nullish(),
  foodPreferences: z.string().nullish(),
  moodDescription: z.string().nullish(),
});

export type InsertQuoteSubmission = z.infer<typeof insertQuoteSubmissionSchema>;
export type QuoteSubmission = typeof quoteSubmissions.$inferSelect;
