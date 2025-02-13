import NextAuth, { User } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user }: { user: User }) {
      // TODO: change this to check DB for authorized users.
      if (user?.email === "github@jamesmdrakemedia.com") {
        return true;
      } else {
        return false;
      }
    },
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
