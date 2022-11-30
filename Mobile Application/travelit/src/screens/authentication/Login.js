import React from "react";
import { SafeAreaView, ScrollView, View, StyleSheet, ImageBackground, Text, TextInput, TouchableOpacity,Image } from "react-native";

const Login =() =>{
    return (
        <SafeAreaView>
            <ScrollView>
            
            {/* background */}
            <View style = {style.container}>

                <ImageBackground source={require('../../assest/images/login_bg.png')} resizeMode="cover" style={style.defaultbg}>
                    <Image source={require('../../assest/images/travelit_logo.png')}
                    style={{alignItems:'center',width:150,height:150, padding:20,resizeMode: 'contain',
                    alignSelf: 'center',}}/>
                </ImageBackground>

            </View>

            {/* Text Input Fields */}
            <View style={style.formInput}>
                <TextInput style={style.textInput} placeholder="Username"/>
            </View>

            <View style={style.formInput}>
                <TextInput style={style.textInput} placeholder="Password" secureTextEntry={true}/>
            </View>

            <View style={style.formInput}>
                <TouchableOpacity>
                    <Text style={{color:'#d10202',fontSize:16,fontWeight:'500',textAlign:'right'}}>Fogot Password?</Text>
                </TouchableOpacity>
            </View>

            {/* Main Button */}
            <View style={style.formInput}>
                <TouchableOpacity style={style.mainButton}>
                    <Text style={{textAlign:'center',fontSize:16,fontWeight:'500',color:'white'}}>Login</Text>
                </TouchableOpacity>
            </View>

            <View style={style.formInput}>
                <Text style={{textAlign:'center',}}>or</Text>
            </View>

            {/* Social Media Login */}
            <View style={style.formInput}>
                <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                    
                    <TouchableOpacity style={{merginRight:20}}>
                        <Image source={require('../../assest/images/google_logo.png')} style={{
                            width:40,height:40,borderRadius:1000
                        }}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginLeft:20}}>
                        <Image source={require('../../assest/images/fb_logo.png')} style={{
                            width:40,height:40,borderRadius:1000
                        }}/>
                    </TouchableOpacity>
                    
                </View>
            </View>

            <View style={style.formInput}>
                <View style={{height:1,backgroundColor:'#bfbebb'}}/>
            </View>

            {/* Registration */}
            <View style={style.formInput}>
                <TouchableOpacity>
                    <Text style={{color:'#076ff7',fontSize:16,fontWeight:'500',textAlign:'center'}}>Register Here</Text>
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
    }

});
export default Login;
