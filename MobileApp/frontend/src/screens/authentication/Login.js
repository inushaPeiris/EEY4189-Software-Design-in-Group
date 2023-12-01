import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //client will be navigating to the dashboard if they are registered.
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");

        if (token) {
          setTimeout(() => {
            navigation.replace("Dashboard");
          }, 600);
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    checkLoginStatus();
  }, []);

  const handleLogin = () => {
    const client = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:8000/client/login", client)
      .then((response) => {
        console.log(response);
        const token = response.data.token;
        AsyncStorage.setItem("authToken", token);
        navigation.navigate("Dashboard");
      })
      .catch((error) => {
        alert("Login error");
        console.log("error ", error);
      });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {/* background */}
        <View style={style.container}>
          <ImageBackground
            source={require("../../assest/images/login_bg.png")}
            resizeMode="cover"
            style={style.defaultbg}
          >
            <Image
              source={require("../../assest/images/travelit_logo.png")}
              style={{
                alignItems: "center",
                width: 150,
                height: 150,
                padding: 20,
                resizeMode: "contain",
                alignSelf: "center",
              }}
            />
          </ImageBackground>
        </View>

        {/* Text Input Fields */}
        <View style={style.formInput}>
          <TextInput
            style={style.textInput}
            placeholder="Email address"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={style.formInput}>
          <TextInput
            style={style.textInput}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <View style={style.formInput}>
          <TouchableOpacity>
            <Text
              style={{
                color: "#d10202",
                fontSize: 16,
                fontWeight: "500",
                textAlign: "right",
              }}
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              {" "}
              Fogot Password?
            </Text>
          </TouchableOpacity>
        </View>

        {/* Main Button */}
        <View style={style.formInput}>
          <TouchableOpacity style={style.mainButton} onPress={handleLogin}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                fontWeight: "500",
                color: "white",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <View style={style.formInput}>
          <Text style={{ textAlign: "center" }}>or</Text>
        </View>

        {/* Registration */}
        <View style={style.formInput}>
          <TouchableOpacity
            style={style.mainButton}
            onPress={() => navigation.navigate("Register")}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                fontWeight: "500",
                color: "white",
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },

  defaultbg: {
    width: "100%",
    height: 140,
  },

  formInput: {
    marginTop: 10,
    padding: 10,
  },

  textInput: {
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#477173",
    borderRadius: 10,
  },

  mainButton: {
    padding: 12,
    backgroundColor: "#076ff7",
    borderRadius: 10,
  },
});
export default Login;
