import React from "react";
import { SafeAreaView, ScrollView, View, StyleSheet, ImageBackground, Text, TextInput, TouchableOpacity,Image } from "react-native";

const OrderDetails =({navigation}) =>{
    return (
        <SafeAreaView>
            <ScrollView>
            
                {/* background */}
                <View style = {style.container}>

                    <ImageBackground source={require('../../assest/images/dashboard_bg.png')} resizeMode="cover" style={style.defaultbg}> 
                        <View style={{marginTop:50,padding:10}}>
                            <Text style={{fontSize:30,fontWeight:'bold',color:'white',textAlign: 'center'}}>Order Details</Text>
                        </View>
                    </ImageBackground>

                </View>

                {/* order details */}

                <View>
                    <Text style={{ marginTop: 10, marginLeft: 10, marginBottom: 10, fontSize: 18}}>
                        Selected Package: Kandy
                    </Text>
                    <Text style={{ marginTop: 10, marginLeft: 10, marginBottom: 10, fontSize: 18}}>
                        Order Date: 13/01/2023
                    </Text>
                </View>
                    
                <View style={style.formInput} >
                    <TextInput style={style.textInput} placeholder="Name*"/>
                </View>


                <View style={style.formInput}>
                    <TextInput style={style.textInput} placeholder="Email Address*"/>
                </View>

                <View style={style.formInput}>
                    <TextInput style={style.textInput} placeholder="Contact Number*"/>
                </View>

                <View style={style.formInput}>
                    <TextInput style={style.textInput} placeholder="Trip Starting Location*"/>
                </View>

                <View style={style.formInput}>
                    <Text style={{color:'#d10202',fontSize:16,fontWeight:'500',textAlign:'left'}}>
                        *Required Fields
                    </Text>
                </View>

                {/* Main Button */}
                <View style={style.formInput}>
                    <TouchableOpacity style={style.mainButton} onPress={()=> navigation.navigate("Payment")}>
                        <Text style={{textAlign:'center',fontSize:16,fontWeight:'500',color:'white'}}>Conform Details</Text>
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
        marginTop:5,
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
        borderRadius: 10,
        backgroundColor:"green"
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
export default OrderDetails;
