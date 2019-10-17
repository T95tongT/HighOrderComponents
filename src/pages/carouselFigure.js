/**
 * @description : 轮播图用js形式去写，循环播放
 * 实现的效果是， 2秒自动播放下一站。点击上一张回到当前-1， 如果是第一张， 则回到最后一张，2秒后又自动播放下一张
 * 点击下一张，  如果是最后一张， 则回到第一张，2秒后又自动播放下一张。
 */
import React , {Component} from "react";
import "./../cssFile/carouseFigure.css";
let auto = '';//定时器标识
class CarouseFigure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cur:'block',
            other:'none',
            index:0
        };
        
    }
    componentDidMount (){
        auto = setInterval(()=>{
            this.next("auto");
        },2000)
    }
    pre (){
        window.clearInterval(auto);

        this.setState({
            index :this.state.index-1
        }, ()=>{
            if(this.state.index < 0){
                document.getElementById(4).style.display=this.state.cur;
                document.getElementById(0).style.display=this.state.other;
                this.setState({
                    index :4
                })
            }else{
                document.getElementById(this.state.index).style.display=this.state.cur;
                if(this.state.index !== 4){
                    document.getElementById(this.state.index + 1).style.display=this.state.other;
                }
            }
            auto = setInterval(()=>{
                this.next("auto");
            },2000)
        })
    }

    next (from){
        if(from !== 'auto'){
            window.clearInterval(auto)
        }
        this.setState({
            index : this.state.index === 4 ? 0 :this.state.index+1
        }, ()=>{
            document.getElementById(this.state.index).style.display = this.state.cur;
            if(this.state.index !== 0){
                document.getElementById(this.state.index - 1).style.display=this.state.other;
            }else{
                document.getElementById(4).style.display=this.state.other;
            }
            if(from !== 'auto'){
                auto = setInterval(()=>{
                    this.next("auto");
                },2000)
            }
        })
    }

    render() {
        return (
           <div className = "container">
               <div className = "pre" onClick = {()=>this.pre()}>pre</div>
               <div className = "turn">
                   <div id= "0" style={{display:this.state.cur}}>
                        <img title="0" src={require("./../images/t1.jpg")}/>
                   </div>
                   <div id= "1" style={{display:this.state.other}}>
                        <img title="1" src={require("./../images/t2.jpg")}/>
                   </div>
                   <div id= "2" style={{display:this.state.other}}>
                        <img title="2" src={require("./../images/t3.jpeg")}/>
                   </div>
                   <div id= "3" style={{display:this.state.other}}>
                        <img title="3" src={require("./../images/t4.jpg")}/>
                   </div>
                   <div id= "4" style={{display:this.state.other}}>
                        <img title="4" src={require("./../images/t5.jpg")}/>
                   </div>
               </div>
               <div className="next" onClick = {()=>this.next()}>next</div>
           </div>
        );
    }
}
export default CarouseFigure;
