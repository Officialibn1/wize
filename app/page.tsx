import Link from "next/link";

const Page = () => {
	return (
		<main>
			<h1 className='text3xl'>Hello World!!</h1>
			<br />
			<br />
			<Link href={"/dashboard"}>dashboard</Link>
		</main>
	);
};

export default Page;
