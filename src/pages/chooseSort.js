import React from "react"
class ChooseSort extends React.Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            arr : [1,3,42,7,5,3]
        };
    }
    sort(){
        let arr = this.state.arr;
    
        for(let i = 0; i< arr.length-1;i++){
               
            for(let j = i+1; j<=arr.length -1 ;j++){
                let temp;
                if(arr[i] - arr[j] > 0 ){
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        console.log(arr)
        this.setState({
            arr: arr
        })
    }

    render() {
        return (
            <div >
                {this.state.arr+''}
                <div onClick = {()=>this.sort()} >选择排序</div>
            </div>
        );
    }
}
export default ChooseSort
