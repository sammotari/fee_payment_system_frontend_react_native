import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AboutScreen = () => {
 return (
    <View style={styles.container}>
      <Text style={styles.title}>About Fee Payment System</Text>
      <Text style={styles.description}>
        <Text style={{color: '#2aa8aa'}}>
          This is a comprehensive fee payment system designed to streamline the process of managing and paying school fees. It provides a user-friendly interface for students, parents, and administrators to easily access, view, and pay their school fees.
        </Text>
        {'\n\n'}
        <Text style={{color: '#2aa8aa'}}>
          The system ensures secure transactions, reduces paperwork, and offers real-time updates on fee status. This not only enhances the efficiency of fee management but also improves the overall experience for all stakeholders involved.
        </Text>
        {'\n\n'}
        <Text style={{color: '#2aa8aa'}}>
          By leveraging modern technology and design principles, our fee payment system aims to revolutionize the way school fees are handled, making it more accessible, transparent, and convenient for everyone.
        </Text>
      </Text>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
 },
 title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'tomato',
    marginBottom: 20,
 },
 description: {
    fontSize: 16,
    textAlign: 'center',
    color: 'tomato',
 },
});

export default AboutScreen;
