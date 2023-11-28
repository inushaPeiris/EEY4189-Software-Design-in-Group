import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
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

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");

  const handleSubmit = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:9000/register", user)
      .then((response) => {
        console.log(response);
        alert(
          "Registration successful",
          "you have been registered successfully"
        );
        setName("");
        setEmail("");
        setPassword("");
        setConformPassword("");
      })
      .catch((error) => {
        alert("Registration failed", "An error occurred during registration");
        console.log("error", error);
      });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {/* background Image & Logo */}
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
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>

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
          <TextInput
            style={style.textInput}
            placeholder="Conform Password"
            secureTextEntry={true}
            value={conformPassword}
            onChangeText={(text) => setConformPassword(text)}
          />
        </View>

        {/* Main Button */}
        <View style={style.formInput}>
          <TouchableOpacity style={style.mainButton} onPress={handleSubmit}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                fontWeight: "500",
                color: "white",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        <View style={style.backRoute}>
          <Text style={{ textAlign: "center" }}>or</Text>
        </View>

        {/* Back Button */}
        <View style={style.backRoute}>
          <TouchableOpacity>
            <Text
              style={{
                color: "#076ff7",
                fontSize: 16,
                fontWeight: "500",
                textAlign: "center",
              }}
              onPress={() => navigation.navigate("Login")}
            >
              Back to Login
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

  backRoute: {
    padding: 5,
    marginTop: 5,
  },
});
export default Register;
