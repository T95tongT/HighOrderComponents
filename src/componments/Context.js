import React from "react";
export default class Context extends React.Component{
    
    constructor(props){
        super(props);
        this.context = {a:''}
        console.log(this, React.Children, React, React.Component)
    }
    render(){
        return(
            <div>
                Context
                <ContextB />
            </div>
        )
    }
}
class ContextB extends React.Component{
    constructor(props){
        super(props);
        console.log(this)
    }
    render(){
        return(
            <div />
        )
    }
}