import React from "react";
import { SafeAreaView, ScrollView, View, StyleSheet, ImageBackground, Text, TextInput, TouchableOpacity,Image } from "react-native";

const Payment =({navigation}) =>{
    return (
      <SafeAreaView>
        <ScrollView>
        
          {/* background */}
          <View style = {style.container}>

            <ImageBackground source={require('../../assest/images/dashboard_bg.png')} resizeMode="cover" style={style.defaultbg}> 
              <View style={{marginTop:50,padding:10}}>
                  <Text style={{fontSize:30,fontWeight:'bold',color:'white',textAlign: 'center'}}>Packages</Text>
              </View>
            </ImageBackground>

          </View>

          <View style={{ padding: 5, alignItems: 'center', flexDirection: 'column', justifyContent: 'space-between' }}>
            
            <View style={{width:"95%", height:390, backgroundColor:'rgba(101, 87, 87, 0.29)', borderRadius: 10, marginTop:30,}}>
              <Image style={style.packageImg} source={require('../../assest/images/colombo.jpg')} />
              <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>Colombo</Text>
              <Text style={{ margin: 10, textAlign: 'center', color: '#3d3d3d'}}>
                Colombo is the executive and judicial capital and largest city of Sri Lanka by population. According to the Brookings   Institution, Colombo metropolitan area has a population of 5.6 million, and 752,993 in the Municipality. It is the financial centre of the island and a tourist destination. 
              </Text>
              <Text style={{textAlign: 'right', margin: 5, fontSize: 15, fontWeight: "bold"}}>
                Price (Per Person) =LKR 9000
              </Text>
              <TouchableOpacity onPress={()=> navigation.navigate("OrderDetails")} style={{backgroundColor: 'green', borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                <Text style={{ textAlign: 'center', margin: 5, fontSize: 15, color:'white', fontWeight:'bold'}}>
                Book Now
              </Text>
              </TouchableOpacity>
            </View>

            <View style={{width:"95%", height:400, backgroundColor:'rgba(101, 87, 87, 0.29)', borderRadius: 10, marginTop: 20 , marginBottom:40,}}>
              <Image style={style.packageImg} source={require('../../assest/images/kandy.jpg')} />
              <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>Kandy</Text>
              <Text style={{ margin: 10, textAlign: 'center', color: '#3d3d3d' }}>
                Kandy is a large city in central Sri Lanka. It's set on a plateau surrounded by mountains, which are home to tea plantations and biodiverse rainforest. The city's heart is scenic Kandy Lake (Bogambara Lake), which is popular for strolling. Kandy is famed for sacred Buddhist sites, including the Temple of the Tooth (Sri Dalada Maligawa) shrine, celebrated with the grand Esala Perahera annual procession.
              </Text>
              <Text style={{textAlign: 'right', margin: 5, fontSize: 15, fontWeight: "bold"}}>
                Price (Per Person) =LKR 10000
              </Text>
              <TouchableOpacity onPress={()=> navigation.navigate("OrderDetails")} style={{backgroundColor: 'green', borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                <Text style={{ textAlign: 'center', margin: 5, fontSize: 15, color:'white', fontWeight:'bold'}}>
                Book Now
              </Text>
              </TouchableOpacity>
            </View>

            {/* <View style={{width:"95%", height:300, backgroundColor:'rgba(101, 87, 87, 0.29)', borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginTop:30, alignItems: 'center'}}>
              <Image style={style.packageImg} source={require('../../assest/images/kandy.jpg')} />
              <Text style={{textAlign:'center', fontWeight:'bold',fontSize:30,color:'white',padding:20}}>Litro</Text>
            </View> */}

          </View>

        </ScrollView>
      </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1
  },

  packageImg: {
    width: "90%",
    height: 140,
    margin: 20
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
