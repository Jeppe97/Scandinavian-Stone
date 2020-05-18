import React, {Component} from "react";
import {Bar, Line, Pie} from "react-chartjs-2"
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {quarryChoice} from "./login/Login";

/* Presents the statistics for the quarry. The data is recived from a database*/

  class Statistics extends Component  {
   constructor(props)
   {
       super(props);
       this.state =  {
           chartData: props.chartData,
           loading: true,
           sawing : [],
           blasting :[],
           primarySawing:[],
           primaryBlasting:[],
           discSawing:[],
           discBlasting:[],
           blockSawing:[],
           blockBlasting:[]
           }
   }
   
    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: "right"
    }
//Methods used for reciving the data from tha database
    componentDidMount(){
      this.getDataSawing();
      this.getDataBlasting();
      this.getPrimarySawing();
      this.getPrimaryBlasting();
      this.getDiscSawing();
      this.getDiscBlasting();
      this.getBlockSawing();
      this.getBlockBlasting();
   
  }
/*Fetch the times from the current quarry where the method "Sawing" was used. 
(quarry choice is imported form the Login file)
fetch() is defined in the server.js file
The information is stored in the state array "Sawing"
*/
     getDataSawing (){
       fetch(`/gettimes?quarryName=${quarryChoice}&method=${'Sawing'}`)
       .then(res => res.json())
       .then(sawing => this.setState({ sawing },() => console.log(' sawing', sawing)))
   
     }

 //Fetch the times from the current quarry where the method "Blasting" was used
   getDataBlasting(){
       fetch(`/gettimes?quarryName=${quarryChoice}&method=${'Blasting'}`)
       .then(res => res.json())
       .then(blasting => this.setState({ blasting }, () => console.log(' blasting', blasting)))
      
   }
 //Fetch the times for all primary stones from this quarry where the method "Sawing" was used
   getPrimarySawing(){
     fetch(`/gettimesprimary?quarryName=${quarryChoice}&method=${'Sawing'}`)
     .then(res => res.json())
     .then(primarySawing => this.setState({ primarySawing }))
    
   }
//Fetch the data for all primary stones from this quarry where the method "Blasting" was used
   getPrimaryBlasting(){
     fetch(`/gettimesprimary?quarryName=${quarryChoice}&method=${'Blasting'}`)
     .then(res => res.json())
     .then(primaryBlasting => this.setState({ primaryBlasting }))
    
   }
//Fetch the times for all discs from this quarry where the method "Sawing" was used
   getDiscSawing(){
     fetch(`/gettimesdisc?quarryName=${quarryChoice}&method=${'Sawing'}`)
     .then(res => res.json())
     .then(discSawing => this.setState({ discSawing }))
    
   }
    //Fetch the times for all discs from this quarry where the method "Blasting" was used
   getDiscBlasting(){
     fetch(`/gettimesdisc?quarryName=${quarryChoice}&method=${'Blasting'}`)
     .then(res => res.json())
     .then(discBlasting => this.setState({ discBlasting }))
    
   }
    //Fetch the times for all blocks from this quarry where the method "Sawing" was used
   getBlockSawing(){
     fetch(`/gettimesblock?quarryName=${quarryChoice}&method=${'Sawing'}`)
     .then(res => res.json())
     .then(blockSawing => this.setState({ blockSawing }))
    
   }
    //Fetch the times for all blocks from this quarry where the method "Blasting" was used
   getBlockBlasting(){
     fetch(`/gettimesblock?quarryName=${quarryChoice}&method=${'Blasting'}`)
     .then(res => res.json())
     .then(blockBlasting => this.setState({ blockBlasting }))
    
   }

  methodTime(method){
      var time = method.reduce(function(prev, cur) {
          return prev + cur.time;
        }, 0);
      return (time);
  }
  
 //Renders the average time for a stone
  renderAverage = ({sideID,avgTime}) => <div key={sideID}>{avgTime}</div>
  //Renders the total time for a stone
  renderTotal = ({sideID,time}) => <div key={sideID}>{time}</div>
  

    render()
    {
      var {chartData} = this.state;
      var {sawing} = this.state;
      var {blasting} = this.state;
      var {primarySawing} = this.state;
      var {primaryBlasting} = this.state;
      var {discSawing} = this.state;
      var {discBlasting} = this.state;
      var {blockSawing} = this.state;
      var {blockBlasting} = this.state;
      var sawingTemp = this.methodTime(sawing);
      var blastingTemp = this.methodTime(blasting);

     //Uppdates the chart data with values from the database 
      chartData.datasets[0].data = [sawingTemp,blastingTemp]; 

        return(
            <div className="chart">
                <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          {/*Creates the rows with the the titles listed bellow
          The rows contains informatons about the times and methods for a primary stone*/}
          <TableRow>
            <TableCell>Metod (Primärblock)</TableCell>
            <TableCell align="right">Genomsnittstid i timmar (m^2)</TableCell>
            <TableCell align="right">total tid i timmar (månad)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key="1">
              <TableCell component="th" scope="row">
              Borrning och Sågning
              </TableCell>
               {/*Renders the average time and total time with the metods "Borrning och Sågning" for a primary stone */}
              <TableCell align="right">{primarySawing.map(this.renderAverage)}</TableCell>
              <TableCell align="right">{primarySawing.map(this.renderTotal)}</TableCell>
            </TableRow>
            <TableRow key="2">
            <TableCell component="th" scope="row">
            Borrning och Sprängning
              </TableCell>
             {/*Renders the average time and total time with the metods "Borrning och Spränging" for a primary stone */}
              <TableCell align="right">{primaryBlasting.map(this.renderAverage)}</TableCell>
              <TableCell align="right">{primaryBlasting.map(this.renderTotal)}</TableCell>
            </TableRow>
          </TableBody>
      </Table>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
          {/*Creates the rows with the the titles listed bellow
          The rows contains informatons about the times and methods for a disc*/}
            <TableCell>Metod (Skiva)</TableCell>
            <TableCell align="right">Genomsnittstid i timmar (m^2)</TableCell>
            <TableCell align="right">total tid i timmar (månad)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key="2">
              <TableCell component="th" scope="row">
              Borrning och Sågning
              </TableCell>
              <TableCell align="right">{discSawing.map(this.renderAverage)}</TableCell>
              <TableCell align="right">{discSawing.map(this.renderTotal)}</TableCell>
            </TableRow>
            <TableRow key="3">
            <TableCell component="th" scope="row">
            Borrning och Sprängning
              </TableCell>
              <TableCell align="right">{discBlasting.map(this.renderAverage)}</TableCell>
              <TableCell align="right">{discBlasting.map(this.renderTotal)}</TableCell>
            </TableRow>
          </TableBody>
      </Table>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
          {/*Creates the rows with the the titles listed bellow
          The rows contains informatons about the times and methods for a block*/}
            <TableCell>Metod (Block)</TableCell>
            <TableCell align="right">Genomsnittstid i timmar (m^2)</TableCell>
            <TableCell align="right">total tid i timmar (månad)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key="5">
              <TableCell component="th" scope="row">
              Borrning och Sågning
              </TableCell>
              <TableCell align="right">{blockSawing.map(this.renderAverage)}</TableCell>
              <TableCell align="right">{blockSawing.map(this.renderTotal)}</TableCell>
            </TableRow>
            <TableRow key="6">
            <TableCell component="th" scope="row">
            Borrning och Sprängning
              </TableCell>
              <TableCell align="right">{blockBlasting.map(this.renderAverage)}</TableCell>
              <TableCell align="right">{blockBlasting.map(this.renderTotal)}</TableCell>
            </TableRow>
          </TableBody>
      </Table>
    </TableContainer>
    
          {/*Displays total times for "Borrning och Sågning" and "Borrning och Sprängning*/}
                {/*A graph*/}
                <Line
                data={chartData}
                
                options={{
                    title: { 
                        display: this.props.displayTitle,
                        text: 'antal timmar sågning per månad',
                        fontSize: 25
                    },
                    legend:{ 
                        display: this.props.displayLegend,
                        position: this.props.legendPosition
                    }
                }}>

                </Line>
                {/*Pie chart*/}
                <Pie
                data={chartData}
                
                options={{
                    title: { 
                        display: this.props.displayTitle,
                        text: 'Andel per metod',
                        fontSize: 25
                    },
                    legend:{ 
                        display: this.props.displayLegend,
                        position: this.props.legendPosition
                    }
                }}>

                </Pie>

                {/*Bar chart*/}
                <Bar
                data={chartData}
                
                options={{
                    title: { 
                        display: this.props.displayTitle,
                        text: 'antal timmar per metod',
                        fontSize: 25
                    },
                    legend:{ 
                        display: this.props.displayLegend,
                        position: this.props.legendPosition
                    }
                }}>

                </Bar>
                
            </div>
        )
    }

}

export default Statistics;