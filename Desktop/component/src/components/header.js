import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  render() {
    return (
      <div>
      <Toolbar style={{backgroundColor:"#ffffff",borderBottom:'1px soid #1f3b54'}}>
        <ToolbarGroup firstChild={true}>     
        </ToolbarGroup>
        <ToolbarGroup>  
          <RaisedButton style={{}} label="Andrew"/>
          <RaisedButton label="language"/>
          <RaisedButton label="logout"/>
        </ToolbarGroup>
      </Toolbar>
      </div>

    );
  }
};
