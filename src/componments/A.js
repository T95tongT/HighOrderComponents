import React, {Component} from "react";
function a(WraapedComponent){
    return class A extends Component {
        constructor(props){
            super(props);
        }
        render(){
            const {age, ...otherProps} = this.props
            return(
                <div>
                    A组件现在是高阶组件
                    <WraapedComponent sex = {"男"} {...otherProps}/>
                </div>
            )
        }
    }
}

export default a;