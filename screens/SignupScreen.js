import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RegistrationScreen = ({ navigation }) => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [firstName, setFirstName] = useState('');
 const [lastName, setLastName] = useState('');
 const [userType, setUserType] = useState('STUDENT'); // Default to 'STUDENT'

 const handleRegistration = async () => {
    try {
      const response = await fetch('https://8542-41-81-42-62.ngrok-free.app/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          first_name: firstName,
          last_name: lastName,
          user_type: userType,
        }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      console.log(data);
      // Handle successful registration (e.g., navigate to login screen)
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Registration failed. Please try again.');
    }
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
      <Text style={styles.title}>Signup</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        onChangeText={setFirstName}
        value={firstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={setLastName}
        value={lastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegistration} color='#2aa8aa'/>

      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
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
 input: {
    height: 40,
    borderColor: '#CED4DA',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: '#FFFFFF',
 },
 link: {
    marginVertical: 10,
 },
 linkText: {
    color: '#2aa8aa',
    textDecorationLine: 'underline',
 },
});

export default RegistrationScreen;





// https://9f6e-105-166-217-14.ngrok-free.app/api/register/