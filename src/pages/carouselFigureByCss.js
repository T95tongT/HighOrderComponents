import React from "react";
import "./../cssFile/carouseFigure.css";
/**
 * @description : 轮播图用css形式去写，点击播放
 * 实现的效果是，点击上一张回到当前-1， 如果是第一张， 则回到最后一张，
 * 点击下一张，  如果是最后一张， 则回到第一张，
 */
class CarouselFigureByCss extends React.Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            left:-600
        };
    }
    componentDidMount(){

    }

    pre (){
        console.log(document.getElementsByClassName("turnCss")[0].style.left)
        let pre = document.getElementsByClassName("turnCss")[0].style.left;
        if(parseInt(pre) >= 0){
            document.getElementsByClassName("turnCss")[0].style.left = "-1190px"
        }else{
            document.getElementsByClassName("turnCss")[0].style.left = `${parseInt(pre)  + 310}px`
        }
    }

    next(){
        console.log(document.getElementsByClassName("turnCss")[0].style.left)
        let pre = document.getElementsByClassName("turnCss")[0].style.left;
        if(parseInt(pre)  < -930){
            document.getElementsByClassName("turnCss")[0].style.left = "0px"
        }else{
            document.getElementsByClassName("turnCss")[0].style.left = `${parseInt(pre)  - 310}px`
        }
    }

    render() {
        return (
            <div style={{ flexDirection: 'column',display: "flex"}}>
               
                <div className = "containerCss">
                    <div className = "turnCss" style={{left:0}}>
                        <img className = "one"  title="0" src={require("./../images/t1.jpg")}/>
                        <img className = "one" title="1" src={require("./../images/t2.jpg")}/>
                        <img className = "one"  title="2" src={require("./../images/t3.jpeg")}/>
                        <img className = "one" title="3" src={require("./../images/t4.jpg")}/>
                        <img className = "one" title="4" src={require("./../images/t5.jpg")}/>
                    </div>
                
                </div>
                <div className = "preCss" onClick = {()=>this.pre()}>pre</div>
                <div className="nextCss" onClick = {()=>this.next()}>next</div>
            </div>
        );
    }
}

export default CarouselFigureByCss;