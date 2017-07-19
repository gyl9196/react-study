import React, { Component } from 'react';
import Header from '../components/header';
import Siderbar from '../components/siderbar';
import log from './logo.svg';
import Words from '../constant/word';
import {SearchModule} from '../components/searchButton';

export default class Dashboard extends Component {
  render() {
    return (
      <div>   
        <Header/>
        <Siderbar/>
        <div style={{paddingLeft:'300px'}}>
            <p>{Words.Company}</p>    
            <h2>Company Administration</h2>
            <div style={{paddingRight:'80px'}}>
              <SearchModule/>
            </div>  
            
            
                   
        </div>
       
      </div>
    );
  }
};