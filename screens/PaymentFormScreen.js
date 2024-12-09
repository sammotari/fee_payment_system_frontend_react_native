import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';

const PaymentFormScreen = () => {
 const [mobileNumber, setMobileNumber] = useState('');
 const [amount, setAmount] = useState('');
 const [isModalVisible, setModalVisible] = useState(false);

 const navigation = useNavigation();

 const handlePayPress = () => {
    const mobileNumberRegex = /^\d{1,10}$/;
    const amountRegex = /^\d+$/;

    if (mobileNumberRegex.test(mobileNumber) && amountRegex.test(amount)) {
      setModalVisible(true);
    } else {
      Alert.alert('Invalid Input', 'Please check mobile number and amount.');
    }
 };

 const handleCancelPress = () => {
    setModalVisible(false);
    setMobileNumber('');
    setAmount('');
 };

 const handleSubmitPress = () => {
    try {
      // Perform the payment processing logic and send data to the backend (Django)
      // ...

      setModalVisible(false);
      navigation.goBack();
    } catch (error) {
      Alert.alert('Payment Error', 'An error occurred while processing the payment.');
    }
 };

 return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Mobile Number:</Text>
      <TextInput
        style={styles.input}
        value={mobileNumber}
        onChangeText={setMobileNumber}
        keyboardType="numeric"
        accessibilityLabel="Enter Mobile Number"
      />
      <Text style={styles.label}>Enter Amount:</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        accessibilityLabel="Enter Amount"
      />
      <TouchableOpacity onPress={handlePayPress} style={styles.button} accessibilityLabel="Pay">
        <Text style={styles.buttonText}>Pay</Text>
      </TouchableOpacity>

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Verify Payment</Text>
          <Text style={styles.modalText}>Mobile Number: {mobileNumber}</Text>
          <Text style={styles.modalText}>Amount: {amount}</Text>
          <TouchableOpacity onPress={handleCancelPress} style={styles.modalButton} accessibilityLabel="Cancel Payment">
            <Text style={styles.buttonText}>Cancel Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSubmitPress} style={styles.modalButton} accessibilityLabel="Submit Payment">
            <Text style={styles.buttonText}>Submit Payment</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
 );
};

const styles = StyleSheet.create({
  container: {
     flex: 1,
     justifyContent: 'center',
     paddingHorizontal: 20,
     backgroundColor: '#F5F5F5', // This color is already defined in HomeScreen.js styles
  },
  label: {
     fontSize: 16,
     color: '#2aa8aa', // Updated color to match HomeScreen.js
     marginBottom: 8,
  },
  input: {
     height: 40,
     borderColor: '#E0E0E0',
     borderWidth: 1,
     borderRadius: 8,
     marginBottom: 16,
     paddingHorizontal: 16,
     backgroundColor: '#FFFFFF',
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.25,
     shadowRadius: 3.84,
     elevation: 5,
  },
  button: {
     margin: 16,
     padding: 12,
     backgroundColor: '#2aa8aa', // Updated color to match HomeScreen.js
     alignItems: 'center',
     borderRadius: 8,
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.25,
     shadowRadius: 3.84,
     elevation: 5,
  },
  buttonText: {
     color: '#FFFFFF', // This color is already defined in HomeScreen.js styles
     fontWeight: 'bold',
  },
  modalContainer: {
     backgroundColor: '#FFFFFF',
     padding: 20,
     borderRadius: 8,
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.25,
     shadowRadius: 3.84,
     elevation: 5,
  },
  modalTitle: {
     fontSize: 18,
     fontWeight: 'bold',
     marginBottom: 16,
     color: '#2a2aa2', // Updated color to match HomeScreen.js
  },
  modalText: {
     fontSize: 16,
     marginBottom: 8,
     color: '#2a2aa2', // Updated color to match HomeScreen.js
  },
  modalButton: {
     marginTop: 16,
     padding: 12,
     backgroundColor: '#2aa8aa', // Updated color to match HomeScreen.js
     alignItems: 'center',
     borderRadius: 8,
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.25,
     shadowRadius: 3.84,
     elevation: 5,
  },
 });
export default PaymentFormScreen;
