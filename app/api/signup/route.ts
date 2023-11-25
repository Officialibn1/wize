import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
	try {
		const { firstName, lastName, email, password } = await req.json();

		console.log(firstName, lastName, email, password);

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
