import React, { Component } from 'react';
import "./App.css"
const menu = [{name:"Home",value:["For entrepreur ","For Students", "For  hobbyists"]},{name:"Services",value:["For entrepreur ","For Students", "For  hobbyists"]},{name : "Contact"}]
class App extends Component {
  state = { 
    display : false
   }
 Show =()=> {
   console.log("show")
   this.setState({
     display:!this.state.display
   })
 }
  render() {
    return ( 
      <div className="stylee">
      
      {menu.map((el,i)=><div key= {i}>
            {el.value ? <div>
              
             <p onClick={el.name==="Services" ?  this.Show  : console.log()}>  {el.name}</p>
                {el.name==="Services"&&el.value.map((el)=><ul className={ this.state.display ? "display" : "hide"}>
                <li className="list1">{el}</li>
                </ul>)}
            </div>:
            <div>
              {el.name}
              </div>}
    </div>)}
          
      </div>);
  }
}
 
export default App;