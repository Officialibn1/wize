const bcrypt = require("bcryptjs");
import { connectMongoDB } from "@/app/lib/mongodb";
import User from "@/app/modals/User";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

export const authOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {},
			// @ts-ignore
			async authorize(
				credentials: { email: string; password: string } | undefined,
				req,
			) {
				if (!credentials) {
					return null;
				}

				const { email, password } = credentials;
				try {
					await connectMongoDB();

					const user = await User.findOne({ email });
					if (!user) return null;

					const passwordMatch = await bcrypt.compare(password, user.password);

					if (!passwordMatch) return null;

					console.log(user);

					return user;
				} catch (e) {
					const error = e as Error;
					console.log(error.message);
				}
			},
		}),
	],
	session: {
		strategy: "jwt",
	},
	pages: {
		signIn: "/login",
	},
	callbacks: {
		async session({ session, token, user }) {
			// session.user.id = token?.id

			return session;
		},
	},
} satisfies NextAuthOptions;
