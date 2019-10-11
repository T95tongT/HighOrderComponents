export default (title) => (WrappedComponent)=>class F extends WrappedComponent {
    componentDidMount(){
    }
    render(){
        return super.render()
    }
}
