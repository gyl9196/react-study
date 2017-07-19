import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Qrcode from './download.png';
import {Card, CardTitle,CardActions, CardHeader, CardText} from 'material-ui/Card';

const DashboardTable = () =>(
    <div>
    <Card>
        <CardTitle title='Completed Event' titleStyle={{fontWeight:'bold'}}/>
        <CardText style={{marginBottom:'30px',fontSize:'18px'}}>Completed events in the last 30 days.</CardText>
        <Table selectable={true}>
        <TableRow>

        </TableRow>
        <TableBody displayRowCheckbox={false} >
        <TableRow > 
            <TableRowColumn style={{fontSize:'18px'}}>Date Comleted</TableRowColumn>
            <TableRowColumn style={{fontSize:'18px'}}>Product Name</TableRowColumn>
            <TableRowColumn style={{fontSize:'18px'}}>Destination</TableRowColumn>
            <TableRowColumn style={{fontSize:'18px'}}>QR Code</TableRowColumn>
        </TableRow>
        <TableRow>
            <TableRowColumn style={{fontSize:'18px'}}>11-March-2017</TableRowColumn>
            <TableRowColumn style={{fontSize:'18px'}}>Baby Formula</TableRowColumn>
            <TableRowColumn style={{fontSize:'18px'}}>China</TableRowColumn>
            {/*please consider to change the size of the QR code image*/}
            <TableRowColumn style={{fontSize:'18px'}}><img src={Qrcode} style={{height:'100%',margin:'auto !important'}}/></TableRowColumn>            
        </TableRow>


        <TableRow>
            <TableRowColumn style={{fontSize:'18px'}}>11-March-2017</TableRowColumn>
            <TableRowColumn style={{fontSize:'18px'}}>Baby Formula</TableRowColumn>
            <TableRowColumn style={{fontSize:'18px'}}>China</TableRowColumn>
            {/*please consider to change the size of the QR code image*/}
            <TableRowColumn style={{fontSize:'18px'}}><img src={Qrcode} style={{height:'100%',margin:'auto !important'}}/></TableRowColumn>            
        </TableRow>
        <TableRow>
            <TableRowColumn style={{fontSize:'18px'}}>11-March-2017</TableRowColumn>
            <TableRowColumn style={{fontSize:'18px'}}>Baby Formula</TableRowColumn>
            <TableRowColumn style={{fontSize:'18px'}}>China</TableRowColumn>
            {/*please consider to change the size of the QR code image*/}
            <TableRowColumn style={{fontSize:'18px'}}><img src={Qrcode} style={{height:'100%',margin:'auto !important'}}/></TableRowColumn>            
        </TableRow>


        
        </TableBody>
    </Table>
    </Card>
    </div>

);

export default DashboardTable;