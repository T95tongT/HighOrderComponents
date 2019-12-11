import React, {Component} from "react";

class Secode extends Component {
    constructor(props){
        super(props);
        this.state = {
            showValueIframe :'子页面'
        }
    }
     post() {
        window.postMessage("hi there!", window.location.origin); //发送到所有同源的窗口，注意，当前窗口也会收到
      }
      receiveMessage(event) {
        console.log('even122222t', event.origin)
     
      }
    componentDidMount(){
        console.log("子页面的挂载")
        
        window.addEventListener('message', (e)=> {
            console.log(e.data,'second');
           
            window.location.href = "http://127.0.0.1:3001/thisd.js"
            this.setState({
                showValueIframe: e.data
            })
        },false);
    }
    clickIframe = ()=>{
        let win = window.open ("http://127.0.0.1:3002")
        setTimeout(()=>{
            win.postMessage("hi there!", 'http://127.0.0.1:3002')
        }, 0)//必须等子页面搭建完成在发送
        //window.parent.postMessage('子页面传到父页面的值', "http://127.0.0.1:3000/");
        window.parent.postMessage('子页面传到父页面的值', "http://127.0.0.1:3000/");
    }
    clickFromOpen = ()=>{
        window.opener.postMessage('子页面传到父页面的值clickFromOpen', "http://127.0.0.1:3000/");
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
export default Secode;