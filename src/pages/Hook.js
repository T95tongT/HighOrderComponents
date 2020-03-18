import React , { useState, useEffect } from "react";
export default class ContractList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        return(
            <div>123456
                <ContractListC/>
                {/* <ContractListD/> */}
            </div>
        )
    }
}
function useStatus (statusID){

    console.log(statusID,"asstatusIDtatus===")
    const [status, show] = useState(statusID);
    useEffect(()=>{
        console.log(status, "1111")
        show(statusID+1)
        console.log(status, "888")
    })
    
    return status;
}
function ContractListC (props){
    
    const [status, show] = useState("day");
    return(
        <div>
            {status}, 状态
            <button onClick ={()=>show('day')}>
                按钮day
            </button>
            <button onClick ={()=>show('year')}>
                按钮year
            </button>
            <button onClick ={()=>show("month")}>
                按钮month
            </button>
            <ContractListD pconstract = {status}/>

        </div>
    )
   
}

function ContractListD (props){
    console.log(props.pconstract,  "D");
    const curStatus = useStatus(props.pconstract)
    console.log(props.pconstract,curStatus,  "D")
    //const [status, show] = useState("day1");
    return(
        <div>
            {curStatus}, 状态
            {/* <button onClick ={()=>show('day2')}>
                按钮day1
            </button>
            <button onClick ={()=>show('year2')}>
                按钮year1
            </button>
            <button onClick ={()=>show("month2")}>
                按钮month1
            </button> */}
        </div>
    )
   
}
