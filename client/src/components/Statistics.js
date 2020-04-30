import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Statistics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataTest:[]
         };
    }
    
    componentDidMount() {
        this.getData();
    }
    //testing to fetch from a procidure
    getData(){
        fetch('/gettest')
        .then(response => response.json())
        .then(dataTest=>this.setState({ dataTest}, () => console.log('data sawing', dataTest)))
        .catch(err => console.error(err))
    }
    renderTime = ({sideID,time}) => <div key={sideID}>{time}</div>
    
    render() {
        const {dataTest} = this.state
       
       
        return (
            <div>
                <div className="MainMenu">
                 <h1>STATS</h1>
              
                   <div>
                    {dataTest.map(this.renderTime)}
                   
                   </div>
                   
                    <Link to="/mainmenu" className="btn1">
                        <button>Tillbaka</button>
                    </Link>
                </div>
            </div>
        )
    }
}
function refreshPage() {
    window.location.assign("/");
}