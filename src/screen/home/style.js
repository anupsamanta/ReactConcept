import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingBottom: 5,
    },


    txt:{
        color : 'red',
        fontSize : 24,
        fontWeight : 'bold'
    },
    mainView:{
        flex: 1,
        marginTop: 50, 
        backgroundColor: 'white'  
    },
    conceptView:{
        flex: 1, 
        alignItems:'center' 
    },
    cText:{
        fontSize: 24,
        color: 'orange',
        fontWeight: 'bold',
      },
      loginView:{flex: 1, paddingLeft : '2%', 
      paddingRight : '2%'},
      inp1:{
    paddingLeft: 5, 
    height: 50, 
      borderBottomColor: 'orange',
      borderBottomWidth: 3,
    },
    inp2:{
        paddingLeft: 5, 
        height: 50,
        marginTop : '5%', 
        borderBottomColor: 'orange',
        borderBottomWidth: 3,
    },
    loginbtn:{
        marginTop: '3%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'gray',
    },
    signup:{
        flexDirection: 'row',
        alignItems: 'center',
        //flex:1,
    },
    signuptxt:{
        fontSize : 20,
        fontWeight: 'bold',
    },
    logtxt:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
}
);
export default styles;