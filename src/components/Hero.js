import React from 'react'
import EmployeeList from './EmployeeList'
// import Video from '../videos/panic.mp4';
import firebaseDb from '../firebase'
import {auth} from '../firebase';
import {Db} from '../firebase';
import Swal from 'sweetalert2'
const Hero = ({handleLogout}) => {
  
  const handleAlert = async () =>{
         firebaseDb.ref('Alert').update({value : 1});
    
    
    Swal.fire({
      title: 'Security Alert',
      text: "The message has been sent to security",
      type: 'warning',
      
    
    })

    if (auth.currentUser !== null) 
      var userid = auth.currentUser.uid
      console.log("userid: " + auth.currentUser.uid);
      
    // let user = auth.currentUser;    
    // console.log(user);
    // if (user) {
    //     console.log(Db.collection("users").doc(user.uid))
    // } else {
    //     console.log('user not logged in')
    // }

    var userId = (await auth.currentUser.uid);
    Db.collection('users').doc(userId);
    console.log("userId: " + userId);

    if(userid == userId) {
      console.log("good to go");
      var info = Db.collection('users').doc(userId);
      var doc = await info.get();
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        var good = doc.data()
      console.log('Document data:', doc.data());

        firebaseDb.ref("Notify").update(good);
      }



    }

    

}



	
	return (
		<section className="hero">

			<nav>
		
			<button onClick={handleAlert}><img src="images/icons/alert1.png" /></button>
      
			
			<button onClick={handleLogout}>Logout</button>
			</nav>			
			<EmployeeList />
		</section>

	)
}

export default Hero