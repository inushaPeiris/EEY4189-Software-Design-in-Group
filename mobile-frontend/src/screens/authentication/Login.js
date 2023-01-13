import React, {useState} from "react";
import { SafeAreaView, ScrollView, View, StyleSheet, ImageBackground, Text, TextInput, TouchableOpacity, Image } from "react-native";
import axios from "axios";


const Login = ({navigation}) => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async () => {
        if (email === '' || password === '') {
            alert("All fields are required");
            return;
        }
        const resp = await axios.post("http://localhost:8070/user/login", { email, password });
        console.log(resp.data);
    };


    return (
        <SafeAreaView>
            <ScrollView>
                
                {/* background */}
                <View style = {style.container}>

                    <ImageBackground source={require('../../assest/images/login_bg.png')} resizeMode="cover" style={style.defaultbg}>
                        <Image source={require('../../assest/images/travelit_logo.png')}
                        style={{alignItems:'center',width:150,height:150, padding:20,resizeMode: 'contain',
                        alignSelf: 'center',}} />
                    </ImageBackground>

                </View>

                {/* Text Input Fields */}
                <View style={style.formInput}>
                    <TextInput style={style.textInput} placeholder="Email address"  keyboardType="email-address" value={email} onChangeText={text => setEmail(text)} />
                </View>
                <View style={style.formInput}>
                    <TextInput style={style.textInput} placeholder="Password" secureTextEntry={true} value={password} onChangeText={text => setPassword(text)} />
                </View>

                <View style={style.formInput}>
                    <TouchableOpacity>
                        <Text style={{color:'#d10202',fontSize:16,fontWeight:'500',textAlign:'right'}} onPress={()=> navigation.navigate("Forgotpw")} > Fogot Password?</Text>
                    </TouchableOpacity>
                </View>

                {/* Main Button */}
                <View style={style.formInput}>
                    <TouchableOpacity style={style.mainButton} onPress={()=> navigation.navigate("Dashboard")} >
                        <Text  style={{ textAlign: 'center', fontSize: 16, fontWeight: '500', color: 'white' }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={style.formInput}>
                    <Text style={{textAlign:'center',}}>or</Text>
                </View>

                {/* Registration */}
                <View style={style.formInput}>
                    <TouchableOpacity style={style.mainButton} onPress={()=> navigation.navigate("Register")} >
                        <Text  style={{ textAlign: 'center', fontSize: 16, fontWeight: '500', color: 'white' }}>
                            Register
                        </Text>
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
