import React, { useState,useEffect } from 'react'
// import AddUserForm from './AddUserForm';

import firebaseDb from "../firebase";
import {storage} from '../firebase';
import {Db} from '../firebase';

const defaultImageSrc = '/images/profile.jpg'
// const Db = firebaseDb.firestore();

const initialFieldValues = {
	flatid: '',
	kon: '',
	name: '',
	imageName:'',
	imageSrc:defaultImageSrc,
	imageFile: null
}
export default function AddUser() {

		

		const [values,setValues] = useState(initialFieldValues)
		const [fileUrl,setFileUrl] = useState(null)
		// const [AddUserObjects,setUserObjects] = useState([])
		
		

		const handleInputChange = e => {
			const {name,value} = e.target;
			setValues({
				...values,
				[name]:value
			})

			
	}


		const showPreview = async (e) => {
			if(e.target.files && e.target.files[0]) {
				let imageFile = e.target.files[0];
				const reader = new FileReader();
				reader.onload = x => {
					setValues({
						...values,
						imageFile,
						imageSrc: x.target.result
					})
				}
				reader.readAsDataURL(imageFile)
			}
			else{
				setValues({
						...values,
						imageFile:null,
						imageSrc: defaultImageSrc
					})
			}
		
			const file = e.target.files[0]
			const fileRef = storage.ref('images').child(file.name)
			await fileRef.put(file)
			setFileUrl(await fileRef.getDownloadURL())

			
        

		}

		
			
		


		const handleFormSubmit = e => {
		e.preventDefault();
		const name = e.target.name.value;
		const flatid = e.target.flatid.value;
		const kon = e.target.kon.value;
		
		if(!(name || flatid || fileUrl || kon)){
			return
		}	
		Db.collection("AddUser").doc(name,flatid,kon).set({
			name:name,
			flatid:flatid,
			kon:kon,
			avatar: fileUrl
		
		
		})
		// fileUrl = "";
		
		// document.getElementById("nav").reset();
		setValues(initialFieldValues);
		document.getElementById("kon").value = " ";
		document.getElementById("nav").value = null;
		document.getElementById("myForm").reset();
				
	}

		

		


	

		// useEffect(() => {
		// 	const fetchUsers = async () => {
		// 		const usersCollection = await Db.collection('AddUser').get()
		// 		setUserObjects(usersCollection.docs.map(doc => {
		// 			return doc.data()
		// 		}))
		// 	}
		// 	fetchUsers()
		// },[])

		
		return (
			<>
			
			<div className="container text-center">
				<p className="lead">Housing Society </p>
			</div>
			<form id = "myForm" autoComplete="off" noValidation onSubmit={handleFormSubmit} >
				<div className="card">
					<img src={values.imageSrc} className="card-img-top" />
					<div className="card-body">
						<div className="form-group">
					
							<input type="file" id="nav" accept="image/*" className="form-control-file" onChange={showPreview}  />
						</div>
						<div className="form-group">
							<input className="form-control" placeholder="Flat id" name="flatid"  onChange={handleInputChange} />
						</div>
						<div className="form-group">
							<input className="form-control" placeholder="Name" name="name"  onChange={handleInputChange} />
						</div>
						<select id= "kon">
  							<option selected value=" " />
  							<option value="resident">Resident</option>
  							<option value="staff">Staff</option>
  							
  							
						</select>

						
						<div className="form-group text-center">
							<button  value="Save"  className="btn btn-light">Submit</button>
							
						</div>
						</div>
					</div>
					</form>
						
			 			

					
				
			</>
		)

}
