import { prisma } from "@/services/database/client";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    Credentials({
      id: "credentials",
      name: "Credentials",
      authorize: async (credentials) => {
        try {
          const user = await prisma.user.findFirst({
            where: {
              AND: {
                user_email: credentials.email,
                user_password: credentials.password,
              },
            },
          });

          if (user) {
            return {
              id: user.user_id,
              name: user.user_name,
              email: user.user_email,
              isAdmin: user.user_role == 2,
            };
          }
        } catch (error) {
          const errorMessage = error.response.data.message;
          // Redirecting to the login page with error messsage in the URL
          throw new Error(errorMessage + "&email=" + credentials.email);
        }
      },
    }),
  ],
  pages: {
    signIn: "/ingreso",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
