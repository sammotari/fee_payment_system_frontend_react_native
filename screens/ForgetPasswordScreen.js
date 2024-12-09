import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { useAuth } from '../navigation/AuthContext';
import Icon from 'react-native-vector-icons/FontAwesome';


const SomeComponent = () => {
    const { isAuthenticated, setIsAuthenticated } = useAuth();
   
    // Use isAuthenticated and setIsAuthenticated as needed
    return (
       <div>
         {isAuthenticated ? 'Logged In' : 'Not Logged In'}
       </div>
    );
   };

const ForgetPasswordScreen = ({ navigation }) => {
 const [email, setEmail] = useState('');

 const handleForgetPassword = () => {
    // Implement forget password logic here
    console.log('Forget password for email:', email);
    //  navigate to the login screen after resetting password
   navigation.navigate('Login');
 };

 return (
    <View style={styles.container}>
    <Icon
        name="cog" // Choose the icon you want to use
        size={200} // Adjust the size as needed
        color="#2aa8aa" // Adjust the color as needed
        style={styles.icon}
      />
      <Text style={styles.iconText}>Pay Fee</Text> 
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <Button title="Reset Password" onPress={handleForgetPassword} color='#2aa8aa'/>
    </View>
 );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'top',
      paddingHorizontal: 20,
      backgroundColor: '#F5F5F5',
   },
   icon: {
      alignSelf: 'center',
      marginBottom: 20, // Add some space below the icon
   },
   iconText: {
    alignSelf: 'center',
    fontSize: 24, // Adjust the font size as needed
    color: '#2aa8aa', // Adjust the color as needed
    marginBottom: 20, // Add some space below the text
  },
   title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#2aa8aa',
   },
   link: {
      marginVertical: 10,
      
   },
   linkText: {
      color: '#2aa8aa',
      textDecorationLine: 'underline',
   },
   input: {
      height: 40,
      borderColor: '#CED4DA',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 10,
      paddingLeft: 10,
      backgroundColor: '#FFFFFF',
   },
});

export default ForgetPasswordScreen;


