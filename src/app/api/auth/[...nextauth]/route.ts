import NextAuth, { User } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { dbQuery } from "../../database";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user }: { user: User }) {
      const data = dbQuery(`SELECT * FROM authorized_users WHERE user_email = '${user.email}'`);

      if (data[0]) {
        return true;
      } else {
        return false;
      }
    },
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
