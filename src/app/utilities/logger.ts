import pino, { Logger } from "pino";

export const logger: Logger =
  process.env["NODE_ENV"] === "production"
    ? pino({
        transport: {
          target: "pino/file",
          options: { destination: "../../logs/app.log" },
        },
        level: "info",
      })
    : pino({
        transport: {
          target: "pino-pretty",
          options: {
            colorize: true,
          },
        },
        level: "debug",
      });
