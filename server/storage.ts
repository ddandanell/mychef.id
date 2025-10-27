import { type User, type InsertUser, type QuoteSubmission, type InsertQuoteSubmission } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createQuoteSubmission(quote: InsertQuoteSubmission): Promise<QuoteSubmission>;
  getQuoteSubmission(id: string): Promise<QuoteSubmission | undefined>;
  getAllQuoteSubmissions(): Promise<QuoteSubmission[]>;
  updateQuoteSubmissionStatus(id: string, status: string): Promise<QuoteSubmission | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private quoteSubmissions: Map<string, QuoteSubmission>;

  constructor() {
    this.users = new Map();
    this.quoteSubmissions = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createQuoteSubmission(insertQuote: InsertQuoteSubmission): Promise<QuoteSubmission> {
    const id = randomUUID();
    const quote: QuoteSubmission = {
      ...insertQuote,
      id,
      venueName: insertQuote.venueName || null,
      street: insertQuote.street || null,
      city: insertQuote.city || null,
      region: insertQuote.region || null,
      postalCode: insertQuote.postalCode || null,
      country: insertQuote.country || null,
      addressSkipped: insertQuote.addressSkipped || false,
      foodPreferences: insertQuote.foodPreferences || null,
      moodDescription: insertQuote.moodDescription || null,
      status: insertQuote.status || 'new',
      createdAt: new Date(),
    };
    this.quoteSubmissions.set(id, quote);
    return quote;
  }

  async getQuoteSubmission(id: string): Promise<QuoteSubmission | undefined> {
    return this.quoteSubmissions.get(id);
  }

  async getAllQuoteSubmissions(): Promise<QuoteSubmission[]> {
    return Array.from(this.quoteSubmissions.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async updateQuoteSubmissionStatus(id: string, status: string): Promise<QuoteSubmission | undefined> {
    const quote = this.quoteSubmissions.get(id);
    if (!quote) return undefined;
    
    const updated: QuoteSubmission = { ...quote, status };
    this.quoteSubmissions.set(id, updated);
    return updated;
  }
}

export const storage = new MemStorage();
