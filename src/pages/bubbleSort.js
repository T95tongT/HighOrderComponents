import React from "react"
class Bubble extends React.Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            arr : [1,3,42,7,5,3]
        };
    }
    bubble(){
        let arr = this.state.arr;
        console.log(arr)
        for(let i = 0 ; i<= arr.length-1 ;i++){
            for(let j= 0 ; j<= arr.length -1 -i; j++){//已经排好序的不用处理
                let temp ;
                if(arr[j] - arr[j+1] >0){
                    temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        this.setState({
            arr: arr
        })
    }

    render() {
        return (
            <div >
                {this.state.arr+''}
                <div onClick = {()=>this.bubble()} >冒泡排序</div>
            </div>
        );
    }
}
export default Bubble
