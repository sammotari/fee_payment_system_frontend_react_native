import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Checkbox, Snackbar } from 'react-native-paper';
import axios from 'axios';

const RefundFormScreen = () => {
 const [registrationNumber, setRegistrationNumber] = useState('');
 const [amount, setAmount] = useState('');
 const [refundAccount, setRefundAccount] = useState('');
 const [reason, setReason] = useState('');
 const [isChecked, setIsChecked] = useState(false);
 const [snackbarVisible, setSnackbarVisible] = useState(false);

 const handleSubmit = () => {
    if (!isChecked) {
      return;
    }

    const refundRequestData = {
      student: registrationNumber, // Now using registration number
      amount,
      refund_account: refundAccount,
      reason,
      // The status is not included here as it will be set to 'PENDING' by default on the backend
    };

    axios.post('https://2443-41-90-69-124.ngrok-free.app/api/submit-refund-request/', refundRequestData)
      .then(response => {
        if (response.status === 201) {
          setSnackbarVisible(true);
          setRegistrationNumber('');
          setAmount('');
          setRefundAccount('');
          setReason('');
          setIsChecked(false);
        } else {
          // Handle error
          console.error(response.data);
        }
      })
      .catch(error => {
        // Handle network error
        console.error(error);
      });
 };

 return (
    <View style={styles.container}>
      <TextInput
        label="Registration Number"
        value={registrationNumber}
        onChangeText={(text) => setRegistrationNumber(text)}
        style={styles.input}
      />
      <TextInput
        label="Refund Amount"
        value={amount}
        onChangeText={(text) => setAmount(text)}
        style={styles.input}
      />
      <TextInput
        label="Refund Account"
        value={refundAccount}
        onChangeText={(text) => setRefundAccount(text)}
        style={styles.input}
      />
      <TextInput
        label="Reason for Refund"
        value={reason}
        onChangeText={(text) => setReason(text)}
        style={styles.input}
      />
      <Checkbox.Item
        label="I have read and accept the terms and conditions for refund."
        status={isChecked ? 'checked' : 'unchecked'}
        onPress={() => setIsChecked(!isChecked)}
      />
      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Submit
      </Button>

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
        style={styles.snackbar}
      >
        Refund request submitted!
      </Snackbar>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    padding: 16,
    backgroundColor: '#f0f0f0', // Light grey background
 },
 input: {
    marginBottom: 12,
    backgroundColor: '#e0e0e0', // Slightly darker grey for inputs
 },
 button: {
    marginTop: 16,
    backgroundColor: '#2aa8aa', // Tomato color for the button
 },
 snackbar: {
    backgroundColor: '#2aa8aa', // Blue background for the snackbar
    position: 'absolute',
    top: 0,
 },
});

export default RefundFormScreen;