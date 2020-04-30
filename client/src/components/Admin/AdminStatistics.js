import React, { Component } from "react";
import { Link } from "react-router-dom";
import Chart from "./AdminCharts"


export default class Statistics extends Component {
    constructor(){
        super();
        this.state = {
            chartData:{},
           
        };   
    }

    
     getChartData(){
        //ajax calls here
        this.setState({
            chartData: {
                labels: ['Sågning', 'Sprängning'],
                datasets:[
                    {
                        label: 'Timmar',
                        data:[
                            1,
                            1
                        ],
                     backgroundColor:[
                         'rgba(255, 99, 132, 0.6)',
                         'rgba(55, 9, 12, 0.6)'
                     ]
                    }
                ]
            }
        

        })
    }

    render() {

    return (
      <div>
          <h2>Blocks: </h2>
        <div className="MainMenu">
          
            <Chart chartData = {this.state.chartData}></Chart>
          <Link to="/AdminMainmenu" className="btn1">
            <button>Tillbaka</button>
          </Link>
          
        </div>
      </div>
    );
  }

  componentWillMount(){

    this.getChartData();
  }
}

