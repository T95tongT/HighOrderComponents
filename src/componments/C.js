import React, {Component} from "react";
import a from "./A";
@a
class C extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(2)
    }
    render(){
        console.log(this.props)
        return(
            <div>
                C
                <input type='text' {...this.props}/>
            </div>
        )
    }
}
export default C;