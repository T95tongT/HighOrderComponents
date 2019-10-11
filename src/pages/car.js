import React, {Component} from "react"
import Tabbar from "../componments/Tabbar";
@Tabbar()
class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div >
                <img src= {require("./../images/3.jpg" )}style={{height : 630}}/>
            </div>
        );
    }
}
export default  Car;

