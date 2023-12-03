import Link from "next/link";
import React from "react";

const MainNotfoundPage = () => {
	return (
		<div className=' py-40 px-5 flex w-full h-[100dvh]'>
			<div className='md:w-1/2 mx-auto'>
				<h1 className='text-5xl font-bold text-center'>
					Oppsss. . . Sorry this page cannot be{" "}
					<b className='text-red-400'>found</b> or is{" "}
					<b className='text-green-400'>under construction</b>!!!
				</h1>

				<div className='flex justify-center py-5'>
					<Link
						href={"/"}
						className='wizeButton'>
						Back Home
					</Link>
				</div>
			</div>
		</div>
	);
};

export default MainNotfoundPage;
