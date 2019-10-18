import React from "react"
class Sort extends React.Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            arr : [1,3,42,7,5,3]
        };
    }
    sort(){
        let arr = this.state.arr;
        console.log(arr)
        
        this.setState({
            arr: arr
        })
    }

    render() {
        return (
            <div >
                {this.state.arr+''}
                <div onClick = {()=>this.sort()} >快速排序</div>
            </div>
        );
    }
}
export default Sort
