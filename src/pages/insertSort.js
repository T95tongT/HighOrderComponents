import React from "react"
class InsertSort extends React.Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            arr : [1,3,42,2,5,3]
        };
    }
    sort(){
        let arr = this.state.arr;
        console.log(arr)
        for(let i = 0 ; i<=arr.length -1 ;i++){
            while(i-1>=0 && arr[i] - arr[i-1] <0){
                let temp;
                temp = arr[i];
                arr[i] = arr[i-1];
                arr[i-1] = temp;
                i--;
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
                <div onClick = {()=>this.sort()} >插入排序</div>
            </div>
        );
    }
}
export default InsertSort
