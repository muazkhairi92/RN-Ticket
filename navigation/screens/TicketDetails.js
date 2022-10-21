import { StyleSheet, Text, View } from "react-native";


export const TicketDetails = (props) =>{
    const ticket =  props.route.params;


    return(
        <View  style={styles.card}>
            <Text style={styles.text}>#{ticket.item.id}: {ticket.item.title}</Text>
           <Text > Description: {ticket.item.description}</Text>
           <Text > Category: {ticket.item.category}</Text>
           <Text > Priority Level: {ticket.item.level}</Text>
           <Text > Status:{ticket.item.status}</Text>
           <Text > Created By: {ticket.item.support_name}</Text>
           <Text >Assign To: {ticket.item.developer_name}</Text>
      
        </View>

    )

}

const styles = StyleSheet.create({
    text:{
        fontSize:15,
        color:"green",
        fontWeight:"bold",
        marginTop:10
      },  
       card:{
        margin: 10,
        paddingVertical:10,
        paddingHorizontal:10,
        // display:'flex',
        alignItems:"center",
        backgroundColor:"#83C5BE"
      },
      det:{
        flex: 1,
        justifyContent:"space-between",
        width: 80
      }
  });