import React from "react";
import { SafeAreaView, ScrollView, View, StyleSheet, ImageBackground, Text, TextInput, TouchableOpacity,Image } from "react-native";

const Forgotpw =() =>{
    return (
        <SafeAreaView>
            <ScrollView>

            {/* background Image & Logo */}
            <View style = {style.container}>

                <ImageBackground source={require('../../assest/images/login_bg.png')} resizeMode="cover" style={style.defaultbg}>
                    <Image source={require('../../assest/images/travelit_logo.png')}
                    style={{alignItems:'center',width:150,height:150, padding:20,resizeMode: 'contain',
                    alignSelf: 'center',}}/>
                </ImageBackground>

            </View>

            <View style={style.formInput}>
                <Text style={{fontSize:16,fontWeight:'500',textAlign:'center'}}>
                    Provides your account's email
                </Text>
            </View>

            {/* Text Input Fields */}
            <View style={style.formInput}>
                <TextInput style={style.textInput} placeholder="Email"/>
            </View>

            {/* Main Button */}
            <View style={style.formInput}>
                <TouchableOpacity style={style.mainButton}>
                    <Text style={{textAlign:'center',fontSize:16,fontWeight:'500',color:'white'}}>Next</Text>
                </TouchableOpacity>
            </View>

            <View style={style.backRoute}>
                <Text style={{textAlign:'center',}}>or</Text>
            </View>

            {/* Back Button */}
            <View style={style.backRoute}>
                <TouchableOpacity>
                    <Text style={{color:'#076ff7',fontSize:16,fontWeight:'500',textAlign:'center'}}>Back to Login</Text>
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
        height:140
    },

    formInput:{
        marginTop:10,
        padding:10
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
    
    backRoute:{
        padding:5,
        marginTop:5
    }

});
export default Forgotpw;
