import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "../server/routes";

const app = express();

app.use(express.json({
  verify: (req: any, _res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express.urlencoded({ extended: false }));

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

let routesRegistered = false;
let registration: Promise<void> | null = null;

async function ensureRoutesRegistered(): Promise<void> {
  if (routesRegistered) return;
  if (!registration) {
    registration = registerRoutes(app).then(() => {
      routesRegistered = true;
    });
  }
  await registration;
}

export default async function handler(req: any, res: any) {
  await ensureRoutesRegistered();
  return app(req, res);
}
