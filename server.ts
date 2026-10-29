import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import apiRoutes from "./server/routes";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON parsing with support for visual sketches / SVG payloads
  app.use(express.json({ limit: "15mb" }));
  app.use(express.urlencoded({ extended: true, limit: "15mb" }));

  // Request logging for backend operations
  app.use((req, res, next) => {
    if (req.path.startsWith("/api")) {
      const start = Date.now();
      res.on("finish", () => {
        const duration = Date.now() - start;
        console.log(`[API] ${req.method} ${req.path} -> ${res.statusCode} (${duration}ms)`);
      });
    }
    next();
  });

  // Mount API routes FIRST
  app.use("/api", apiRoutes);

  // Vite middleware for development vs static serve for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`PRISM Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
