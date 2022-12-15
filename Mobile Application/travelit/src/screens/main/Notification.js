import React from "react";
import { SafeAreaView, ScrollView, View, StyleSheet, ImageBackground, Text, TextInput, TouchableOpacity,Image } from "react-native";


const Notification =() =>{
    return (
        <SafeAreaView>
            <ScrollView>
            
            {/* background */}
            <View style = {style.container}>

                <ImageBackground source={require('../../assest/images/dashboard_bg.png')} resizeMode="cover" style={style.defaultbg}>
                    
                    <View style={{marginTop:50,padding:10}}>
                        
                    <Text style={{fontSize:30,fontWeight:'bold',color:'white',textAlign: 'center'}}>Notification</Text>
                    </View>
                </ImageBackground>

            </View>

            <View style={style.description}>

                <Image source={require('../../assest/images/notification.png')} style={style.mainlogo}/>
               
            </View>
                                

            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },

    defaultbg:{
        marginTop:-30,
        width:'100%',
        height:125
    },

    description:{
        padding:10,
    },

    mainlogo:{
        marginTop:-30,
        padding:10,
        height:200,
        width:200,
        resizeMode: 'contain',
        alignSelf: 'center',
    },


});
export default Notification;
