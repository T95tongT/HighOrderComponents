import React from "react";
export const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
    changeThmes : ()=>{

    }
};
const myContext = React.createContext({background:'red'});//当内部组件没有找到对应的provider时，草回去这个默认值红色。

class AboutContext extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        
    }

    render() {
        console.log(this, this.context, "AboutContext")
        return (
            <div>   
                <button {...this.props}  style={{backgroundColor: this.context.background}}/>
            </div>
        );
    }
}
AboutContext.contextType = myContext; //把context带有默认值的对象赋给AboutContext类

class AboutContextCustomer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        
    }

    render() {
        console.log(this, this.context, "AboutContextCustomer")
        return (
            <div>   
                <myContext.Consumer>{/** Consumer确是把数据绑定在（value1，value2， value3...）=>{return (组件)}上了*/}
                    {({theme, toggleTheme})=>{
                        console.log({theme, toggleTheme}, "{theme, changeThmes}")
                        return (
                            <button  onClick={toggleTheme}  style={{backgroundColor: theme && theme.background}}>
                                点我啊
                            </button>
                        )
                    }}
                </myContext.Consumer>
            </div>
        );
    }
}
AboutContextCustomer.contextType = myContext; //就是想看看context上有没有。
class A extends React.Component{
    constructor(props){
        super(props)
       
    }
    
    render() {
        console.log(this, this.context, "A")
        return (
            <AboutContext  onClick = {this.props.change}>
               点我
            </AboutContext>
        );
    }
    
}
A.contextType = myContext;//绑定了context对象才可以获取到provider上的calue值， 也就是this.context

class BAboutContext extends React.Component{
    constructor(props){
        super(props)
        this.state={
            theme : themes.dark
        }
        console.log(this, "constructor")
       
    }
    change = ()=>{
        this.setState({
            theme: this.state.theme === themes.dark
            ? themes.light
            : themes.dark,  
        }, ()=>{
            console.log(this)
        })
    }
   
    componentDidMount(){
        console.log(this, "componentDidMount")
    }
    componentWillReceiveProps(nextPros){
        console.log(this, nextPros, "componentWillReceiveProps")
    }
    render() {
        console.log(this, this.context,  "render")
        return (
           <div>
               {/**provider上绑定的value就是最后传给内部组件的this.context的值。为了让内部组件可以动态的获取到context的变化。 */}
                <myContext.Provider value = {this.state.theme}>
                    <A change = {()=>this.change()}></A>
                </myContext.Provider>
                <div>
                    <A />{/**不带provider的组件 */}
                </div>
              
           </div>
        );
    }
}

class CAboutContext extends React.Component{
    constructor(props){
        super(props);
        
        this.toggleTheme = () => {
            this.setState({
                theme: this.state.theme === themes.dark
                ? themes.light
                : themes.dark,  
            }, ()=>{
                console.log(this)
            })
        }
        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme,
        };
    }
    render() {
        console.log(this, this.context, "CAboutContext")
        return (
            <div>
                <myContext.Provider value = {this.state.theme}>
                    <BAboutContext/>
                </myContext.Provider>
                <myContext.Provider value = {this.state}>
                    <AboutContextCustomer />
                </myContext.Provider>
                <div>
                    <A />{/**不带provider的组件 */}
                </div>
                <div>
                    <AboutContextCustomer />
                </div>
            </div>
        );
    }
}
export  default CAboutContext;