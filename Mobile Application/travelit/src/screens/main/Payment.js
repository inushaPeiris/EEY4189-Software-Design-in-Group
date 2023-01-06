import React from "react";
import { SafeAreaView, ScrollView, View, StyleSheet, ImageBackground, Text, TextInput, TouchableOpacity,Image } from "react-native";

const Payment =() =>{
    return (
        <SafeAreaView>
            <ScrollView>
            
            {/* background */}
            <View style = {style.container}>

                <ImageBackground source={require('../../assest/images/dashboard_bg.png')} resizeMode="cover" style={style.defaultbg}> 
                    <View style={{marginTop:50,padding:10}}>
                        <Text style={{fontSize:30,fontWeight:'bold',color:'white',textAlign: 'center'}}>Online Payment</Text>
                    </View>
                </ImageBackground>

            </View>

            {/* Description */}
            <View style={style.description}>
                <Image source={require('../../assest/images/payment_logo.png')} style={style.mainlogo}/>
            </View>

            {/* Personal Info - Text Input Fields */}

            <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center',color:'#076ff7'}}>
                    Personal Details
            </Text>

            <View style={style.formInput}>
                <TextInput style={style.textInput} placeholder="First Name*"/>
            </View>

            <View style={style.formInput}>
                <TextInput style={style.textInput} placeholder="Last Name*"/>
            </View>

            <View style={style.formInput}>
                <TextInput style={style.textInput} placeholder="Email Address*"/>
            </View>

            <View style={style.formInput}>
                <TextInput style={style.textInput} placeholder="Contact Number*"/>
            </View>

            <View style={style.formInput}>
                <Text style={{color:'#d10202',fontSize:16,fontWeight:'500',textAlign:'left'}}>
                    *Required Fields
                </Text>
            </View>

            {/* Main Button */}
            <View style={style.formInput}>
                <TouchableOpacity style={style.mainButton}>
                    <Text style={{textAlign:'center',fontSize:16,fontWeight:'500',color:'white'}}>Next</Text>
                </TouchableOpacity>
            </View>
  
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1
    },

    defaultbg:{
        width:'100%',
        height:140,
        marginTop:-30,
    },

    formInput:{
        marginTop:0,
        padding:5
    },

    textInput:{
        padding:10,
        fontSize:16,
        borderWidth:1,
        borderColor:'#477173',
        borderRadius:10
    },

    mainButton:{
        padding:12,
        backgroundColor:'#076ff7',
        borderRadius:10
    },

    mainlogo:{
        marginTop:-50,
        padding:0,
        height:230,
        width:230,
        resizeMode: 'contain',
        alignSelf: 'center',
    },

});
export default Payment;
