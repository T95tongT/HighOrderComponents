import React, {Component} from "react";

class Main extends Component {
    constructor(props){
        super(props);
    }
    click = ()=>{
        console.log(window.location)
    }
   
    render(){
        return(
            <div>
               <button onClick = {this.click}>1111</button>
        this.state = {
            showValueIframe :'父页面'
        }
    }
   
    componentDidMount (){
        console.log("父页面的挂载")
        window.addEventListener('message', (e)=> {
            console.log(e.data,'main');
            this.setState({
                showValueIframe: e.data
            })
        },false);
    }
    clickIframe = ()=>{
        document.getElementById('iframe').contentWindow.postMessage('我是父页面传到子页面的值', "*");
    }
   
    clickOpen = () =>{
        let win = window.open("http://localhost:3001/")
        setTimeout(()=>{
            win.postMessage('我是父页面传到子页面的值open方式打开', "*")
        }, 0)//必须等子页面搭建完成在发送
    }
    render(){
        return(
            <div>
                {this.state.showValueIframe}
               <button onClick = {this.clickIframe}>iframe跨域点击事件</button>
               <button onClick = {this.clickOpen}>Open跨域点击事件</button>
               <iframe id = "iframe" src = "http://localhost:3001/" >

               </iframe>
            </div>
        )
    }
}
export default Main;