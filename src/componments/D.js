import React, {Component} from "react";
import F from "./F";
@F()
class D extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
               D
               这里使用的是继承式高阶组件F组件

            </div>
        )
    }
}
export default D;