import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';

import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import useAuth from '../hooks/useAuth';
// import { signIn } from './api/users';


export default function Login(props) {
  const {signin,user,token} = useAuth();
  const [err,setEr] = useState();


    const { handleChange, handleSubmit, values } = useFormik({
        validationSchema: LoginSchema,
        initialValues: { email: '', password: '' },
        onSubmit: values =>{
          signin(values,props);
          // if(data?.data.message){
          // props.navigation.navigate("Home")
          // }
          // else{
          //   setEr(err);
          // }
        }
      });
      const LoginSchema = Yup.object().shape({
        email: Yup.string().
        email('invalid email address')
        .required("Required"),
        password: Yup.string().
        min(8,"Must be at least 8 character")
        .required("Required")
      });




  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={{ color: '#223e4b', fontSize: 30, marginBottom: 50 }}>
        Solver System
      </Text>

      <View style={{ paddingHorizontal: 32, marginBottom: 16, width:250}}>
        <TextInput
          icon='mail'
          placeholder='Enter your email'
          autoCapitalize='none'
          autoCompleteType='email'
          keyboardType='email-address'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          onChangeText={handleChange('email')}
        />
        {/* <ErrorMessage name="email"/> */}
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width:250 }}>
        <TextInput
          icon='key'
          placeholder='Enter your password'
          secureTextEntry
          autoCompleteType='password'
          autoCapitalize='none'
          keyboardAppearance='dark'
          returnKeyType='go'
          returnKeyLabel='go'
          onChangeText={handleChange('password')}

        />
      </View>
      <Button label='Login' onPress={handleSubmit} style={styles.Button} />
      {err?<Text>Not Registered</Text>:null}
    
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Button:{
    backgroundColor:"#006D77"
  }
})
