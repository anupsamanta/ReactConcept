import {React, Component, Fragment } from "react";
import { View, Text } from "react-native";

class LifecycleMethod extends Component{
    constructor(props){
        super(props)
        this.state = {
            counter: 0,
        };
        console.log("Constructor");
    }

    componentDidMount(){
        console.log("componentDidMount") 
    }
    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps") 
    }

    render(){
        console.log("Render") 
        return(
          <View>
            <Text>Life Cycle methods</Text>
          </View>
        );
    }
}
export default LifecycleMethod