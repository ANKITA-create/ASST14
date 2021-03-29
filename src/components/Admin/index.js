import React from 'react';

import {
	Container,
	FormWrap,
	Icon,
	FormContent,
	Form,
	FormH1,
	FormLabel,
	FormInput,
	FormButton,
	Text
} from './AdminElements';

// function shoot() {
//   buttonLink = './dashboard';
// }



const AdmIn = () => {

	
  return (
		<>
			<Container>
			<FormWrap>
				<Icon to='/'>Griham</Icon>
				<FormContent>
					<Form action='./dashboard'>
						<FormH1>Sign in to your account</FormH1>
						<FormLabel htmlFor='for'>Username</FormLabel>
						<FormInput type='username' required />
						<FormLabel htmlFor='for'>Password</FormLabel>
						<FormInput type='password' required />
						<FormButton type='submit' >Sign In</FormButton>
						<Text>Forgot password</Text>
					</Form>
				</FormContent>
			</FormWrap>
			</Container>

		</>
	);

};

export default AdmIn;