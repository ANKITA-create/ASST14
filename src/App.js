import React from 'react';

import './App.css';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
//import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home  from './pages';

import SignupPage from './pages/signup';
import AdminPage from './pages/admin';
import DashboardPage from './pages/dashboard';
import Requests from './pages/Requests'
import ResidentPage from './pages/residents'
import firebaseDb from './firebase';

let firstTime = true

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ipdate: ''

     }
    }

  componentDidMount () {
   var dbRef = firebaseDb.ref('Request')
   dbRef.on('value', gotData, gotErr)

   function gotData(value) {
      show(firstTime)
      firstTime = false
   }


 function gotErr() {
    console.log("error")
   }
 
   var dbRef1 = firebaseDb.ref('Temp')
   dbRef1.on('value',snap => {
   this.setState({
      ipdate : snap.val()['cel'],
     });
    if(this.state.ipdate > 39){
      show1();
      console.log("successful")
    }
    else {
      console.log('sorry');
    }
   })  
       
        function show() {
        if(!firstTime) {
        Notification.requestPermission(function(result) {
        console.log('Notification permission status inside show notification:', result);
          

        if (result === 'granted') {

          
          navigator.serviceWorker.ready.then(function(registration) {
            
            registration.showNotification('Knock Knock ');
          });
        }
      
      });
    }
}


function show1() {
        if(!firstTime) {
        Notification.requestPermission(function(result) {
        console.log('Notification permission status inside show notification:', result);
          

        if (result === 'granted') {

          
          navigator.serviceWorker.ready.then(function(registration) {
                        
            registration.showNotification('High Temperature is detected ');
          });
        }
      
      });
    }
}
}
  // componentDidMount () {
  //  var dbRef = firebaseDb.ref('Request')
  //  dbRef.on('value', gotData, gotErr)

  //  function gotData(value) {
  //     showNotification(firstTime)
  //     firstTime = false
  //  }

  //  function gotErr() {
  //   console.log("error")
  
  //  }
   
        
      
  //     function showNotification(){

  //       if (!firstTime) {
  //       const notification = new Notification('Request notification',{
  //         body: "Someone wants to visit you ",
  //         icons: "https://image.flaticon.com/icons/png/512/2172/2172818.png"
  //       });
      
  //       notification.onClick = e => {
  //         window.location.href = "./residents";
  //       }
  //     }
  //     }
      // console.log(Notification.permission);
      // if(Notification.permission === 'granted'){
      //   showNotification();
      // }
      // else if(Notification.permission !== 'denied') {
      //   Notification.requestPermission().then(permission => {
      //     if(permission === 'granted'){
      //       showNotification();  
      //     }
       

      //   });
      // }
  // }
  




 

  render(){
  return (
  		<Router>
  			<Switch>
				<Route path='/' component={Home}  exact />
  				
  				<Route path='/signup' component={SignupPage} exact />
  				<Route path='/admin' component ={AdminPage} exact/>
          <Route path='/dashboard' component={DashboardPage} exact/>
        
          <Route path='/residents' component={ResidentPage} />
          
          </Switch>
        </Router>
    
  );
}
};

export default App;
