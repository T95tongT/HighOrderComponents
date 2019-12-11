import React, {Component} from "react";

class Main extends Component {
    constructor(props){
        super(props);
    }
    click = ()=>{
        console.log(window.location)
    }
   
    render(){
        return(
            <div>
               <button onClick = {this.click}>1111</button>
            </div>
        )
    }
}
export default Main;