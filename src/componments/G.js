/**
 * @description: 根据React snippets plugins可以使用rcc快捷语句，快速创建一个简易组件。
 */
import React, {Component} from "react";

import "./../static/iconfont.css"
import Tabbar from "./Tabbar";
class G extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={{display:'flex', width:500, height:700, border:'1px solid'}}>
              <Tabbar/>
            </div>
        );
    }
}

export default G
