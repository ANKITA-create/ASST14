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
} from './SigninElements';
const SignIn = () => {
	return (
		<>
			<Container>
			<FormWrap>
				<Icon to='/'>Griham</Icon>
				<FormContent>
					<Form action='#'>
						<FormH1>Sign in to your account</FormH1>
						<FormLabel htmlFor='for'>User_id</FormLabel>
						<FormInput type='userid' required />
						// <FormLabel htmlFor='for'>FlatId</FormLabel>
						// <FormInput type='flatid' required />
						<FormLabel htmlFor='for'>Password</FormLabel>
						<FormInput type='password' required />
						<FormButton type='submit'>Submit</FormButton>
						<Text>Forgot password</Text>
					</Form>
				</FormContent>
			</FormWrap>
			</Container>

		</>
	);
};

export default SignIn;