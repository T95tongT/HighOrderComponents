import React, {Component} from "react";

class Thisd extends Component {
    constructor(props){
        super(props);
        this.state = {
            showValueIframe :'Thisd子页面'
        }
    }
   
    componentDidMount(){
        console.log("Thisd子页面的挂载")
        console.log(window.top) 
        window.addEventListener('message', (e)=> {
            console.log(e.data,'Thisd子页面的挂载');
            this.setState({
                showValueIframe: e.data
            })
        },false);
    }
    clickIframe = ()=>{
        window.parent.postMessage('Thisd子页面传到父页面的值', "http://127.0.0.1:3000/");
    }
    clickFromOpen = ()=>{
        window.opener.postMessage('Thisd子页面传到父页面的值clickFromOpen', "http://127.0.0.1:3000/");
    }
    render(){
        return(
            <div>
                {this.state.showValueIframe}
               <button onClick = {this.clickIframe}>2222</button>
               <button onClick = {this.clickFromOpen}>已经种下父页面传来的message</button>
            </div>
        )
    }
}
export default Thisd;