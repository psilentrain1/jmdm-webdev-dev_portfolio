import { User } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { dbQuery } from "./app/api/database";
import { logger } from "./app/utilities/logger";

const log = logger.child({ module: "auth" });

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user }: { user: User }) {
      log.info(`signIn: ${user.id}`);
      const data = dbQuery(`SELECT * FROM authorized_users WHERE user_email = '${user.email}'`);

      if (data[0]) {
        log.info(`User ${user.id} is authorized.`);
        return true;
      } else {
        log.info(`User ${user.id} is not authorized.`);
        return false;
      }
    },
  },
};
