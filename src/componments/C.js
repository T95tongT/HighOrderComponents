import React, {Component} from "react";
import a from "./A";
@a
class C extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                C
                <input type='text' {...this.props}/>
            </div>
        )
    }
}
export default C;