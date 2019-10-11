import React, {Component} from "react";
import e from "./E";

class B extends Component {
    constructor(props){
        super(props);
    }

   
    render(){
        return(
            <div>
                <br/> <br/> <br/>
                {this.props.name}
                <br/>
                {this.props.age}
                <br/>
                {this.props.sex}
                <br/>
               B
            </div>
        )
    }
}
export default e("hello")(B);