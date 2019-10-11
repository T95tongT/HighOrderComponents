/**
 * @description: 根据React snippets plugins可以使用rcc快捷语句，快速创建一个简易组件。 本组件现在是高阶组件
 */
import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./../static/iconfont.css";
const  tabbarArr = [
    {
        img :'icon-home',
        text: "首页",
        link:'home'
    },
    {
        img :'icon-shuangsechangyongtubiao-',
        text: "分类",
        link:'category'
    },
    {
        img :'icon-gouwuchekong',
        text: "购物车",
        link:'car'
    },
    {
        img :'icon-wode',
        text: "我的",
        link:'user'
    }
]
const Tabbar = (url) => (WrappedComponent) => class Tabbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let location = window.location.hash;
        location = location.split('/')[1]
        return (
            <div style={{display:'flex', width:500, height:700, border:'1px solid', flexDirection:'column'}}>
                <WrappedComponent/>
                
                {url?  <img src= {require(`../images/${url}`)} style={{height : 630}}/> :null}

                <div style={{flexDirection :'row', display:'flex', justifyContent:'space-around',flex:1, alignItems:'center',border:'1px solid', height:70}}>
                    {tabbarArr.map((item, index)=>{
                        return (
                            <Link to = {item.link} key={index} style ={{color: location === item.link ? 'red' :'gray'}}>
                                <div  className = {`iconfont ${item.img}`}></div>
                                <div > {item.text}</div>
                            </Link>
                        )
                    })}
                </div>
            </div>
            
        );
    }
}

export default Tabbar
