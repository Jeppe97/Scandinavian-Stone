import React, {Component} from "react";
import {Bar, Line, Pie} from "react-chartjs-2"
import {quarryChoice} from "./AdminQuarryButton"

class AdminCharts extends Component  {
   constructor(props)
   {
       super(props);
       this.state =  {
           chartData: props.chartData,
           loading: true,
           sawing : [],
           blasting :[]
        }

    }
    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: "right"
    }

    getDataSawing(){
        fetch(`/gettimes?quarryName=${quarryChoice}&method=${'Sawing'}`)
        .then(res => res.json())
        .then(sawing => this.setState({ sawing }, () => console.log(' sawing', sawing)))
        
    }
    getDataBlasting(){
        fetch(`/gettimes?quarryName=${quarryChoice}&method=${'Blasting'}`)
        .then(res => res.json())
        .then(blasting => this.setState({ blasting }, () => console.log('blasting', blasting)))
        
    }
    componentDidMount(){
        this.getDataSawing();
        this.getDataBlasting();
    }


    methodTime(method){
        var time = method.reduce(function(prev, cur) {
            return prev + cur.time;
          }, 0);
        return (time);
    }
   
    render()
    {
        var {chartData} = this.state;
        var {sawing} = this.state;
        var {blasting} = this.state;

        var sawingTemp = this.methodTime(sawing);
        var blastingTemp = this.methodTime(blasting);
     
        chartData.datasets[0].data = [sawingTemp,blastingTemp]; 
     
        return(
            
            <div className="chart">
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
                <Pie
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

                </Pie>
                <Line
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

                </Line>
            </div>
        )
    }

}

export default AdminCharts