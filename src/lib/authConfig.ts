import User from "@/models/User";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
const options: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }
        const user = await User.findOne({ email: credentials?.email });
        if (!user) {
          return null;
        }
        const compare = await bcrypt.compare(
          credentials.password,
          user.password,
        );
        if (!compare) {
          return null;
        }
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
};
export default options;
