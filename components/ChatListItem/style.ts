import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:"100%",
        justifyContent: 'space-between',
        padding:5 
    },
    leftContainer:{
        flexDirection: 'row'
    },
    avatar:{
        width:60,
        height:60,
        borderRadius:50,
        marginRight:10
    },
    username:{
        fontWeight: 'bold',
        color:'white',
        fontSize:16
    },
    lastMessage:{
        color:'grey',
        width:200
    },
    time:{
        color:'grey',
        fontSize: 12
    }
});

export default styles;