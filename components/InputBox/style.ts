import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        margin: 10,
        alignItems:'flex-end'
    },
    mainContainer:{
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        borderRadius:5,
        flex:1,
        alignItems:'flex-end'
    },
    textInput:{
        flex:1,
        marginHorizontal: 10
    },
    icon:{
        marginHorizontal:5
    },
    buttonContainer:{
        backgroundColor: 'white',
        borderRadius:100,
        width:50,
        height:50,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles;