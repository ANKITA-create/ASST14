import React from 'react'

const Register = ({handleSignup}) => {
	return (
		<section className="hero">

			<nav>
			<h2>Welcome</h2>

			<button onClick={handleSignup}>Sign up</button>
			</nav>			
			
		</section>
	)
}

export default Register;