import React from "react";
import { SafeAreaView, ScrollView, View, StyleSheet, ImageBackground, Text, Linking, TouchableOpacity,Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Cab =({navigation}) =>{
    return (
        <SafeAreaView>
            <ScrollView>
            
            {/* background */}
            <View style = {style.container}>

                <ImageBackground source={require('../../assest/images/dashboard_bg.png')} resizeMode="cover" style={style.defaultbg}>
                    
                    <View style={{marginTop:50,padding:10}}>
                        
                    <Text style={{fontSize:30,fontWeight:'bold',color:'white',textAlign: 'center'}}>Cab Services</Text>
                    </View>
                </ImageBackground>

            </View>

            {/* Main components*/}

            <View style={{padding:10,alignItems:'center',justifyContent:'center'}}>

                {/* Uber */}
                <TouchableOpacity style={style.maincomponents}  
                    onPress={() =>Linking.openURL('https://www.uber.com/lk/en/')}>

                    <Image source={require('../../assest/images/uber_logo.png')} 
                        style={{width:60,height:60,padding:10,marginTop:20,alignSelf: 'center',}}/>

                    <Text style={{textAlign:'center',fontSize:18,fontWeight:'500',color:'#076ff7',padding:20}}>Uber</Text>

                    {/* Contact details */}

                    {/* Address */}
                    <View style={style.formInput}>
                        <View style={{alignItems:'center',flexDirection:'row'}}>
                            
                            <View style={{merginRight:20}}>
                                <Image source={require('../../assest/images/map.png')} style={{
                                    width:40,height:40,borderRadius:1000
                                }}/>
                            </View>

                            <Text style={{marginLeft:20,fontSize:15}}>
                                142 Bauddhaloka Mawatha, Colombo 04,{"\n"} Sri Lanka.
                            </Text>
                            
                        </View>
                    </View>

                    {/* Email */}
                    <View style={style.formInput}>
                        <View style={{alignItems:'center',flexDirection:'row'}}>
                            
                            <View style={{merginRight:20}}>
                                <Image source={require('../../assest/images/email.png')} style={{
                                    width:40,height:40,borderRadius:1000
                                }}/>
                            </View>

                            <Text style={{marginLeft:20,fontSize:15}}>
                                help@uber.com
                            </Text>
                            
                        </View>
                    </View>

                    {/* Phone number */}
                    <View style={style.formInput}>
                        <View style={{alignItems:'center',flexDirection:'row'}}>
                            
                            <View style={{merginRight:20}}>
                                <Image source={require('../../assest/images/call.jpg')} style={{
                                    width:40,height:40,borderRadius:1000
                                }}/>
                            </View>

                            <Text style={{marginLeft:20,fontSize:15}}>
                                071 888 4788
                            </Text>
                            
                        </View>
                    </View>

                </TouchableOpacity>

            </View>


            <View style={{padding:10,alignItems:'center',justifyContent:'center'}}>

                {/* Pickme */}
                <TouchableOpacity style={style.maincomponents}  
                    onPress={() =>Linking.openURL('https://pickme.lk/')}>

                    <Image source={require('../../assest/images/pickme_logo.jpg')} 
                        style={{width:60,height:60,padding:10,marginTop:20,alignSelf: 'center',}}/>

                    <Text style={{textAlign:'center',fontSize:18,fontWeight:'500',color:'#076ff7',padding:20}}>Pick me</Text>

                    {/* Contact details */}

                    {/* Address */}
                    <View style={style.formInput}>
                        <View style={{alignItems:'center',flexDirection:'row'}}>
                            
                            <View style={{merginRight:20}}>
                                <Image source={require('../../assest/images/map.png')} style={{
                                    width:40,height:40,borderRadius:1000
                                }}/>
                            </View>

                            <Text style={{marginLeft:20,fontSize:15}}>
                                309 High Level Rd, Nugegoda 06,{"\n"} Sri Lanka.
                            </Text>
                            
                        </View>
                    </View>

                    {/* Email */}
                    <View style={style.formInput}>
                        <View style={{alignItems:'center',flexDirection:'row'}}>
                            
                            <View style={{merginRight:20}}>
                                <Image source={require('../../assest/images/email.png')} style={{
                                    width:40,height:40,borderRadius:1000
                                }}/>
                            </View>

                            <Text style={{marginLeft:20,fontSize:15}}>
                                support@pickme.lk
                            </Text>
                            
                        </View>
                    </View>

                    {/* Phone number */}
                    <View style={style.formInput}>
                        <View style={{alignItems:'center',flexDirection:'row'}}>
                            
                            <View style={{merginRight:20}}>
                                <Image source={require('../../assest/images/call.jpg')} style={{
                                    width:40,height:40,borderRadius:1000
                                }}/>
                            </View>

                            <Text style={{marginLeft:20,fontSize:15}}>
                                0117 433 433
                            </Text>
                            
                        </View>
                    </View>

                </TouchableOpacity>

            </View>

            <Button title="Go Back" onPress={() => navigation.goBack()} />

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
        height:300,
        borderColor:'#076ff7',
        borderWidth:2
    },

    formInput:{
        padding:5,
    },

});
export default Cab;
