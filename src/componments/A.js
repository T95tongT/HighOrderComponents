import React, {Component} from "react";
function a(WraapedComponent){
    return class A extends Component {
        constructor(props){
            super(props);
            this.state = {
                value:''
            }
        }
        onChange = (e) =>{
            console.log(e)
            this.setState({
                value: e.target.value
            })
        }
        refc = (instance) =>{
            console.log(instance, this);
        }
        componentDidMount(){
            console.log(1)
        }
        render(){
            //const {age, ...otherProps} = this.props;
            // const newProps = {
            //     value: this.state.value,
            //     onChange: this.onChange
            //}
            return(
                <div>
                    A组件现在是高阶组件
                    <WraapedComponent 
                        sex = {"男"} 
                        {...this.props} 
                        ref = {this.refc} 
                        {
                            ...{
                                value: this.state.value,
                                onChange: this.onChange
                            }
                        }
                        />
                </div>
            )
        }
    }
}

export default a;