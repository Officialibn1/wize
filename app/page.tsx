import Link from "next/link";

const Page = () => {
	return (
		<main className='w-full py-5 flex flex-col gap-5'>
			<h1 className='text-3xl my-10 text-center'>Testing Dark Theme</h1>

			<Link
				href={"/login"}
				className='px-3 py-2 rounded-xl bg-slate-700 text-slate-900 my-5 font-semibold mx-auto'>
				Login
			</Link>

			<Link
				href={"/signup"}
				className='px-3 py-2 rounded-xl bg-slate-700 text-slate-900 my-5 font-semibold mx-auto'>
				Sign Up
			</Link>
		</main>
	);
};

export default Page;
