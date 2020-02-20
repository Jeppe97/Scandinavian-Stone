
//import './style.css';
import React, {Component} from "react"
import {Link} from "react-router-dom" 



class MainContent extends Component {
  constructor(){
  super();


  this.state={
    Höjd:"",
    Bredd:"",
    Längd:"",
    Kvalité:"",
    Plats:"",
    Datum:"",
    öI:""
    
  }
  this.state = {isToggleOn: true};

  this.handleChange0 = this.handleChange0.bind(this)
  this.handleChange1 = this.handleChange1.bind(this)
  this.handleChange2 = this.handleChange2.bind(this)
  this.handleChange3 = this.handleChange3.bind(this)
  this.handleChange4 = this.handleChange4.bind(this)
  this.handleChange5 = this.handleChange5.bind(this)
  this.handleChange6 = this.handleChange6.bind(this)
  this.handleClick0 = this.handleClick0.bind(this);
  this.handleClick1 = this.handleClick1.bind(this);


  }
handleChange0(event){
  this.setState({
    Höjd: event.target.value,
    
  } )}

    handleChange1(event){
      this.setState({
        Bredd: event.target.value,
        
      } )}

    handleChange2(event){
      this.setState({
       Längd: event.target.value,
        
      } )}

      handleChange3(event){
        this.setState({
          Kvalité: event.target.value,
          
        } )}

        handleChange4(event){
          this.setState({
            Plats: event.target.value,
          
          } )}

          handleChange5(event){
            this.setState({
              Datum: event.target.value,
              
            } )}

            handleChange6(event){
              this.setState({
                öI: event.target.value,
                
              } )}

            handleClick0() {
              this.setState(state => ({
                isToggleOn: !state.isToggleOn
              }));
            }
           
            handleClick1() {
              this.setState(state => ({
                isToggleOn: !state.isToggleOn
              }));
            }

  render(){
      return(
 

<main className="">
  <div className=""></div>

  <div>
  <form >
    Höjd:   <input type="text" placeholder="Höjd" onChange={this.handleChange0}/>
   
    

  
    Bredd: <input type="text" placeholder="Bredd" onChange={this.handleChange1}/>
 

  
   Längd:<input type="text" placeholder="Längd" onChange={this.handleChange2}/>
   

  
   Kvalité:<input type="text" placeholder="Kvalité" onChange={this.handleChange3}/>
  

   
   Plats:     <input type="text" placeholder="Plats" onChange={this.handleChange4}/>
    

    
   Datum:     <input type="text" placeholder="Datum(dd/mm/år)" onChange={this.handleChange5}/>
    

    Övriga Info: <input type="text" placeholder="" onChange={this.handleChange6}/>
    </form>
    
    </div>

<Link to ="/mainmenu" className ="btn1">
<button onClick={this.handleClick0}>
        {this.state.isToggleOn ? "Spara": "Sparat"}</button>
</Link>
        
<Link to ="/workmethods" className ="btn1">
      <button onClick={this.handleClick}>{this.state.isToggleOn="Avbryt"}
      </button>

</Link>

</main>
  )
      }
}
export default MainContent;