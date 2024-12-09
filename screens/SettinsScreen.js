import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Card, Title, Paragraph, Appbar, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../navigation/AuthContext';

const SettingsScreen = () => {
 const navigation = useNavigation();
 const { setIsAuthenticated } = useAuth(); // Access setIsAuthenticated from useAuth

 const handleProfilePress = () => {
    navigation.navigate('Profile');
 };

 const handleDevelopersPress = () => {
    navigation.navigate('Developers');
 };

 const handleAboutPress = () => {
    navigation.navigate('About');
 };

 const handleLogoutPress = async () => {
  try {
     const response = await fetch('https://8542-41-81-42-62.ngrok-free.app/api/logout/', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
     });
 
     if (!response.ok) {
       throw new Error('Logout failed');
     }
 
     const data = await response.json();
     console.log(data);
     // After successful logout, update the authentication state to unauthenticated
     setIsAuthenticated(false);
     // Navigate to the login screen
     navigation.reset({
       index: 0,
       routes: [{ name: 'Login' }],
     });
  } catch (error) {
     console.error(error);
     Alert.alert('Error', 'Logout failed. Please try again.');
  }
 };

 return (
  <ScrollView>
    <View>
      {/* <Appbar.Header>
        <Appbar.Content title="" />
      </Appbar.Header> */}

      <Card style={styles.card} onPress={handleProfilePress}>
        <Card.Content>
          <View>
            <Appbar.Action icon="account-circle" color="#2aa8aa" />
          </View>
          <Title>Profile</Title>
          <Paragraph> and edit your profile.</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card} onPress={handleDevelopersPress}>
        <Card.Content>
          <View>
            <Appbar.Action icon="account-circle" color="#2aa8aa" />
          </View>
          <Title>Developers</Title>
          <Paragraph>Learn more about the developers.</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card} onPress={handleAboutPress}>
        <Card.Content>
          <View>
            <Appbar.Action icon="account-circle" color="#2aa8aa" />
          </View>
          <Title>About</Title>
          <Paragraph>Learn more about this app.</Paragraph>
          <IconButton icon="timeline" onPress={() => console.log('Pressed but should be removed am here for testing:)')} />
        </Card.Content>
      </Card>

      <Card style={styles.card} onPress={handleLogoutPress}>
        <Card.Content>
          <View>
            <Appbar.Action icon="logout" color="#2aa8aa" />
          </View>
          <Title>Logout</Title>
          <Paragraph>Log out of your account.</Paragraph>
        </Card.Content>
      </Card>
    </View>
    </ScrollView>
    
 );
};

const styles = StyleSheet.create({
 card: {
    margin: 10,
    borderRadius: 2,
 },
});

export default SettingsScreen;
