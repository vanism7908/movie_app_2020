import React from "react";

// function Detail({location:{state}}){
    
    
// }

class Detail extends React.Component{
    componentDidMount(){
        console.log("componentDidMount",this.props)
        const { location, history } = this.props;
        if(location.state === undefined){
            history.push("/")
        }
        // console.log(location.state)
    }
    render(){
        const {location} = this.props;
        console.log("render",location)
        if(location.state){
            return <span>{location.state.title}</span>
        } else{
            console.log("render.. no location.state")

            return null;
        }
    }
    componentWillUnmount() {
        console.log("component will unmount")
    }
    componentDidUpdate() {
        //링크만 바꿨을 때...!!!!
        console.log("component did update")
        const { location, history } = this.props;
        if(location.state === undefined){
            history.push("/")
        }
    }
}

export default Detail;