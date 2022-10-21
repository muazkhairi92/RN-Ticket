import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Logout from "./LogOut";
import CompleteTicketScreen from "./screens/CompleteTicketScreen";
import MyTicketScreen from "./screens/MyTicketScreen";
import PendingTicketScreen from "./screens/PendingTicketScreen";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 



const MyTicketName = "MyTicket";
const PendingTicketName = "Pending";
const CompleteTicketName = "Complete";
const BottomNavigator=()=>{
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator 
        
        screenOptions={({ route }) => ({
            tabBarIcon: () => {
              let rn = route.name;  
              if (rn === 'Logout') {
              // You can return any component that you like here!
              return <MaterialCommunityIcons name="logout" size={24} color="black" />;
              }
            },
            tabBarLabelStyle:{
            color:"#006D77",
            fontSize: 20,
            activeTintColor: '#ecf0f3',
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 10,  },
            style: { padding: 10, height: 120}
            }
            
        })}
     >
<Tab.Screen name={MyTicketName} component={MyTicketScreen} />
    <Tab.Screen name={PendingTicketName} component={PendingTicketScreen} />
    <Tab.Screen name={CompleteTicketName} component={CompleteTicketScreen} />
    <Tab.Screen name={'Logout'}  component={Logout}/>

        </Tab.Navigator>

    )
}
export default BottomNavigator