import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, TouchableOpacity, TextInput, ImageBackground,Pressable, TouchableHighlight, Dimensions} from 'react-native';
import MainContainer from './navigation/MainContainer';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from './navigation/Login';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

// import im from "./assets/ticketing.png"

export default function App() {
  return (
    <View style={{width:WIDTH, height:HEIGHT}}>
      <MainContainer/>
      {/* <Login/> */}
      {/* <AllTickets/> */}
      <StatusBar style="auto"/>
   

    </View>
  );
}


