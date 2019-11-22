import React from "react";
class IncludeRelateIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log(this.props, "父组件的")
    }

    render() {
        return (
            <div>
                <h1>组合组件IncludeRelateIndex（包含  关系）</h1>
                <IncludeRelateA attr={this}>
                    <h1>组合组件IncludeRelateIndex（包含关系）的儿子</h1>
                </IncludeRelateA>
            </div>
        );
    }
}
//此props也包含了赋在组件上的属性以及组件内的内容
class  IncludeRelateA  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log(this.props, "IncludeRelateIndex子组件的")
    }

    render(){
        return(
            <div>
                显示嵌入在本组件的内容 <br/>
                如果props.children不调用， 那么h1标签内容就不会显示出来。
                {this.props.children}
            </div>
        )
    }
}
export default IncludeRelateIndex;