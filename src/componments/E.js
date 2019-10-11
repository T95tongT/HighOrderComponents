import React, {Component} from "react";
export default  (title) => (WrappedComponent) => class E extends Component {
    constructor(props){
        super(props);
       
    }

    render(){
        const {age, ...otherProps} = this.props;
      
        return(
            <div>
               E组件现在是高阶组件
               <br></br>
                {title}

                <WrappedComponent 
                    sex = {"男"} 
                    
                    {...otherProps} 
                  
                />
            </div>
        )
    }
}

