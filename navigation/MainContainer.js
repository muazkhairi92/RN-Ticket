import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens

import MyTicketScreen from './screens/MyTicketScreen';
import PendingTicketScreen from './screens/PendingTicketScreen';
import CompleteTicketScreen from './screens/CompleteTicketScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import BottomNavigator from './BottomNavigator';
import AuthProvider from '../providers/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Logout from './LogOut';
import { TicketDetails } from './screens/TicketDetails';
// import { MaterialCommunityIcons } from '@expo/vector-icons'; 


//Screen names

const MyTicketName = "MyTicket";
const PendingTicketName = "Pending";
const CompleteTicketName = "Complete";

// const Tab = createBottomTabNavigator();
const TicketStack = createNativeStackNavigator();

const queryClient = new QueryClient;


function MainContainer() {
  return (
    <AuthProvider>
    <QueryClientProvider client={queryClient}>

    <NavigationContainer>
      <TicketStack.Navigator initialRouteName='Login'   screenOptions={{
    headerShown: false
  }}>
      <TicketStack.Screen name={'Login'} component={Login}/>
      <TicketStack.Screen name={'Home'} component={BottomNavigator}/>
      <TicketStack.Screen name={MyTicketName} component={MyTicketScreen} />
    <TicketStack.Screen name={PendingTicketName} component={PendingTicketScreen} />
    <TicketStack.Screen name={CompleteTicketName} component={CompleteTicketScreen} />
    <TicketStack.Screen name={'TicketDetails'} component={TicketDetails} />
    <TicketStack.Screen name={'Logout'} component={Logout}  />
      </TicketStack.Navigator>


    </NavigationContainer>
    </QueryClientProvider>
    </AuthProvider>

  );
}

export default MainContainer;