import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { View, Text, Dimensions } from 'react-native';
import CompleteTicketScreen from './screens/CompleteTicketScreen';
import MyTicketScreen from './screens/MyTicketScreen';
import PendingTicketScreen from './screens/PendingTicketScreen';

const MyTicketName = "MyTicket";
const PendingTicketName = "PendingTicket";
const CompleteTicketName = "CompleteTicket";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const Tab = createBottomTabNavigator();


export default function HomeScreen({ navigation }) {
    const BottomTab = ()=>{
        <Tab.Navigator initialRouteName={MyTicketName}> 
        <Tab.Screen name={MyTicketName} component={MyTicketScreen} />
        <Tab.Screen name={PendingTicketName} component={PendingTicketScreen} />
        <Tab.Screen name={CompleteTicketName} component={CompleteTicketScreen} />
      </Tab.Navigator>
     }


    return (
        <View style={{width:WIDTH, height:HEIGHT}}>
            {/* <Text
                style={{ fontSize: 26, fontWeight: 'bold' }}>Home Tickets</Text> */}
        </View>
    );
}