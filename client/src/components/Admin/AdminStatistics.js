import React, { Component } from "react";
import { Link } from "react-router-dom";
import Chart from "./AdminCharts"


export default class AdminStatistics extends Component {
    constructor(){
        super();
        this.state = {
            chartData:{}
        }
    }

    componentWillMount(){
        this.getChartData();
    }
    
    getChartData(){
        //ajax calls here
        this.setState({
            chartData: {
                labels: ['Borrning och Sågning', 'Borrning och Sprängning'],
                datasets:[
                    {
                        label: 'Timmar',
                        data:[
                            3134,
                            
                            3234
                        ],
                     backgroundColor:[
                         'rgba(255, 99, 132, 0.6)',
                         
                         'rgba(205, 59, 232, 0.6)'
                     ]
                    }
                ]
            }
        

        })
    }
    render() {
    return (
      <div>
        <div className="MainMenu">
          
            <Chart chartData={this.state.chartData}></Chart>
          <Link to="/AdminMainmenu" className="btn1">
            <button>Tillbaka</button>
          </Link>
          
        </div>
      </div>
    );
  }
}

