import React from 'react';
import AddUserForm from '../components/AddUserForm';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';



function UserPage() {
	return (
		<div className="row">
			<div className="col-md-8 offset-md-2">
			<AddUserForm /> 
			</div> 
		</div>
	);
}

export default UserPage;