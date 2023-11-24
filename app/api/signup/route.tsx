import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
	try {
		const { firstName, lastName, email, password } = await req.json();

		console.log(firstName, lastName, email, password);

		return NextResponse.json(
			{ message: "Registeration Successfull" },
			{ status: 201 },
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "Registeration Unsuccessfull", error },
			{ status: 500 },
		);
	}
};
