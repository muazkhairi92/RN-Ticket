import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import * as React from 'react';
import { View, Text, FlatList, Pressable, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { delTicket } from '../../api/ticket';
import useAuth from '../../hooks/useAuth';

export default function CompleteTicketScreen(props ) {
    const {token,user} = useAuth();

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
      const fetchTicket= ()=>{
        return  axios.get('https://ticket1a-app.herokuapp.com/api/ticket',config)
    };

    
      const {data, isLoading,isError,error,isFetching,refetch} = useQuery(["tick"],fetchTicket,{
        enabled:true,
        onSuccess:(res)=>{console.log('tahniah',res);
    },
    onError:(res)=>{console.log('error',res)}
    });
    
    if (isLoading) {
        return <Text>Loading</Text>
      }
      if (isError) {
        return <Text>Error! {error.message}</Text>
      }
    const Tickets = data?.data?.data;

    const Cards = ({item, index})=>{
        const onPress =()=>{props.navigation.navigate("TicketDetails",{item})}
                if(item.status === "complete" ){

        return(
              <Pressable onPress={onPress} style={styles.card}>
                <Text style={styles.text}>#{item.id}: {item.title}</Text>
                  <Text > Description: {item.description}</Text>
                  <Text > Created By: {item.support_name}</Text>
                  <Text >Assign To: {item.developer_name}</Text>
            
              </Pressable>
              // </MotiView>
        )
        }
    }
        

    return (
        <SafeAreaView style={{flex:1}} >
        <ScrollView contentContainerStyle={[styles.container]}> 
                <FlatList  
          data={Tickets} 
        //   contentContainerStyle={styles.list}
          renderItem={Cards}
          showsHorizontalScrollIndicator={false}
          />
      </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      // flex: 1,
      backgroundColor: '#ecf0f3',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
  
    text:{
      fontSize:15,
      color:"black",
      fontWeight:"bold",
      marginTop:10
    },
    image:{
      width:300,
          height:400,
          alignItems: 'center',
          justifyContent: 'center',
    },
    button:{
      padding:10,
      backgroundColor:"white",
      borderRadius:10
    },
    input:{
      width:"90%",
      padding:10,
      marginVertical:10,
      backgroundColor:"grey"
    },
    ticket:{
      paddingLeft:20,
      paddingTop:30,
      paddingBottom:30,
      width:150,
      marginTop:20,
      backgroundColor:"#1DA1F2",
      borderRadius:30,
      marginLeft:10,
      justifyContent:'center',
      alignItems:'center'
      
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    list:{
        paddingVertical:10,
        paddingHorizontal:10,
        marginBottom:10,
        alignItems:"center",
        backgroundColor:"gray"
      },
      card:{
        margin: 10,
        display:'flex',
        alignItems:"center",
        backgroundColor:"#83C5BE",
        padding: 2,
        boxShadow: "0px 0px 9px 0px rgba(0,0,0,0.1)"
      }
    
    //   det:{
    //     flex: 1,
    //     justifyContent:"space-between",
    //     width: 200,
    //     height:50,
    //     overflowWrap: "break-word"
    //   }
  });