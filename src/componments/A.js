import React, {Component} from "react";
function a(WraapedComponent){
    return class A extends Component {
        constructor(props){
            super(props);
        }
        render(){
            return(
                <div>
                    A组件现在是高阶组件
                    <WraapedComponent/>
                </div>
            )
        }
    }
}

export default a;