import React, { Component } from "react";
import { Link } from "react-router-dom";
import AdminDropdownMenuQuarry from "./AdminDropdownMenuQuarry";

export default class AdminQuarry extends Component {
  constructor(props)
  {
      super(props);
      this.state =  {
          loading: true,
          person: null
          }
  }

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading : false})
    
 }
  render() {
    return (
      <div>
        <div>{this.state.loading || !this.state.person ? 
        <div>loading...</div>
         : 
         <div>
            <div>{this.state.person.name.title}</div>
            <div>{this.state.person.name.first}</div>
            <div> {this.state.person.name.last}</div>
            <div><img src={this.state.person.picture.large}/></div>
             </div>
              } </div>
        <div className="MainMenu">
          
            <AdminDropdownMenuQuarry />
          
          <Link  to="/AdminMainmenu">
            <button>Tillbaka</button>
          </Link>
        </div>
      </div>
    );
  }
}
