import React, { Component } from 'react';
import Header from '../components/header';
import Siderbar from '../components/siderbar';
import log from './logo.svg';
import DashboardCard from '../components/dashboard/card';
import DashboardTable from '../components/dashboard/dataTable'
import Words from '../constant/word'

export default class Dashboard extends Component {
  render() {
    return (
      <div>   
        <Header/>
        <Siderbar/>
        <div style={{paddingLeft:'300px'}}>
            <p>{Words.Dashboard}</p>    
            <h2>TBSx3 Control Dashboard</h2>
            <div style={{paddingRight:'80px'}}>
                <DashboardCard/> 
            </div>  
            <div style={{marginTop:'80px',paddingRight:'80px'}}>
                <DashboardCard/> 
            </div> 
            <div style={{marginTop:'80px',paddingRight:'80px'}}>
                 <DashboardTable/>  
            </div> 
            
                   
        </div>
       
      </div>
    );
  }
};