import firebaseDb from './firebase';


  componentDidMount () {
   if(firebaseDb.ref('Request').once('value', function(snapshot) {
          console.log(snapshot.val());
        })
        )
      {
      showNotification();
      }

      function showNotification(){
        const notification = new Notification('Request notification',{
          body: "you have got new request notification",
          icons: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fisolated-friend-request-icon-on-a-white-background-vector-25560625&psig=AOvVaw0TheQlRiQFWLWue5Q-3OYE&ust=1615863528148000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjQ5oqnse8CFQAAAAAdAAAAABAJ"
        });
      
        notification.onClick = e => {
          window.location.href = "https://localhost:3000/residents";
        }

      }
      // console.log(Notification.permission);
      // if(Notification.permission === 'granted'){
      //   showNotification();
      // }
      // else if(Notification.permission !== 'denied') {
      //   Notification.requestPermission().then(permission => {
      //     if(permission === 'granted'){
      //       showNotification();  
      //     }
       // 

      //   });
      // }
  }
  

