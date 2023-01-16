const LoginFormPage = () => {
	return (
		<div className='loginPanel'>
			<label htmlFor=''>
				Login
				<input type='text' placeholder='Write your login' />
			</label>
			<label htmlFor=''>
				Password
				<input type='password' placeholder='Write your password' />
			</label>
			<button>Log in</button>
		</div>
	);
};

export default LoginFormPage;
