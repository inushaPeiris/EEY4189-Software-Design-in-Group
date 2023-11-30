import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//importing screens
import Login from "./src/screens/authentication/Login";
import Register from "./src/screens/authentication/Register";
import ForgotPassword from "./src/screens/authentication/ForgotPassword";
import Otp from "./src/screens/authentication/Otp";
import Resetpw from "./src/screens/authentication/Resetpw";
import Dashboard from "./src/screens/main/Dashboard";
import Packages from "./src/screens/main/Packages";
import Booking from "./src/screens/main/Booking";
import Aboutus from "./src/screens/main/Aboutus";
import Contact from "./src/screens/main/Contact";
import Notification from "./src/screens/main/Notification";
import Information from "./src/screens/main/Info";
import Cab from "./src/screens/main/Cab";
import OrderDetails from "./src/screens/main/OrderDetails";
import Payment from "./src/screens/main/Payment";
import Profile from "./src/screens/main/Profile";

// context 
import ResetTokenProvider from './src/screens/authentication/providers/resetTokenProvider';

const Stack = createNativeStackNavigator();

// Main Function
export default function App() {
  return (
    <ResetTokenProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Otp"
            component={Otp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Resetpw"
            component={Resetpw}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Packages"
            component={Packages}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Booking"
            component={Booking}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Aboutus"
            component={Aboutus}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Contact"
            component={Contact}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Notification"
            component={Notification}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Information"
            component={Information}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cab"
            component={Cab}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OrderDetails"
            component={OrderDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Payment"
            component={Payment}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ResetTokenProvider>
  );
}
