import React from "react";
import { SafeAreaView, ScrollView, View, StyleSheet, ImageBackground, Text, TextInput, TouchableOpacity,Image } from "react-native";

const Contact =() =>{
    return (
        <SafeAreaView>
            <ScrollView>
            
            {/* background */}
            <View style = {style.container}>

                <ImageBackground source={require('../../assest/images/dashboard_bg.png')} resizeMode="cover" style={style.defaultbg}>
                    
                    <View style={{marginTop:50,padding:10}}>
                        
                    <Text style={{fontSize:30,fontWeight:'bold',color:'white',textAlign: 'center'}}>Contact Us</Text>
                    </View>
                </ImageBackground>

            </View>

            {/* Description */}
            <View style={style.description}>

                <Image source={require('../../assest/images/contactus_logo.png')} style={style.mainlogo}/>

                <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center'}}>
                    Write to us. We will get back to you soon.
                </Text>

            </View>

            {/* Text Input Fields */}
            <View style={style.formInput}>
                <TextInput style={style.textInput} placeholder="Topic*"/>
            </View>

            <View style={style.formInput}>
                <TextInput style={style.textInput} placeholder="Name*"/>
            </View>

            <View style={style.formInput}>
                <TextInput style={style.textInput} placeholder="Contact Number*"/>
            </View>

            <View style={style.formInput}>
                <TextInput style={style.textInput} placeholder="Email Address*"/>
            </View>

            <View style={style.formInput}>
                <TextInput style={style.messageInput} placeholder="Message*"/>
            </View>


            <View style={style.formInput}>
                <Text style={{color:'#d10202',fontSize:16,fontWeight:'500',textAlign:'left'}}>
                    *Required Fields
                </Text>
            </View>


            {/* Main Button */}
            <View style={style.formInput}>
                <TouchableOpacity style={style.mainButton}>
                    <Text style={{textAlign:'center',fontSize:16,fontWeight:'500',color:'white'}}>Submit</Text>
                </TouchableOpacity>
            </View>


            {/* Horizontal line */}
            <View style={style.formInput}>
                <View style={{height:1,backgroundColor:'#bfbebb'}}/>
            </View>


            {/* Heading */}
            <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center'}}>
                    Travelit
            </Text>


            {/* Contact details */}
            <View style={style.formInput}>
                <View style={{alignItems:'center',flexDirection:'row'}}>
                    
                    <View style={{merginRight:20}}>
                        <Image source={require('../../assest/images/map.png')} style={{
                            width:40,height:40,borderRadius:1000
                        }}/>
                    </View>

                    <Text style={{marginLeft:20,fontSize:15}}>
                        No, 01, Main Road, Colombo 07, Sri Lanka.
                    </Text>
                    
                </View>
            </View>

            <View style={style.formInput}>
                <View style={{alignItems:'center',flexDirection:'row'}}>
                    
                    <View style={{merginRight:20}}>
                        <Image source={require('../../assest/images/email.png')} style={{
                            width:40,height:40,borderRadius:1000
                        }}/>
                    </View>

                    <Text style={{marginLeft:20,fontSize:15}}>
                        justnerds@gmail.com
                    </Text>
                    
                </View>
            </View>

            <View style={style.formInput}>
                <View style={{alignItems:'center',flexDirection:'row'}}>
                    
                    <View style={{merginRight:20}}>
                        <Image source={require('../../assest/images/call.jpg')} style={{
                            width:40,height:40,borderRadius:1000
                        }}/>
                    </View>

                    <Text style={{marginLeft:20,fontSize:15}}>
                        011 2343 234
                    </Text>
                    
                </View>
            </View>

            <View style={style.formInput}>
                <View style={{height:1,backgroundColor:'#bfbebb'}}/>
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
        marginTop:10,
        padding:10
    },

    description:{
        padding:10,
    },

    textInput:{
        padding:10,
        fontSize:16,
        borderWidth:1,
        borderColor:'#477173',
        borderRadius:10
    },

    messageInput:{
        padding:10,
        fontSize:16,
        borderWidth:1,
        borderColor:'#477173',
        borderRadius:10,
        height:100
    },

    mainButton:{
        padding:12,
        backgroundColor:'#076ff7',
        borderRadius:10
    },

    mainlogo:{
        marginTop:-30,
        padding:10,
        height:250,
        width:250,
        resizeMode: 'contain',
        alignSelf: 'center',
    },

});
export default Contact;
