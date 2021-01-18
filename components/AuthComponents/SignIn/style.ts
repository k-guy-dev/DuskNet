import {StyleSheet,Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    mainView:{
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#141730',
    },
    innerView:{
        padding:60,
    },
    dusknet:{
        fontWeight: 'bold',
        fontSize: 40,
        paddingTop: 30,
        paddingLeft: windowWidth/4,
        color: '#f40940',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        textDecorationColor: 'white'
    },
    title:{
        fontWeight: 'bold',
        fontSize: 28,
        paddingTop: 40,
        paddingLeft: windowWidth/4+40,
        color:'white',
        textDecorationLine: 'underline',
        textDecorationColor: '#f40940'
    },
    label:{
        fontSize:20,
        color:'white'
    },
    textInput:{ 
        height: 40, 
        borderColor: '#f40940',
        borderWidth: 1,
        paddingTop:5,
        color: 'white'
    },
    appButtonContainer:{
        elevation: 8,
        backgroundColor: "#f40940",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginVertical:50
    },
    appButtonText:{
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    bottomView:{
        flexDirection: 'row'
    },
    appButtonContainer2:{
        elevation: 8,
        backgroundColor: "#f40940",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginVertical:50,
        marginRight:10
    },
    appButtonText2:{
        fontSize: 11,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
})

export default styles;