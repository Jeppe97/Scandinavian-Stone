import React, {Component} from "react";
import {Bar, Line, Pie} from "react-chartjs-2"


class AdminCharts extends Component  {
   constructor(props)
   {
       super(props);
       this.state =  {
           chartData: props.chartData,
           loading: true,
           blocksawing : [],
           blockblasting :[]
        }

    }
    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: "right"
    }

    componentDidMount(){
        this.getDatabaseDataSawing();
        this.getDatabaseDataBlasting();
    }

    
    getDatabaseDataSawing(){
        fetch('/getblocksidesawing')
        .then(res => res.json())
        .then(blocksawing => this.setState({ blocksawing }, () => console.log('blocks sawing', blocksawing)))
        
    }

    getDatabaseDataBlasting(){
        fetch('/getblocksideblasting')
        .then(res => res.json())
        .then(blockblasting=> this.setState({ blockblasting }, () => console.log('blocks blasting', blockblasting)))
        
    }
    //sum the times from a table in the database 
    getMethodTimes(method){
        var time = method.reduce(function(prev, cur) {
            return prev + cur.time;
          }, 0);
        return (time);
    }

   
    render()
    {
        var {chartData} = this.state;
        var {blocksawing} = this.state;
        var {blockblasting} = this.state;

        var sumTimeSawing = this.getMethodTimes(blocksawing);
        var sumTimeBlasting = this.getMethodTimes(blockblasting);

        // assignes the first element in data array ( sawing )
        chartData.datasets[0].data[0] = sumTimeSawing; 
        chartData.datasets[0].data[1] = sumTimeBlasting;
        console.log(chartData.datasets[0].data[1] + "chart data for blasting");
   

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