import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { StyledInput }  from './components/styledInput';
import {ShowInfo} from './components/dashborad/track_add';
//import ListExampleNested from './components/siderbar';
import {EditProfile} from './components/dashborad/edit_profile';
import ToolbarHeader from './components/header';
import Siderbar from './components/siderbar';
import TableExampleControlled from './components/dashborad/latest_list';
import { Grid, Row, Col } from 'react-flexbox-grid';

class App extends Component {
  render() {
    return (
      <div>   
         <ToolbarHeader/>     
        <Grid fluid>
          <Row>
            <Col xs={2}>
              <Siderbar/>
            </Col>
            <Col xs={10}>
              <EditProfile/>
            </Col>
          </Row>
          <Row>
            <Col xsOffset={2}></Col>
            
          </Row>
        </Grid> 
       

      </div>
    );
  }
}

export default App;
