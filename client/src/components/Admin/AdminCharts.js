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
{/* Denna funktion används för att skapa tabellen*/}
function createData(metod, average, total) {
    return { metod, average, total};
  }
  {/* Detta är testdata som används för att kolla om tabellerna */}
  const rows = [
        createData('borrning och sågning', 15.9, 3010),
        createData('borrning och Sprängning', 26.2, 3250),
      ];
  class AdminCharts extends Component  {
   constructor(props)
   {
       super(props);
       this.state =  {
           chartData: props.chartData,
           loading: true
           }
   }
   
    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: "right"
    }

    

    
    render()
    {
        return(
            <div className="chart">
                <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Metod (Primärblock)</TableCell>
            <TableCell align="right">Genomsnittstid i timmar (m^2)</TableCell>
            <TableCell align="right">total tid i timmar (månad)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.metod}
              </TableCell>
              <TableCell align="right">{row.average}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Metod (Skiva)</TableCell>
            <TableCell align="right">Genomsnittstid i timmar (m^2)</TableCell>
            <TableCell align="right">total tid i timmar (månad)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.metod}
              </TableCell>
              <TableCell align="right">{row.average}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Metod (Block)</TableCell>
            <TableCell align="right">Genomsnittstid i timmar (m^2)</TableCell>
            <TableCell align="right">total tid i timmar (månad)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.metod}
              </TableCell>
              <TableCell align="right">{row.average}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                <Line
                data={this.state.chartData}
                
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
                <Pie
                data={this.state.chartData}
                
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
                <Bar
                data={this.state.chartData}
                
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

export default AdminCharts