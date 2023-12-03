import { connectMongoDB } from "@/app/lib/mongodb";
import User from "@/app/modals/User";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
	try {
		await connectMongoDB();
		const { email } = await req.json();

		const user = await User.findOne({ email }).select("_id");

		// console.log("From Api:", user);

		return NextResponse.json({ user });
	} catch (e: any) {
		const error = e.message;
		return NextResponse.json(
			{ message: "Operation failed", error },
			{ status: 500 },
		);
	}
};
