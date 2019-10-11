import React, {Component} from "react";
import Tabbar from "../componments/Tabbar";
@Tabbar()
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
            <img src= {require("./../images/4.jpg" )}style={{height : 630}}/>
        </div>
        );
    }
}
export default User;

