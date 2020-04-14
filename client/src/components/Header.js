import React, { Component } from 'react'
import './styles/Header.scss';
import Auth from './login/auth';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quarrys: [],
            isAuth: Auth.authenticated
        }
    }

   /* componentDidMount() {
        fetch('/quarry')
            .then(res => res.json())
            .then(quarry => this.setState({ quarry }, () => console.log('Quarry name fetched', quarry)));
    }*/

    componentDidMount() {
        this.getQuarry();
     }
 
     getQuarry = _ =>{
         fetch('/quarry')
         .then(response => response.json())
         .then(response=>this.setState({ quarrys: response.data}))
         .catch(err => console.error(err))
 
     }

    updateAuth() {
        this.setState({isAuth: Auth.authenticated});
    }

    renderQuarry = ({quarryName}) => <div>{quarryName}</div>

    render() {
        const { quarrys } = this.state;
        var quarryName = this.state.quarrys.map((quarrys) => quarrys.quarryName);
      

       /* var test = "heej";

        if (Auth.authenticated === true) {
            
            quarryName = "Inloggad";
        }
        else if(Auth.authenticated === false){
            test;
        }
*/
      
        return (
            
            <div className="Header">
                {quarrys.map(this.renderQuarry)}

                <div className="CompanyName" >
                    Scandinavian Stone
            </div>
                <div className="QuarryName" >
                    {quarryName[2]}
                </div>
            </div>
        )
    }
}

export default Header;
