import React from 'react'
import firebaseDb from '../firebase'
import Video from '../videos/panic.mp3';
import 'bootstrap/dist/css/bootstrap.min.css';

let firstTime = true
class Notify extends React.Component {
  constructor(props) {

      super(props);
      this.state = {
        Email: '',
        Flatno: '',
        Phone: '',
        ipdate: ''
      }
    }

	componentDidMount() {
	// firebaseDb.ref('Alert').on('value',(snap)=>{
 //    console.log(snap.val());
 // });
 	
  firebaseDb.ref('Notify')
        .once('value')
        .then(snapshot => {
        
        var Name = snapshot.val().name;
        var Email = snapshot.val().email;
        var Flatno = snapshot.val().flatid;
        var Phone = snapshot.val().phone;
        
      document.getElementById("Name").innerHTML =Name;
      document.getElementById("Email").innerHTML =Email;
      document.getElementById("Flatno").innerHTML =Flatno;
      document.getElementById("Phone").innerHTML =Phone;
    });

   // var dbRef = firebaseDb.ref('Alert')
   // dbRef.on('value', gotData, gotErr)

   // function gotData(value) {
   //    show(firstTime)
   //    console.log("success")
   //    firstTime = false
   // }

   // function gotErr() {
   //  console.log("error")
   // }

   // var x = document.getElementById("myAudio"); 
   // function show() {
   // 		if(!firstTime)
   //    	x.play();
   //  	console.log("yeahhhh")

      
   //  }

   

   var dbRef1 = firebaseDb.ref('Alert')
        dbRef1.on('value',snap => {
        this.setState({
            ipdate : snap.val()['value'],
            
        });
        if(this.state.ipdate == 1){
            show();
            console.log("successful")
        }
        else {
            console.log('sorry');
        }
        })

        var x = document.getElementById("myAudio"); 
        function show() {
         
         x.play();
         console.log("yeahhhh")
    }
}    

  



	render() {
    

	return (
    <div>
    <div className="container text-center my-5" >
      <div className="row">
        <div className="col-sm-4">
            <div className="jumbotron jumbotron-fluid py-4"> 
            <div className=" text center card" >
            <div className="card-body">
            <h5 className="card-title text-danger">Alert</h5>
            <p className="card-text">Please contact the resident urgently</p>

            <p>Name: <strong id="Name" value={ this.state.Name }></strong></p>
            <p>Email: <strong id="Email" value={ this.state.Email }></strong></p>
            <p>Flat-No: <strong id="Flatno" value={ this.state.Flatno }></strong></p>
            <p>Phone: <a href= "#"  id="Phone"  value={ this.state.Phone }></a></p>
          </div>
         </div>
          </div>
        </div>
        </div>
        </div>
			
      <audio id="myAudio">
        <source src={Video} type="audio/mp3" />
 			</audio>
    </div>

	)
}
}
export default Notify