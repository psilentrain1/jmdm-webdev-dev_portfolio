import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isInOffice = nextUrl.pathname.startsWith("/office");
      if (isInOffice) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/office", nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
