import { StyleSheet, Text, View } from "react-native";


export const TicketDetails = (props) =>{
    const ticket =  props.route.params;


    return(
        <View  style={styles.card}>
            <Text style={styles.text}>#{ticket.id}: {ticket.title}</Text>
           <View style={styles.det}><Text > Description:</Text><Text> {ticket.description}</Text></View>
           <View style={styles.det}><Text > Category:</Text><Text> {ticket.category}</Text></View>
           <View style={styles.det}><Text > Priority Level:</Text><Text> {ticket.level}</Text></View>
           <View style={styles.det}><Text > Status:</Text><Text> {ticket.status}</Text></View>
           <View style={styles.det}><Text > Created By:</Text><Text> {ticket.support_name}</Text></View>
           <View style={styles.det}><Text >Assign To: </Text><Text> {ticket.developer_name}</Text></View>
      
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