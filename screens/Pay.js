import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Pay = () => {
    // Function to navigate to PaymentDetails screen
    const goToPaymentDetails = () => {
      useNavigation.navigate('PaymentDetails');
  };
  return (
    
    <SafeAreaView>
    <View>
      <Text>React Native Paper Example</Text>

      <Button icon="home" mode="contained" onPress={()=>{
        navigate("PayDetails", );

      }}>
      <Pressable>
      <Text>Pay details</Text>
      </Pressable>
      </Button>

      <Text>tulipe fee kapsaa </Text>
      
    </View>

      
      </SafeAreaView>
    
  )
}

export default Pay

const styles = StyleSheet.create({})