import React,{useState,useEffect} from 'react';
import Daily from '../components/Daily'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './dashboard.css';
import Bar from '../components/Bar'
import Activity from './Activity'
import Requests from './Requests'
import user from './user';
const DashboardPage = () => {
	
  return (
    <>
    
    <Router>
        
        <Bar />
        <Switch>
          
          <Route path='/activity' exact component={Activity} />
           <Route path='/user' component={user} />
           <Route path='/request' component={Requests} />
          <Daily />
        </Switch>
        </Router>
           
		</>
	);
};

export default DashboardPage;