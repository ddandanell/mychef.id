import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuoteSubmissionSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Geolocation endpoint - gets user's city from their IP
  app.get("/api/geolocation", async (req, res) => {
    try {
      // Get the client's IP address - check X-Forwarded-For first (for proxies/load balancers)
      const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() 
                 || req.socket.remoteAddress 
                 || '8.8.8.8'; // fallback for development
      
      // Call ipapi.co with the client's IP
      const response = await fetch(`https://ipapi.co/${ip}/json/`);
      const data = await response.json();
      
      // Valid Bali cities we serve
      const BALI_CITIES = [
        'Seminyak', 'Canggu', 'Ubud', 'Sanur', 'Nusa Dua', 'Uluwatu',
        'Jimbaran', 'Pererenan', 'Berawa', 'Umalas', 'Kerobokan',
        'Tanah Lot', 'Candidasa', 'Amed', 'Lovina', 'Denpasar',
        'Kuta', 'Legian', 'Tabanan', 'Gianyar', 'Klungkung'
      ];
      
      const detectedCity = data.city || '';
      const detectedRegion = data.region || '';
      
      let city = 'Bali'; // default
      
      // Check if the detected city is in Bali
      if (BALI_CITIES.some(baliCity => 
        detectedCity.toLowerCase().includes(baliCity.toLowerCase())
      )) {
        city = detectedCity;
      } else if (detectedRegion && detectedRegion.toLowerCase().includes('bali')) {
        // If region is Bali but city not recognized, use generic "Bali"
        city = 'Bali';
      }
      
      res.json({ city });
    } catch (error: any) {
      // On error, return default
      res.json({ city: 'Bali' });
    }
  });

  // Quote submission routes
  app.post("/api/quotes", async (req, res) => {
    try {
      const validatedData = insertQuoteSubmissionSchema.parse(req.body);
      const quote = await storage.createQuoteSubmission(validatedData);
      res.json(quote);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  app.get("/api/quotes", async (req, res) => {
    try {
      const quotes = await storage.getAllQuoteSubmissions();
      res.json(quotes);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get("/api/quotes/:id", async (req, res) => {
    try {
      const quote = await storage.getQuoteSubmission(req.params.id);
      if (!quote) {
        return res.status(404).json({ error: "Quote not found" });
      }
      res.json(quote);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.patch("/api/quotes/:id/status", async (req, res) => {
    try {
      const { status } = req.body;
      if (!status || typeof status !== 'string') {
        return res.status(400).json({ error: "Status is required" });
      }
      const quote = await storage.updateQuoteSubmissionStatus(req.params.id, status);
      if (!quote) {
        return res.status(404).json({ error: "Quote not found" });
      }
      res.json(quote);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
