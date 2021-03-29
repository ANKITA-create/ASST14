import React, { useState,useEffect } from 'react';
import firebaseDb from "../firebase";
import {storage} from '../firebase';
import {Db} from '../firebase';
export default function Daily() {
	const [AddUserObjects,setUserObjects] = useState([])

	useEffect(() => {
			const fetchUsers = async () => {
				const usersCollection = await Db.collection('AddUser').get()
				setUserObjects(usersCollection.docs.map(doc => {
					return doc.data()
				}))
			}
			fetchUsers()
		},[])

	return (
		<>
		<center>
		<div className= "col-md-8">
						<div>list of residents</div>
					</div>
					<div className="col-md-7">
						<table className="table table-borderless table-stripped">
				
					<thead className="thead-light">
						<tr>
							
							
							<th>Flat no</th>
							<th>Name</th>
							<th>Image</th>
							
						</tr>
					</thead>
					<tbody>
						{
							Object.keys(AddUserObjects).map(id => {
								return <tr key={id}>
									<td>{AddUserObjects[id].flatid}</td>
									<td>{AddUserObjects[id].name}</td>
									<td><img width="100" height="100" src={AddUserObjects[id].avatar} alt={AddUserObjects[id].name} /></td>
								</tr>
							})
						}
					</tbody>
				</table>
			</div>	
		</center>
		</>
	)
}
