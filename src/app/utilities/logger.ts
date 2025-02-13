import pino, { Logger } from "pino";

export const logger: Logger =
  process.env["NODE_ENV"] === "production"
    ? pino({
        transport: {
          target: "pino/file",
          options: { destination: "./src/logs/app.log" },
        },
        level: "info",
        redact: ["user.name", "user.email"],
      })
    : pino({
        transport: {
          target: "pino/file",
          options: { destination: "./src/logs/app.log" },
        },
        level: "trace",
        redact: ["user.name", "user.email"],
      });
