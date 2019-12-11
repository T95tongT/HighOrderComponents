import React from "react";
export const themes = {
    value :"原来"
};
const myContext = React.createContext({value:"默认"});
class Base extends React.Component {
    constructor(props, context) {
        super(props, context);
        console.log(props, context, "constructor")
        this.state = {};
    }
    UNSAFE_componentWillMount(){
        console.log(this, "componentWillMount")
    }
    componentDidMount(){
        console.log(this, "componentDidMount")
    }
    UNSAFE_componentWillReceiveProps(nextProps, nextContent){// 还可以在生命周期中获取到， 就是在已有的参数后，再加上一个nextContent
        console.log(this, nextProps, nextContent, "componentWillReceiveProps")
    }
    shouldComponentUpdate(newProps, newState, nextContent) {
        console.log(this,newProps, newState, nextContent,"shouldComponentUpdate")
        return true;
    }
    UNSAFE_componentWillUpdate(newProps, newState, nextContent) {
        console.log(newProps, newState, nextContent, "componentWillUpdate");
    }
    componentDidUpdate(prevProps, prevState, preConext) {
        console.log(prevProps, prevState, preConext, 'componentDidUpdate')
    }
  

    render() {
        return (
            <div>   
                {this.context.value}
                <button {...this.props} onClick = {this.context.onChange}>快来点我</button>
            </div>
        );
    }
}
Base.contextType  = myContext;

class ConextComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        console.log(props, context);
        this.onChange = ()=>{
            this.setState({
                value:"改变后"
            })
        }
        this.state = {
            value :'未修改前',
            onChange : this.onChange
        };
    }
    UNSAFE_componentWillMount(){
        //console.log(this, "ConextComponent ------- componentWillMount")
    }
    componentDidMount(){
        //console.log(this, "ConextComponent -------componentDidMount")
    }
    UNSAFE_componentWillReceiveProps(nextProps, nextContent){// 还可以在生命周期中获取到， 就是在已有的参数后，再加上一个nextContent
       // console.log(this, nextProps, nextContent, "ConextComponent -------componentWillReceiveProps")
    }
    shouldComponentUpdate(newProps, newState, nextContent) {
        //console.log(this,newProps, newState, nextContent,"ConextComponent -------componentWillReceiveProps")
        return true;
    }
    UNSAFE_componentWillUpdate(newProps, newState, nextContent) {
        //console.log(newProps, newState, nextContent, "ConextComponent -------componentWillUpdate");
    }
    componentDidUpdate(prevProps, prevState, preConext) {
        //console.log(prevProps, prevState, preConext, 'ConextComponent -------componentDidUpdate')
    }
    componentWillUnmount(preConext) {
        //console.log(preConext, 'ConextComponent ------- componentWillUnmount')
    }

    onChange = () => {
        this.setState({
            value:"改变后"
        }, ()=>{
            console.log(this.state.value, "onChange")
        })
    }
    render() {
        let self = this;
        return (
            <div>   
                <myContext.Provider value = {self.state}>
                    <div onClick={self.onChange}></div>
                    <Base/>
                </myContext.Provider>
            </div>
        );
    }
}

class BaseConsumer extends React.Component {
    constructor(props, context) {
        super(props, context);
        console.log(props, context, "constructor")
        this.state = {};
    }

    render() {
        return (
            <myContext.Consumer>   
                {({value, onChange})=>{
                    return (
                        <div>
                            {value}
                            <button {...this.props} onClick = {onChange}>快来点我</button>    
                        </div>
                    )
                }}
            </myContext.Consumer>
        );
    }
}

BaseConsumer.contextType  = myContext;
class ConextComponentConsutomer extends React.Component {
    constructor(props, context) {
        super(props, context);
        console.log(props, context);
        this.onChange = ()=>{
            this.setState({
                value:"改变后"
            })
        }
        this.state = {
            value :'未修改前',
            onChange : this.onChange
        };
    }
    
    render() {
        let self = this;
        return (
            <div>   
                <myContext.Provider value = {self.state}>
                    <div onClick={self.onChange}></div>
                    <BaseConsumer/>
                </myContext.Provider>
            </div>
        );
    }
}
export default ConextComponentConsutomer ;
