import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { useAuth } from '../navigation/AuthContext';

const LoginScreen = ({ navigation }) => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const { setIsAuthenticated } = useAuth();

 const handleLogin = async () => {
    try {
      const response = await fetch('https://8542-41-81-42-62.ngrok-free.app/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log(data);
      // Handle successful login (e.g., navigate to home screen)
      setIsAuthenticated(true);
      navigation.navigate('TabGroup');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Login failed. Please try again.');
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
      <Text style={styles.title}>Login Screen</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        autoCapitalize="none"
      />
      <Button title="Login" onPress={handleLogin} color='#2aa8aa' />

      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.linkText}>Go to Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.navigate('ForgetPassword')}
      >
        <Text style={styles.linkText}>Go to Forget Password</Text>
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

export default LoginScreen;

