import React, { useState, useContext } from "react";
import ResetTokenContext from "./context/resetToken";
import axios from "axios";

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  //context
  const { setToken } = useContext(ResetTokenContext);

  const [newPassword, setNewPassword] = useState("");
  const [resetStatus, setResetStatus] = useState(null);

  const handleRequestReset = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/client/password-reset",
        {
          email,
        }
      );

      // Assuming the server sends back a reset token
      setToken(response.data.resetToken);
      setResetStatus("Reset email sent successfully");
    } catch (error) {
      console.error("Error:", error);
      setResetStatus("Error requesting password reset");
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {/* Request Reset Form */}
        <View>
          <Text>Enter your email to request a password reset:</Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TouchableOpacity
            onPress={() => {
              handleRequestReset();
              navigation.navigate("Otp");
            }}
          >
            <Text>Next</Text>
          </TouchableOpacity>

          {resetStatus && <Text>{resetStatus}</Text>}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
