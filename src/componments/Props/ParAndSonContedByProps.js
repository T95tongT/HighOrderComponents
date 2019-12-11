import React from "react";

class GrandPar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log(this)
    }

    render() {
        let component = "GrandPar";
        return (
            <div 
                style = {
                    {background:"#eee", 
                    border:"1px solid #000",
                    width:700, 
                    alignItems:'center', 
                    display:'flex', 
                    flexDirection:'column'}
                }
            > 
                这里是GrandPar组件，本组件直接包含+间接包含了Par & Son组件<br/>
                <Par component = {component}/>
            </div>
        );
    }
}
class Par extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
       /**
        *  此处注释的是与render种 <Son component = {component}/> 相对应，
        *  代表向子组件传送props，可以有多种方式，一种是具体的属性名， 另一种是解构
        */

        // let {
        //     component
        // } = this.props;
        return (
            <div style = {
                {background:"rgb(204, 133, 133)", 
                border:"1px solid #000", 
                width:500, 
                alignItems:'center', 
                display:'flex', 
                flexDirection:'column'}
                }
            >
                这里是Par组件直接包含Son组件<br/>
                {/* <Son component = {component}/> */}
                <Son {...this.props}/>
            </div>
        );
    }
}
class Son extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let {
            component
        } = this.props;
        console.log(this.props, "son组件的props包含了什么")
        return (
            <div style = {{background:"rgb(214, 198, 198)", border:"1px solid #000", width:300}}>
                这里是Son组件<br/>
                component是从最上层的组件传下来的<br/>
                <br/>   
                {`component的值到底是多少呢？答案是： ${component}`}
            </div>
        );
    }
}
export default GrandPar;
