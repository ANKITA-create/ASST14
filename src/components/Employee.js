import React,{ useState,useEffect} from 'react'
import firebaseDb from '../firebase';
import {storage} from '../firebase';
import {Container,FormButton,FormButton1,FormButton2} from './CResident';


class Employee extends React.Component {

	  constructor(props) {

    	super(props);
    	this.state = {
      	Img_Link: '',
        url:'',
      	name: '',
      	temperature: '',
      	timestamp: '',
        nav: '',
        allow: 0,
        deny: 0
      	
    	}
    		  this.handleChange = this.handleChange.bind( this );
        	this.handleAllow = this.handleAllow.bind( this );
        	this.handleDeny = this.handleDeny.bind( this );
    	
  	}


	handleRetrieve = () => {
        // complete function ...
       // var
        firebaseDb.ref('Request').on('value',function(snapshot) {
          document.getElementById('nav').src = snapshot.val()?.Img_Link;
        })
      } 
        
       

      	handleChange(e) {
        	this.setState({
            nav: e.target.value,
            // name: e.target.value,
            // temperature: e.target.value,
            // timestamp: e.target.value

        });
        }

  componentDidMount() {
		  firebaseDb.ref('Request')
  			.once('value')
  			.then(snapshot => {
    		
    		var name = snapshot.val().Name;
    		var temperature = snapshot.val().Temperature;
    		var timestamp = snapshot.val().Timestamp;
        
			document.getElementById("name").innerHTML =name;
      document.getElementById("temperature").innerHTML =temperature;
			document.getElementById("timestamp").innerHTML =timestamp;
      

		});
}

		
        	handleAllow = (e) => {
        firebaseDb.ref('Servo').set(1);
  			this.setState({nav:""});
          document.getElementById("name").innerHTML = "";

			// document.getElementById("name_img").innerHTML =name_img;
        document.getElementById("nav").src = null;
				document.getElementById("temperature").innerHTML = " ";
				document.getElementById("timestamp").innerHTML = "";

        var allow: 1;
        console.log(allow);


}

	handleDeny = (e) => {
			   firebaseDb.ref('Servo').set(0);
      		this.setState({nav: ""});
          document.getElementById('nav').src = null;
          document.getElementById("name").innerHTML = "";

			// document.getElementById("name_img").innerHTML =name_img;
      document.getElementById("temperature").innerHTML = " ";
			document.getElementById("timestamp").innerHTML = "";

      var deny: 1;
      console.log(deny);
};

	render(){
		    const style = {
      		height: '100vh',
     	 	  display: 'flex',
      		flexDirection: 'column',
      		alignItems: 'center',
      		marginLeft: 'auto',
      		justifyContent: 'center'

    };

	return ( 
		<>
		  <Container>
		  <div
        	style={{
          	display: "flex",
          	margin: 'center',
          	justifyContent: "center",
          	alignItems: "center",
          

        }}>

		  <center>
          <FormButton2
          onClick={this.handleRetrieve}
          
          
        >
          Click here
        </FormButton2>
        <br />
        <br />
        
        <img id="nav"

          src={this.state.nav || 'https://via.placeholder.com/400x300'}
          // alt="Uploaded Images"
          height="300"
          width="400"
          onChange={ this.handleChange } value={ this.state.nav }
        />
        
        	
      <p>Name: <strong id="name" onChange={ this.handleChange } value={ this.state.name }></strong></p>
			<p>Temperature: <strong id="temperature" onChange={ this.handleChange } value={ this.state.temperature }></strong></p>
			<p>Timestamp: <strong id="timestamp" onChange={ this.handleChange } value={ this.state.timestamp }></strong></p>
			
		<br />
		<br />
		
		<FormButton onClick={this.handleAllow} >Allow</FormButton>
		&nbsp;&nbsp;&nbsp;
		<FormButton1 onClick={this.handleDeny} >DENY</FormButton1>
		</center>
		</div>
		</Container>
	</>
)
}
};

export default Employee;