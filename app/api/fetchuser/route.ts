import { connectMongoDB } from "@/app/lib/mongodb";
import User from "@/app/modals/User";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
	try {
		const { email } = await req.json();
		await connectMongoDB();

		const user = User.findOne({ email });

		return NextResponse.json({ message: "fetched user", user });
	} catch (e) {
		const error = e as Error;
		// console.log(error.cause);
		return NextResponse.json({ message: "fetched failed", error });
	}
};
