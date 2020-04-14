import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Statistics extends Component {
    state = {
        quarrys: [],
        quarry: {
            quarryName:'sample'
        }
    }
    
    componentDidMount() {
       this.getQuarry();
    }

    getQuarry = _ =>{
        fetch('/quarry')
        .then(response => response.json())
        .then(response=>this.setState({ quarrys: response.data}))
        .catch(err => console.error(err))

    }

    addQuarry = _ =>{
        const {quarry} = this.state;
        fetch(`/quarry/instert?quarryName=${quarry.quarryName}`)
       // .then(response => response.json())
        .then(this.getQuarry)
        .catch(err => console.error(err))
    }
 

    renderQuarry = ({quarryName}) => <div>{quarryName}</div>

    
    render() {
        const { quarrys, quarry } = this.state;
        return (
            <div>
                <div className="MainMenu">
                 <h1>STATS</h1>
                    {quarrys.map(this.renderQuarry)}

                    <div>
                        <input 
                            value={quarry.quarryName} 
                            onChange={e => this.setState({quarry: {...quarry, quarryName: e.target.value}})}
                            />
                        <button onClick={this.addQuarry}> Add quarry </button>
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

