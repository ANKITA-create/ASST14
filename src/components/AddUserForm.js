import React,{ useState,useEffect } from 'react'
import AddUser from './AddUser'
import firebaseDb from "../firebase";
import {storage} from '../firebase';

export default function AddUserForm() {

	// var [AddUserObjects,setAddUserObjects] = useState({})
	// useEffect(() => {
	// 	firebaseDb.ref().child('AddUser').on('value',snapshot => {
	// 		if(snapshot.val()!=null)
	// 			setAddUserObjects({
	// 				...snapshot.val()
	// 			})
	// 	})
	// },[])

	// 	const addOrEdit = obj => {
	// 	firebaseDb.ref().child('AddUser').push(
	// 		obj,
	// 		err => {
	// 			if (err)
	// 				console.log(err);
	// 		}
	// 		)
	// }


	return (
		// <div className="row">
		// 	<div className="col-md-12">
		// 		<div class="jumbotron jumbotron-fluid py-4">
		// 			<div class="container">
		// 			<h1 class="display-4 text-center">AddUser</h1>
		// 		</div>
		// 	</div>
		// </div>
			<center>
			<div className="col-md-4">
				<AddUser />
			</div>
			</center>
	
		

		
	)

}