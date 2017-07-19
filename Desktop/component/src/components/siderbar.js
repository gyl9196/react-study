import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import logo from '../tbsx3-4.png';

export default class Siderbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  render() {
    return (

      <div style={{ margin: '30px' }}>
        <Drawer style={{magin_top:'30px'}}>
          <img src={logo} style={{height:'15%', margin:'20px'}}/>
          <List>
            <ListItem 
            primaryText="Dashboard"           
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
                <ListItem
                  key={1}
                  primaryText="Edit Profile"
                />
            ]}                      
            />
            <ListItem 
            primaryText="Administration" 
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
                <ListItem
                  key={1}
                  primaryText="Manage Users"
                />,
                <ListItem
                  key={2}
                  primaryText="Manage Roles"    
                />,
                <ListItem
                  key={3}
                  primaryText="System Version"                  
                />
            ]}          
             />   
            <ListItem 
            primaryText="Company"          
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
                <ListItem
                  key={1}
                  primaryText="Company Profile"                 
                />,
                <ListItem
                  key={2}
                  primaryText="Manage Team"          
                />
            ]}          
            /> 
            <ListItem 
            primaryText="Products" 
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
                <ListItem
                  key={1}
                  primaryText="Manage Products"
                />,
                <ListItem
                  key={2}
                  primaryText="Manage Packaging"
                />,
                <ListItem
                  key={3}
                  primaryText="Manage Packaging Type"
                />
            ]}          
            />
            <ListItem 
            primaryText="Tracking" 
            initiallyOpen={false}
            primaryTogglesNestedList={false}
            />
          </List>
        </Drawer>
      </div>
    );
  }
}