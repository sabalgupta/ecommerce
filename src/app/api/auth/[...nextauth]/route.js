import { connectDatabase } from "@/lib/connect";
import { User } from "@/models/users";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt"
import NextAuth from "next-auth";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Username" },
                password: {label: "Password", type:"password"}
            },

            async authorize(credentials) {
                const username = credentials?.username;
                const password = credentials?.password;

                await connectDatabase();
                const user = await User.findOne({ username });
                if (!user) throw new Error("Invalid Credentials");

                const isPasswordCorrect = await bcrypt.compare(password, user.password);
                if (!isPasswordCorrect) throw new Error("Invalid Credentials");

                return { id: user._id.toString(), username };
            }
        })
    ],
    session: { strategy: "jwt" },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id,
                token.username = user.username
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id,
                session.user.username = token.username
            }
            return session;
        }
    }
}

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}