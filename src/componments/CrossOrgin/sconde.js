import React, {Component} from "react";

class Secode extends Component {
    constructor(props){
        super(props);
        this.state = {
            showValueIframe :'子页面'
        }
    }


    componentDidMount(){
        console.log("子页面的挂载")
        
        window.addEventListener('message', (e)=> {
            console.log(e.data,e,'second');
            this.setState({
                showValueIframe: e.data
            })
        },false);
    }

    clickFromOpen = ()=>{
        window.opener.postMessage('子页面传到父页面的值clickFromOpen', "http://127.0.0.1:3000/");
    }
    render(){
        return(
            <div>
                {this.state.showValueIframe}
               <button onClick = {this.clickFromOpen}>传输数据给父页面</button>
            </div>
        )
    }
}
export default Secode;