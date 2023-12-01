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

const Resetpw = () => {
  //context
  const { resetToken } = useContext(ResetTokenContext);

  const [newPassword, setNewPassword] = useState("");
  const [resetStatus, setResetStatus] = useState(null);

  const handleResetPassword = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8000/client/reset/${resetToken}`,
        {
          password: newPassword,
        }
      );

      // Assuming the server sends back a success message
      setResetStatus(response.data.message);
    } catch (error) {
      console.error("Error:", error);
      setResetStatus("Error resetting password");
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Reset Password Form */}

        <View>
          {/* Reset Password Form */}
          <Text>Enter your new password:</Text>
          <TextInput
            placeholder="New Password"
            secureTextEntry
            value={newPassword}
            onChangeText={(text) => setNewPassword(text)}
          />
          <TouchableOpacity
            onPress={() => {
              handleResetPassword();
              setTimeout(() => {
                navigation.navigate("Login");
              }, 2000); // 2 seconds
            }}
          >
            <Text>Reset Password</Text>
          </TouchableOpacity>
          {resetStatus && <Text>{resetStatus}</Text>}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Resetpw;
