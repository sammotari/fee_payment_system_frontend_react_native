import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
 const [userNames, setUserNames] = useState({ firstName: 'sam', lastName: '' });
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
  fetchUserData();
  }, []);


  const handleMpesa = () => {
     navigation.navigate('MpesaPay');
  };
 
  const handleKCB = () => {
     navigation.navigate('KCBPayment');
  };
 

 const [feeBalance, setFeeBalance] = useState(0.00);
 

 const fetchUserData = async () => {
  try {
    const response = await fetch('https://e1a8-105-161-223-49.ngrok-free.app/api/user-name/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Include any authentication headers here, e.g., for JWT tokens
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    setUserNames({ firstName: data.first_name, lastName: data.last_name });
  } catch (error) {
    console.error('There was a problem with your fetch operation: ', error);
    setError(error.message);
  } finally {
    setIsLoading(false);
  }
};

// if (isLoading) {
//   return <ActivityIndicator size="large" color="#0000ff" />;
// }

// if (error) {
//   return <Text>Error: {error}</Text>;
// }


 return (
  <View style={styles.container}>
    {/* Big Card at the top */}
    <Card style={styles.bigCard}>
      <Card.Content>
        <Title style={styles.title1}>Welcome {userNames.firstName} {userNames.lastName}</Title>
        <Title style={styles.title}>Fee Balance</Title>
        <Paragraph style={styles.paragraph}>Current Balance: Ksh. {feeBalance}</Paragraph>
      </Card.Content>
    </Card>

    {/* Two Small Cards with Links */}
    <View style={styles.smallCardsContainer}>
      {/* Left Small Card */}
      <Card style={styles.smallCard}>
        <Card.Content>
          <Title style={styles.title}>Pay With MPESA</Title>
          <Paragraph style={styles.paragraph}>Click below to pay your fee with mpesa.</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={handleMpesa} style={styles.button}>Pay Fee</Button>
        </Card.Actions>
      </Card>

      {/* Right Small Card */}
      <Card style={styles.smallCard}>
        <Card.Content>
          <Title style={styles.title}>Pay with KCB</Title>
          <Paragraph style={styles.paragraph}>Click below to pay with bank</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={handleKCB} style={styles.button}>Pay Fee</Button>
        </Card.Actions>
      </Card>
    </View>

    {/* Bottom Card */}
    <Card style={styles.bottomCard}>
      <Card.Content>
        <Title style={styles.title}>About this system.</Title>
        <Paragraph style={styles.paragraph}>
          The system is a React Native mobile application for school fee payment,
          featuring an intuitive interface. It includes modules for fee management,
          payment details, and settings, with a visually appealing design that
          showcases school information, including a customizable photo.
        </Paragraph>
      </Card.Content>
    </Card>
  </View>
);
};

const styles = StyleSheet.create({
 container: {
    margin: 4,
    backgroundColor: '#F5F5F5', // Light grey background
 },
 bigCard: {
    marginBottom: 16,
    marginTop: 30,
    padding: 20,
    borderRadius: 0, // Sharp edges
    backgroundColor: '#FFFFFF', // White background
 },
 smallCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
 },
 smallCard: {
    flex: 1,
    marginHorizontal: 8,
    borderRadius: 3, // Sharp edges
    backgroundColor: '#FFFFFF', // White background
 },
 bottomCard: {
    marginVertical: 16,
    padding: 20,
    borderRadius: 3, // Sharp edges
    backgroundColor: '#FFFFFF', // White background
 },
 title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2aa8aa', // green shade
 },
 title1:{
  fontSize: 23,
    fontWeight: 'bold',
    color: '#3aa8aa', // green shade

 },
 paragraph: {
    fontSize: 15,
    fontWeight: '400',
    color: '#000', // black shade
 },
 button: {
    backgroundColor: '#2aa8aa', // Tomato shade
    borderRadius: 3, // Sharp edges
 },
});

export default HomeScreen;
