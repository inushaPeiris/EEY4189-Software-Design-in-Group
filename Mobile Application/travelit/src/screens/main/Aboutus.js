import React from "react";
import { SafeAreaView, ScrollView, View, StyleSheet, ImageBackground, Text, TextInput, TouchableOpacity,Image } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Aboutus =() =>{
    return (
        <SafeAreaView>
            <ScrollView>
            
            {/* background */}
            <View style = {style.container}>

                <ImageBackground source={require('../../assest/images/dashboard_bg.png')} resizeMode="cover" style={style.defaultbg}>
                    
                    <View style={{marginTop:50,padding:10}}>
                        
                    <Text style={{fontSize:30,fontWeight:'bold',color:'white',textAlign: 'center'}}>About Us</Text>
                    </View>
                </ImageBackground>

            </View>

            <View style={style.description}>

                <Image source={require('../../assest/images/travelit_logo.png')} style={style.mainlogo}/>

                <Text style={{fontSize:16,fontWeight:'bold',textAlign:'left'}}>
                    Who We Are?
                </Text>

                <Text style={{fontSize:16,padding:10,textAlign: 'justify'}}>
                    Travelit is your ultimate guide to travelling to Sri Lanka. We pride ourselves on taking every 
                    step of your journey with you, ensuring that you have a hassle-free experience.{"\n"}

                    {"\n"}With 10 years of experience, our reputation for excellence in customer service is only surpassed 
                    by our extraordinary ability to curate the perfect travel experience for you. Our team consists of 
                    a group of industry experts that act as your Travel Consultant, making your experience with us a 
                    momentous occasion, that will evolve into a lifelong memory. At Travelit, our first priority is YOU!
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

    bottomNavBar:{
        borderColor:'#edd2fc',
        borderWidth:1,
        height:60,
        width:'100%',
        marginTop:35,
        borderRadius:20, 
        bottom:0,backgroundColor: "#e8e8e8",
        borderColor:'#e9edf0',
        bottom: 0,
    }

});
export default Aboutus;
