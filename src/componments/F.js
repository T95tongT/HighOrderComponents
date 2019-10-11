export default (title) => (WrappedComponent)=>class F extends WrappedComponent {
    componentDidMount(){
        alert(1)
    }
    render(){
        return super.render()
    }
}
