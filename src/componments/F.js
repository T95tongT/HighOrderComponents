export default (title) => (WrappedComponent)=>class F extends WrappedComponent {
   
    render(){
        return super.render()
    }
}
