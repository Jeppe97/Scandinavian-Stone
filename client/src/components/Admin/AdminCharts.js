import React, {Component} from "react";
import {Bar, Line, Pie} from "react-chartjs-2"
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
                <Pie
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

                </Pie>
                <Line
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

                </Line>
            </div>
        )
    }

}

export default AdminCharts