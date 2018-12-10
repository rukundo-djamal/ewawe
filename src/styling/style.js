import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    
    authinput: {
        height: 40,
        marginTop: 40,
        marginRight: 50,
        marginLeft: 50,
        paddingRight: 10,
        color: '#00796B',
        alignSelf: 'stretch'
    },
    authbtn: {
        height: 60,
        backgroundColor: 'white',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        borderRadius: 25,
        borderColor: '#fff',
        marginTop: 30,
        alignSelf: 'stretch',
        marginRight: 50,
        marginLeft: 50,
    },
    authviewtbtn: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginRight: 50,
        marginLeft: 50,
        flexDirection: 'row'
    }
    ,
    authbtns: {
        height: 60,
        backgroundColor: 'white',
        alignSelf: 'center',
        elevation: 3,
        borderRadius: 30,
        borderColor: '#fff',
        width:60,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    authregister: {
        color: 'white',
        alignSelf: 'center',
        marginTop: 30,
        borderColor: 'white',
        fontSize: 14,
        borderWidth: 1,
        borderLeftColor: 'transparent',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent'
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    welcome: {
      backgroundColor: '#00796B',
      marginTop: 10,
      elevation: 4,   
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    root:{
        flex: 1, 
        flexDirection: 'row',
        
        
        
    },
    Hbox:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00796B',
        height: 60,
        elevation: 4,
        flexDirection: 'row'
    },
    Htext:{
        color: '#E0F2F1',
        fontWeight: 'bold',
        fontSize: 20
    },
    Hicon:{
        justifyContent: 'flex-start',
        flexDirection: 'row'
        
    },
    card:{
        height: 350,
        margin: 10,
        elevation: 2,
        flex: 1,
        backgroundColor: '#fff',
    },
    cardHead:{
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'transparent',   
        justifyContent: 'center',
        alignItems: 'center',        
        
    },
    cardBody:{
        flexDirection: 'row',
        flex: 4,   
        backgroundColor: 'transparent',   
        
    },
    cardAction:{
        flexDirection: 'row',        
        flex: 1,
        backgroundColor: 'transparent',   
        justifyContent: 'center',
        alignItems: 'center',  
        paddingBottom: 5,
        paddingTop: 5    
        
    },
    cardHtext:{
        color: 'black'  
    },
    left:{
        flex: 1,
        backgroundColor: 'transparent',  
        justifyContent:'space-around', 
        padding:20         
        
    },
    right:{
        flex: 1,
        backgroundColor: 'transparent',   
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    root1:{
        flex: 1, 
        
        
    },
    headcal:{
        justifyContent: 'center',
        alignItems: 'center',
        padding : 50
    },
    headcaltxt:{
        fontSize: 20,
        fontFamily: 'Ubuntu-Bold',
        color: 'teal'
    },
    myfont:{
        fontFamily: 'Ubuntu-Bold',        
    },
    drwcolor:{
        color: 'teal'              
    },
    phfont:{
        fontFamily: 'Ubuntu-Regular',        
    },
    icon:{
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content:{
        backgroundColor: '#00796B',
    },
    contentbox:{
        justifyContent: 'space-between' ,
        padding: 5       
    },
    cardbox:{
        margin: 5,
        elevation: 2,
        backgroundColor: 'transparent',
        justifyContent: 'space-around' ,
        
    },
    cardtable:{
        marginBottom: 10,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    list:{
        height:150
    },
    circleicon:{
        height:60,
        width:60,
        borderRadius:30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00796B',
    },
    tbfont:{
        fontFamily: 'Ubuntu-Regular'
    },
    mclose:{
        backgroundColor: 'transparent',
        justifyContent: 'flex-start',
        alignItems:'center',
        padding: 10
    },
    mheader:{
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mcontent:{
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    maction:{
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardboxresult:{
        margin: 5,
        elevation: 2,
        backgroundColor: 'transparent',
        justifyContent: 'center' ,
        alignItems: 'center'
    },


    

  });


  export default styles;