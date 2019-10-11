import React, {Component} from "react"
import Tabbar from "../componments/Tabbar";
@Tabbar()
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div >
                <img src= {require("./../images/1.jpg" )}style={{height : 630}}/>
            </div>
        );
    }
}
export default Home
