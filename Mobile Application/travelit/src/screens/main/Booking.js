import React from "react";
import { SafeAreaView, ScrollView, View, StyleSheet, ImageBackground, Text, TextInput, TouchableOpacity,Image } from "react-native";


const Booking =() =>{
    return (
        <SafeAreaView>
            <ScrollView>
            
            {/* background */}
            <View style = {style.container}>

                <ImageBackground source={require('../../assest/images/dashboard_bg.png')} resizeMode="cover" style={style.defaultbg}>
                    
                    <View style={{marginTop:50,padding:10}}>
                        
                    <Text style={{fontSize:30,fontWeight:'bold',color:'white',textAlign: 'center'}}>My Bookings</Text>
                    </View>
                </ImageBackground>

            </View>

            <View style={style.description}>

                <Image source={require('../../assest/images/reservation_logo.png')} style={style.mainlogo}/>

                <Text style={{fontSize:16,fontWeight:'bold',textAlign:'center'}}>
                    Booking History
                </Text>

                
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
        marginTop:-50,
        padding:10,
        height:250,
        width:250,
        resizeMode: 'contain',
        alignSelf: 'center',
    },

});
export default Booking;
