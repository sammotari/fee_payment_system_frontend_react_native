import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

const PaymentHistory = ({ payments = [] }) => {
 const renderDefaultPaymentCard = () => (
    <Card style={styles.card}>
      <Card.Content>
        <Title style={styles.title}>Payment IDw: 0000</Title>
        <Paragraph style={styles.paragraph}>Amount: $0.00</Paragraph>
        <Paragraph style={styles.paragraph}>Date: MM/DD/YYYY</Paragraph>
      </Card.Content>
      <Card.Actions style={styles.actions}>
        <Button onPress={() => generateAndDownloadReceipt('0000')} style={[styles.button, {color: 'white'}]}>Download Receipt</Button>
        {/* <Button onPress={() => console.log('View Details')} style={styles.button}>View Details</Button> */}
      </Card.Actions>
    </Card>
 );

 const generateAndDownloadReceipt = async (paymentId) => {
    const receiptContent = `Receipt for Payment ID: ${paymentId}\nAmount: $0.00\nDate: MM/DD/YYYY`;
    const path = `${FileSystem.documentDirectory}Receipt_${paymentId}.txt`;
    await FileSystem.writeAsStringAsync(path, receiptContent);

    if (!(await Sharing.isAvailableAsync())) {
      alert('Sharing is not available on this device');
      return;
    }

    await Sharing.shareAsync(path);
 };

 return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Fee Payment History</Text>
      <Text style={styles.paragraph}>All the fee payments are displayed here. You can download all payment receipts made here.</Text>
      {payments.length > 0 ? (
        payments.map(payment => (
          <Card key={payment.id} style={styles.card}>
            <Card.Content>
              <Title style={styles.title}>{`Payment ID: ${payment.id}`}</Title>
              <Paragraph style={styles.paragraph}>{`Amount: ${payment.amount}`}</Paragraph>
              <Paragraph style={styles.paragraph}>{`Date: ${payment.date}`}</Paragraph>
            </Card.Content>
            <Card.Actions style={styles.actions}>
              {/* <Button onPress={() => generateAndDownloadReceipt(payment.id)} style={[styles.button, {color: 'white'}]}>Download Receipt</Button> */}
              {/* <Button onPress={() => console.log('View Details')} style={styles.button}>View Details</Button> */}
            </Card.Actions>
          </Card>
        ))
      ) : (
        renderDefaultPaymentCard()
      )}
    </SafeAreaView>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5', // Light grey background
 },
 headerText: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#2aa8aa', // Blue shade
 },
 card: {
    marginBottom: 16,
    backgroundColor: '#FFFFFF', // White background for cards
    borderRadius: 8,
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.25, // Shadow opacity for iOS
    shadowRadius: 3.84, // Shadow radius for iOS
 },
 title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2aa8aa', // Blue shade
 },
 paragraph: {
    fontSize: 14,
    color: '#000', // Blue shade
 },
 actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
 },
 button: {
    backgroundColor: '#2aa8aa', // Tomato shade
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
 },
});

export default PaymentHistory;