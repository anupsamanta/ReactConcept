import { useEffect, useState } from "react";
import {View, Text, ScrollView} from "react-native";

const BaseAPIClass= () =>{
    const [dataResponse, type1] = useFetchApi("https://jsonplaceholder.typicode.com/todos", "api")
    console.log("====> " , dataResponse, type1);
    return(
        <View style = {{flex : 1,alignItems: 'center', }}>
            <Text>Custom Hooks</Text>
            <ScrollView style={{padding: 20}}>   
            {
                dataResponse && dataResponse.map((item) =>{
                   return(<Text style={{marginBottom: 40}} key={item.id}>{item.title}</Text>)
                })
            }
            </ScrollView>
        </View>
    );
}

const useFetchApi = (url, type = null)=>{
    const [data, setdata] = useState(null)
    useEffect(() =>{
        fetch(url).then((res)=> 
          res.json()
        ).then((data) => setdata(data))
    },[])
    return [data, type]
}

export default BaseAPIClass;