import * as React from 'react';
import { Button, View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Login screen
function LoginScreen({ navigation }) {
  return (
    <View style={styles.view}>
      <Image
        source={require('./assets/logo1.png')}
        style={{ width: 250, height: 250, marginBottom: 30,}}
      />

      <TextInput style={{height: 40, width: 250, margin: 12, borderWidth: 1, borderRadius: 10, padding: 10,}} 
      placeholder="Username" keyboardType="text"/>

      <TextInput style={{height: 40, width: 250, margin: 12, borderWidth: 1, borderRadius: 10, padding: 10,}}  
      placeholder="paaaaaaas" keyboardType="text" secureTextEntry={true}
      />

      <TouchableOpacity style={{alignItems: "center", padding: 5, marginLeft:150, marginBottom: 20}} 
      onPress={() => navigation.navigate('Reset Password')}>
        <Text style={{color: "#0000ff"}}>forgot password</Text>
      </TouchableOpacity>

      <Button title="Sing in" onPress={() => navigation.navigate('Dashboard')}/>
      <h2>or</h2>
      <Button title="Register" onPress={() => navigation.navigate('Register')}/>
    </View>
  );
}
// Reset password screen
function ResetScreen({ navigation }) {
  return (
    <View style={styles.view}> 
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6357/6357048.png' }}
        style={{ width: 200, height: 200, marginBottom: 60,}}
      />
      <Text style={{fontSize:20, margin: 30, textAlign:'center'}}>Enter the username and email of your account. Check your email we will send the link to reset your password.</Text>

      <TextInput style={{height: 40, width: 250, margin: 12, borderWidth: 1, borderRadius: 10, padding: 10,}} 
      placeholder="Enter username" keyboardType="text"/>

      <TextInput style={{height: 40, width: 250, margin: 15, borderWidth: 1, borderRadius: 10, padding: 10,}}  
      placeholder="Enter e-mail" keyboardType="text"/>

      <Button title="Reset" onPress={() => navigation.navigate('Login')}/>
    </View>
  );
}

// Register screen
function RegisterScreen({ navigation }) {  
  return (
    <View style={styles.view}>
      <Image
        source={{ uri: 'https://cdn1.iconfinder.com/data/icons/app-7/48/222-512.png' }}
        style={{ width: 200, height: 200, marginBottom: 60,}}
      />

      <TextInput style={{height: 40, width: 250, margin: 12, borderWidth: 1, borderRadius: 10, padding: 10,}} 
       placeholder="Enter Name" keyboardType="text"/>

      <TextInput style={{height: 40, width: 250, margin: 12, borderWidth: 1, borderRadius: 10, padding: 10,}} 
       placeholder="Enter City" keyboardType="text"/>

      <TextInput style={{height: 40, width: 250, margin: 12, borderWidth: 1, borderRadius: 10, padding: 10,}} 
       placeholder="Enter Phone Number" keyboardType="text"/>

      <TextInput style={{height: 40, width: 250, margin: 12, borderWidth: 1, borderRadius: 10, padding: 10,}} 
       placeholder="Enter e-mail" keyboardType="text"/>

      <Button style={{marginTop: 60}} title="Register" onPress={() => navigation.navigate('Login')}/>
    </View>
  );
}

// Dashboard screen
function DashboardScreen({ navigation }) {
  return (
    <View style={{padding:5,flex: 1, justifyContent:'space-around', alignItems: 'center', backgroundColor:'white'}}>

          <TouchableOpacity style={{flex: 1, flexDirection:'column', justifyContent:'center', alignItems: 'center', backgroundColor:'#1c4c82', marginTop: 20, marginBottom: 20, width:"90%", borderRadius: 10,}}
          onPress={()=>navigation.navigate('LP Gas Types')}>
            
            <View style={{ width: 80, height: 80, backgroundColor:'white', borderRadius: 100, justifyContent:'center', alignItems: 'center'}}>
              <Image 
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3514/3514930.png' }}
                style={{ width: 50, height: 50,}}
              />
            </View>
            <Text style={{textAlign:'center', fontWeight:'bold',fontSize:30,padding:20, color:'white'}}>LP Gas</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={{flex: 1, flexDirection:'column', justifyContent:'center', alignItems: 'center', backgroundColor:'#1c4c82', marginTop: 20, marginBottom: 20, width:"90%", borderRadius: 10,}}
          onPress={()=>navigation.navigate('Live Queue Map')}>
            <View style={{ width: 80, height: 80, backgroundColor:'white', borderRadius: 100, justifyContent:'center', alignItems: 'center'}}>
              <Image 
                source={{ uri: 'https://www.iconpacks.net/icons/2/free-location-map-icon-2956-thumb.png' }}
                style={{ width: 50, height: 50,}}
              />
            </View>
            <Text style={{textAlign:'center', fontWeight:'bold',fontSize:30,padding:20, color:'white'}}>Live Queue Map</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={{flex: 1, flexDirection:'column', justifyContent:'center', alignItems: 'center', backgroundColor:'#1c4c82', marginTop: 20, marginBottom: 20, width:"90%", borderRadius: 10,}}
          onPress={()=>navigation.navigate('Notifications')}>
            <View style={{ width: 80, height: 80, backgroundColor:'white', borderRadius: 100, justifyContent:'center', alignItems: 'center'}}>
              <Image 
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2645/2645883.png' }}
                style={{ width: 50, height: 50,}}
              />
            </View>
            <Text style={{textAlign:'center', fontWeight:'bold',fontSize:30,padding:20, color:'white'}}>Notifications</Text>
          </TouchableOpacity>
      </View>
  );
}


// LP Gas Types screen
function GasTypes({ navigation }) {
  return (
    <View style={{padding:5,flex: 1, alignItems: 'center', backgroundColor:'white'}}>
      <Image
        source={{ uri: 'http://s3.amazonaws.com/themorning-aruna/wp-content/uploads/2021/08/07214622/gas-cylinders-single.png' }}
        style={{ width: 160, height: 160, marginBottom: 70, marginTop: 20}}
      />

      <TouchableOpacity style={{width:"65%", height:80, backgroundColor:'#007DEC', borderRadius: 10, marginTop:30}}
      onPress={()=>navigation.navigate('Litro')}>
        <Text style={{textAlign:'center', fontWeight:'bold',fontSize:30,color:'white',padding:20}}>Litro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{width:"65%", height:80, backgroundColor:'#EACE05', borderRadius: 10, marginTop:30}}
      onPress={()=>navigation.navigate('Laugfs')}>
        <Text style={{textAlign:'center', fontWeight:'bold',fontSize:30,color:'white',padding:20}}>Laugfs</Text>
      </TouchableOpacity>
    </View>
  );  
}

// Litro details
function LitroDetails() {
  return (
    
    <View style={styles.view}>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Litro_Gas_Lanka.png' }}
        style={{ width: 100, height: 100, marginBottom: 60,}}
      />
      <h2>Available Sizes</h2>
      <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20}}>
        <Text style={{fontSize: 17, fontWeight: 400}}>5 Kg</Text>
        <Text style={{fontSize: 17, fontWeight: 400}}>12.5 Kg</Text>
        <Text style={{fontSize: 17, fontWeight: 400}}>37.5 Kg</Text>
      </View>
      <h2>Check Availability</h2>
      <TextInput 
        style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10}}
        placeholder="Weight of LP Gas"
      />

      <TextInput 
        style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10, marginTop:20}}
        placeholder="District"
      />

      <TextInput 
        style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10, marginTop:20,marginBottom:20}}
        placeholder="City or Town"
      />
      <Button title="Search"/>
    </View>
    
  );
}
// Laugfs details
function LaugfsDetails() {
  return (  

    <View style={styles.view}>
      <Image
        source={{ uri: 'https://bull.lk/profile_image/1020_1536297346.jpeg' }}
        style={{ width: 210, height: 101, marginBottom: 60,}}
      />
      <h2>Available Sizes</h2>
      <View style={{flexDirection:'column', alignItems: 'center', justifyContent: 'space-between',}}>
        <Text style={{fontSize: 17, fontWeight: 400}}>5 Kg</Text>
        <Text style={{fontSize: 17, fontWeight: 400}}>12.5 Kg</Text>
        <Text style={{fontSize: 17, fontWeight: 400}}>37.5 Kg</Text>
      </View>
      <h2>Check Availability</h2>
      <TextInput 
        style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10, marginTop:20}}
        placeholder="Weight of LP Gas"
      />

      <TextInput 
        style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10, marginTop:20}}
        placeholder="District"
      />

      <TextInput 
        style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10, marginTop:20,marginBottom:20}}
        placeholder="City or Town"
      />
      <Button title="Search"/>
    </View>

  );
}

// Live Queue Map screen
function MapScreen() {
  return (
    <View style={styles.view}>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
            <TextInput style={{borderColor:'black', fontSize:15, borderWidth:1, borderRadius:10, padding:10, margin: 10}}
            placeholder="Enter your location"/>

            <Button title="Search"/>
      </View>
      <Image
        source={{ uri: 'https://developers.google.com/static/maps/documentation/android-sdk/images/camera-angle-45-shot.png' }}
        style={{ width: 320, height: 450, marginBottom: 20, marginTop: 20}}
      />
    </View>
  );
}
// Notifications screen
function NotificationScreen() {
  return (
    <ScrollView>
      <View style={{padding:15,flex: 1, alignItems: 'center', backgroundColor:'white',}}>
          <View style={{padding:20, backgroundColor:'#1c4c82', width:"100%", borderRadius: 10, marginBottom: 17}}>
            <Text style={{fontSize:15, color: 'white'}}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
            </Text>

            <Text style={{color:'yellow', fontSize: 14, marginTop: 5, textAlign:'center'}}>read more..</Text>
          </View>

          <View style={{padding:20, backgroundColor:'#1c4c82', width:"100%", borderRadius: 10, marginBottom: 17}}>
            <Text style={{fontSize:15, color: 'white'}}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.
            </Text>

            <Text style={{color:'yellow', fontSize: 14, marginTop: 5, textAlign:'center'}}>read more..</Text>
          </View>

          <View style={{padding:20, backgroundColor:'#1c4c82', width:"100%", borderRadius: 10, marginBottom: 17}}>
            <Text style={{fontSize:15, color: 'white'}}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed.
            </Text>

            <Text style={{color:'yellow', fontSize: 14, marginTop: 5, textAlign:'center'}}>read more..</Text>
          </View>

          <View style={{padding:20, backgroundColor:'#1c4c82', width:"100%", borderRadius: 10, marginBottom: 17}}>
            <Text style={{fontSize:15, color: 'white'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat.
            </Text>

            <Text style={{color:'yellow', fontSize: 14, marginTop: 5, textAlign:'center'}}>read more..</Text>
          </View>

          <View style={{padding:20, backgroundColor:'#1c4c82',width:"100%", borderRadius: 10, marginBottom: 17}}>
            <Text style={{fontSize:15, color: 'white'}}>
              Lorem ipsum dolor sit amet uer adipiscing elit.
            </Text>

            <Text style={{color:'yellow', fontSize: 14, marginTop: 5, textAlign:'center'}}>read more..</Text>
          </View>
      </View>
    </ScrollView>
  );
}   


const Stack = createNativeStackNavigator();

// main function
function App() {
  return (
    // navigator
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Reset Password" component={ResetScreen} />
        <Stack.Screen name="LP Gas Types" component={GasTypes} />
        <Stack.Screen name="Live Queue Map" component={MapScreen} />
        <Stack.Screen name="Notifications" component={NotificationScreen} />
        <Stack.Screen name="Litro" component={LitroDetails} />
        <Stack.Screen name="Laugfs" component={LaugfsDetails} />
      </Stack.Navigator>
    </NavigationContainer>


  );
}

// styles
const styles = StyleSheet.create({
  view: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    padding: 5,
    backgroundColor:'white'
  },
});

export default App;