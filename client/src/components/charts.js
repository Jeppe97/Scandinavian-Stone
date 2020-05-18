import React, { Component } from 'react';
import {Bar, Pie, Line} from 'react-chartjs-2';


class Chart extends Component{
    constructor(props){
super(props);

this.state={
    charData:{
        labels:['Boston', 'Worcetser', 'Springfield',
    'Lowell', 'Cambridge','New Beford'], 

    datasets:[

        {
            label: 'Population',

            data:[
                617594,
                181045,
                153060,
                106519,
                105162,
                95072
            ],

            backroundColor:['blue',
        'pink',
        'purple',
         'yellow',
        'green',
    'orange',
     'black']
        }

    ]

    }
}

    }

render(){
    <div className="chart">

<Bar
  data={this.state.chartData}

  options={{ maintainAspectRatio: false }}
/>

    </div> 
}
}

export default Chart;
