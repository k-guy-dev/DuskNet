import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    container:{
        padding: 10,
    },
    messageBox:{
        marginRight: 60,
        borderRadius: 5,
        padding:10
    },
    name:{
     fontWeight: 'bold',
     color: '#f40940',
     marginBottom: 5 
    },
    message:{
     color: 'white'
    },
    time:{
        alignSelf: 'flex-end',
        color: 'grey',
        fontSize: 11
    }
});

export default style;