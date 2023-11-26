const bcrypt = require("bcryptjs");
import { connectMongoDB } from "@/app/lib/mongodb";
import User from "@/app/modals/User";

import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
	try {
		const { firstName, lastName, email, password } = await req.json();

		await connectMongoDB();

		const hashedPassword = await bcrypt.hash(password, 10);

		await User.create({ firstName, lastName, email, password: hashedPassword });

		return NextResponse.json(
			{ message: "Registeration Operation Successful" },
			{ status: 201 },
		);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ message: "Registeration Operation UnSuccessful", error },
			{ status: 500 },
		);
	}
};
