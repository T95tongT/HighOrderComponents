import React from "react";
class IncludeRelate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log(this.props, "父组件的")
    }

    render() {
        return (
            <div>
                <h1>组合组件（包含关系）</h1>
                <IncludeRelateA attr={this}>
                    <h1>组合组件（包含关系）的儿子</h1>
                </IncludeRelateA>
            </div>
        );
    }
}
//函数式组件，需要传props,此props包含了赋在组件上的属性
function IncludeRelateA (props){
    console.log(props)
    return(
        <div>
            显示嵌入在本组件的内容 <br/>
            如果props.children不调用， 那么h1标签内容就不会显示出来。
            {props.children}
        </div>
    )
}
export default IncludeRelate;