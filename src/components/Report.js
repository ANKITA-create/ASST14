import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
//Calling Firebase config setting to call the data


import firebaseDb from '../firebase';

class Report extends React.Component {
    
constructor(props) {
    
    super(props);
   
    this.state = {input : []}
    }
    
  componentDidMount() {



    
   
     
      firebaseDb.ref("EOD").on("value", snapshot => {
        let details = [];
        snapshot.forEach(snap => {
            // snap.val() is the dictionary with all your keys/values from the 'students-list' path
            details.push(snap.val());
        });
        this.setState({ input: details });
      });
    
    
 }
  
  render(){
   
  return (
            // <div className="row">
            //   <div className="col-md-12">
            //     <div class="jumbotron jumbotron-fluid py-4">
        <div class="container">
        
        <h1 class="display-4 text-center">Report</h1>
          
              <table id="example" class="display table">
            <thead class="thead-dark">
                <tr>
                    <th>Timestamp</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Flat Number </th>
                    <th>Temperature</th>
                    <th>Image</th>
                    
                </tr>
            </thead>
            <tbody>
            {this.state.input.map(data => {
                
                return (
                    <tr> 
                    <td>{data.Timestamp}</td>
                    <td>{data.Name}</td>   
                    <td>{data.Category}</td>
                    <td>{data.Flat_Id}</td>
                    <td>{data.Temperature}</td>
                    <td> <img src={data.Img_Link} /> </td>
                    </tr>
                    
                );
               
                })}
        
               
            </tbody>
            
         </table>
          

    
    </div>
  );
}
}
export default Report;
