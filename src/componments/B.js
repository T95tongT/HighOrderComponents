import React, {Component} from "react";
import a from "./A";
@a
class B extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
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
export default B;