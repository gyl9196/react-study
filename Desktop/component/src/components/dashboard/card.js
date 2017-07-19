import React from 'react';
import {Card, CardTitle,CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const DashboardCard = () => (

  <div>
    <Card>   
      <CardTitle title='Track Event' style={{marginBottom:'50px'}} titleStyle={{fontWeight:'bold'}}/>
      <CardText style={{fontSize:'20px',marginRight:'0px'}}>
        <span style={{marginRight:'600px'}}>You currently have no products in transit. </span>
        <FlatButton style={{color:'green',border:'1px solid green'}} label="set up new package to track" />
      </CardText>
     
    </Card>
  </div>
  
);

export default DashboardCard;