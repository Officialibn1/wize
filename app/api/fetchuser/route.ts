import { connectMongoDB } from "@/app/lib/mongodb";
import User from "@/app/modals/User";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
	try {
		await connectMongoDB();
		const { email } = await req.json();

		const user = User.findOne(email);

		return NextResponse.json({ message: "fetched user", user });
	} catch (e) {
		const error = e as Error;
		console.log(error.message);
		return NextResponse.json({ message: "fetched failed", error });
	}
};
