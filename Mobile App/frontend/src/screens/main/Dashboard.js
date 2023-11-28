import React from "react";
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
import { Button } from "react-native-web";

const Dashboard = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* background */}
        <View style={style.container}>
          <ImageBackground
            source={require("../../assest/images/dashboard_bg.png")}
            resizeMode="cover"
            style={style.defaultbg}
          >
            <View style={{ marginTop: 50, padding: 10 }}>
              {/* Account & Notification */}
              <View
                style={{ justifyContent: "flex-end", flexDirection: "row" }}
              >
                <View style={{ flexDirection: "row", marginRight: 65 }}>
                  <Text
                    style={{ fontSize: 30, fontWeight: "bold", color: "white" }}
                  >
                    Travelit
                  </Text>
                </View>

                <TouchableOpacity
                  style={{ marginRight: 0 }}
                  onPress={() => navigation.navigate("Notification")}
                >
                  <Image
                    source={require("../../assest/images/bell.png")}
                    style={{ width: 30, height: 30, borderRadius: 1000 }}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ marginLeft: 20 }}
                  onPress={() => navigation.navigate("Profile")}
                >
                  <Image
                    source={require("../../assest/images/account.png")}
                    style={{ width: 30, height: 30, borderRadius: 1000 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>

        {/* Quick Links */}
        <View style={style.formInput}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity style={{ merginRight: 50 }}>
              <Image
                source={require("../../assest/images/hotel_loho.png")}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 1000,
                  borderColor: "#076ff7",
                  borderWidth: 1,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{ marginLeft: 50 }}
              onPress={() => navigation.navigate("Cab")}
            >
              <Image
                source={require("../../assest/images/car_logo.png")}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 1000,
                  borderColor: "#076ff7",
                  borderWidth: 1,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{ marginLeft: 50 }}
              onPress={() => navigation.navigate("Information")}
            >
              <Image
                source={require("../../assest/images/guide_logo.png")}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 1000,
                  borderColor: "#076ff7",
                  borderWidth: 1,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Main components*/}
        <View
          style={{
            padding: 5,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <View style={style.formInput}>
            <TouchableOpacity
              style={style.maincomponents}
              onPress={() => navigation.navigate("Packages")}
            >
              <Image
                source={require("../../assest/images/package_logo.png")}
                style={{
                  width: 60,
                  height: 60,
                  padding: 10,
                  marginLeft: 40,
                  marginTop: 10,
                  alignItems: "center",
                }}
              />
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 16,
                  fontWeight: "500",
                  color: "white",
                  padding: 30,
                }}
              >
                Packages
              </Text>
            </TouchableOpacity>
          </View>

          <View style={style.formInput}>
            <TouchableOpacity
              style={style.maincomponents}
              onPress={() => navigation.navigate("Booking")}
            >
              <Image
                source={require("../../assest/images/booking_logo.png")}
                style={{
                  width: 60,
                  height: 60,
                  padding: 10,
                  marginLeft: 40,
                  marginTop: 10,
                  alignItems: "center",
                }}
              />
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 16,
                  fontWeight: "500",
                  color: "white",
                  padding: 30,
                }}
              >
                My Booking
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            padding: 5,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <View style={style.formInput}>
            <TouchableOpacity style={style.maincomponents}>
              <Image
                source={require("../../assest/images/feedback_logo.png")}
                style={{
                  width: 60,
                  height: 60,
                  padding: 10,
                  marginLeft: 40,
                  marginTop: 10,
                  alignItems: "center",
                }}
              />
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 16,
                  fontWeight: "500",
                  color: "white",
                  padding: 30,
                }}
              >
                Inquiries & Feedback
              </Text>
            </TouchableOpacity>
          </View>

          <View style={style.formInput}>
            <TouchableOpacity
              style={style.maincomponents}
              onPress={() => navigation.navigate("Aboutus")}
            >
              <Image
                source={require("../../assest/images/aboutus_logo.png")}
                style={{
                  width: 60,
                  height: 60,
                  padding: 10,
                  marginLeft: 40,
                  marginTop: 10,
                  alignItems: "center",
                }}
              />
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 16,
                  fontWeight: "500",
                  color: "white",
                  padding: 30,
                }}
              >
                About Us
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={style.bottomNavBar}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            padding: 5,
          }}
        >
          <TouchableOpacity
            style={{ merginRight: 100 }}
            onPress={() => navigation.navigate("Packages")}
          >
            <Image
              source={require("../../assest/images/package_logo.png")}
              style={{ width: 40, height: 40, borderRadius: 1000 }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginLeft: 100 }}
            onPress={() => navigation.navigate("Dashboard")}
          >
            <Image
              source={require("../../assest/images/dashboard_icon.png")}
              style={{
                width: 40,
                height: 40,
                borderRadius: 1000,
                borderColor: "#076ff7",
                borderWidth: 1,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginLeft: 100 }}
            onPress={() => navigation.navigate("Dashboard")}
          >
            <Image
              source={require("../../assest/images/booking_logo.png")}
              style={{ width: 40, height: 40, borderRadius: 1000 }}
            />
          </TouchableOpacity>
        </View>
        <Button onPress={() => navigation.navigate("Login")}>back</Button>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  defaultbg: {
    marginTop: -30,
    width: "100%",
    height: 125,
  },

  formInput: {
    marginTop: 0,
    padding: 10,
  },

  textInput: {
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#477173",
    borderRadius: 10,
  },

  maincomponents: {
    padding: 12,
    backgroundColor: "#076ff7",
    borderRadius: 10,
    width: 170,
    height: 170,
  },

  bottomNavBar: {
    borderColor: "#edd2fc",
    borderWidth: 1,
    height: 60,
    width: "100%",
    marginTop: 35,
    borderRadius: 20,
    bottom: 0,
    backgroundColor: "#e8e8e8",
    borderColor: "#e9edf0",
  },
});
export default Dashboard;
