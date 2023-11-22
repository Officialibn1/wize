import Link from "next/link";
import React from "react";

const LoginForm = () => {
	return (
		<form>
			<legend>Login</legend>

			<label>
				<span>Email / Username</span>
				<input
					type='text'
					id='name'
				/>
			</label>

			<label>
				<span>Password</span>
				<input
					type='password'
					id='password'
				/>
			</label>

			<div>
				<label>
					<input
						type='checkbox'
						name='rememberMe'
						id='rememberMe'
					/>
					<span>Remember Me</span>
				</label>

				<p>Forgot Password?</p>
			</div>

			<button>Login</button>
			<p>
				Don&apos;t have an account ?<Link href={"/signup"}>Sign Up</Link>
			</p>
		</form>
	);
};

export default LoginForm;
