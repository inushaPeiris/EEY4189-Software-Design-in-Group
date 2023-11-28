import React from "react";
import { SafeAreaView, ScrollView, View, StyleSheet, ImageBackground, Text, Linking, TouchableOpacity,Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Information =() =>{
    return (
        <SafeAreaView>
            <ScrollView>
            
            {/* background */}
            <View style = {style.container}>

                <ImageBackground source={require('../../assest/images/dashboard_bg.png')} resizeMode="cover" style={style.defaultbg}>
                    
                    <View style={{marginTop:50,padding:10}}>
                        
                    <Text style={{fontSize:30,fontWeight:'bold',color:'white',textAlign: 'center'}}>Important Contacts</Text>
                    </View>
                </ImageBackground>

            </View>

            {/* Main components*/}

            <View style={{padding:10,alignItems:'center',justifyContent:'center'}}>

                {/* SL airlines */}
                <TouchableOpacity style={style.maincomponents}  
                    onPress={() =>Linking.openURL('https://www.srilankan.com/en_uk/lk')}>

                    <Image source={require('../../assest/images/airline_logo.png')} 
                        style={{width:100,height:80,padding:10,marginTop:20,alignSelf: 'center',}}/>

                    <Text style={{textAlign:'center',fontSize:18,fontWeight:'500',color:'#076ff7',padding:20}}>Sri Lankan Air Lines</Text>

                </TouchableOpacity>

            </View>

            <View style={{padding:10,alignItems:'center',justifyContent:'center'}}>

                {/* SL passport */}
                <TouchableOpacity style={style.maincomponents}  
                    onPress={() =>Linking.openURL('https://www.immigration.gov.lk/web/index.php?option=com_content&view=article&id=137&Itemid=190&lang=en')}>

                    <Image source={require('../../assest/images/passport_logo.png')} 
                        style={{width:70,height:80,padding:10,marginTop:20,alignSelf: 'center',}}/>

                    <Text style={{textAlign:'center',fontSize:18,fontWeight:'500',color:'#076ff7',padding:20}}>Information on Passport & Visa</Text>

                </TouchableOpacity>

            </View>  

            <View style={{padding:10,alignItems:'center',justifyContent:'center'}}>

                {/* SL hospital */}
                <TouchableOpacity style={style.maincomponents}  
                    onPress={() =>Linking.openURL('http://www.nhsl.health.gov.lk/')}>

                    <Image source={require('../../assest/images/hospital_logo.png')} 
                        style={{width:180,height:140,padding:5,marginTop:-15,alignSelf: 'center',}}/>

                    <Text style={{textAlign:'center',fontSize:18,fontWeight:'500',color:'#076ff7'}}>National Hospital</Text>

                </TouchableOpacity>

            </View>                 

            <View style={{padding:10,alignItems:'center',justifyContent:'center'}}>

                {/* SL police */}
                <TouchableOpacity style={style.maincomponents}  
                    onPress={() =>Linking.openURL('https://www.police.lk/')}>

                    <Image source={require('../../assest/images/police_logo.jpg')} 
                        style={{width:65,height:80,padding:10,marginTop:20,alignSelf: 'center',}}/>

                    <Text style={{textAlign:'center',fontSize:18,fontWeight:'500',color:'#076ff7',padding:20}}>Sri Lanka Police</Text>

                </TouchableOpacity>

            </View>

            <View style={{padding:10,alignItems:'center',justifyContent:'center'}}>

                {/* SL ambulance */}
                <TouchableOpacity style={style.maincomponents}  
                    onPress={() =>Linking.openURL('https://www.1990.lk/')}>

                    <Image source={require('../../assest/images/amb_logo.jpg')} 
                        style={{width:155,height:80,padding:10,marginTop:20,alignSelf: 'center',}}/>

                    <Text style={{textAlign:'center',fontSize:18,fontWeight:'500',color:'#076ff7',padding:20}}>1990 - Ambulance</Text>

                </TouchableOpacity>

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
        height:250,
        width:250,
        resizeMode: 'contain',
        alignSelf: 'center',
    },

    maincomponents:{
        borderRadius:10,
        width:'100%',
        height:170,
        borderColor:'#076ff7',
        borderWidth:2
    },

});
export default Information;
