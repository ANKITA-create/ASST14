import React from 'react'

const Login = (props) => {
	const {
		email,
		setEmail,
		password,
		setPassword,
		handleLogin,
		handleSignUp,
		hasAccount,
		setHasAccount,
		emailError,
		passwordError,
		setEmailError,
	} = props;

	return (
		<section className="login">
			<div className="loginContainer">
			<label>Username</label>
			<input 
			type="text"
			outofFocus
			required
			value={email}
			onChange={(e) => setEmail(e.target.value)}
			/>
			<p className="errormsg">{emailError}</p>
			<label>Password</label>
			<input 
			type="password"
			required
			value={password}
			onChange={(e) => setPassword(e.target.value)}
			/>
			<p className="errormsg">{passwordError}</p>
			<div className="btnContainer">
				if(hasAccount) (
				<>
					<button onClick={handleLogin}>Sign in</button>
				</>
				 
			)}
			</div>
			</div>		
		</section>
	)
}

export default Login;