import React, { useState, createContext, useContext } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Pay from "../screens/Pay";
import PaymentHistory from '../screens/PaymentHistoryScreen';
import SettingsScreen from "../screens/SettinsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ProfileScreen from '../screens/ProfileScreen';
import DevelopersScreen from '../screens/DevelopersScreen';
import AboutScreen from '../screens/AboutScreen';
import RefundFormScreen from "../screens/RefundFormScreen";
import PaymentFormScreen from "../screens/PaymentFormScreen";
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';
import { useAuth } from './AuthContext';

const AuthStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const MoreStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthNavigation = () => {
  return (
     <AuthStack.Navigator initialRouteName="Login">
       <AuthStack.Screen 
         name="Login" 
         component={LoginScreen} 
         options={{ headerTitle: '' }} // Hide the header title
       />
       <AuthStack.Screen 
         name="Signup" 
         component={SignupScreen} 
         options={{ headerTitle: '' }} // Hide the header title
       />
       <AuthStack.Screen 
         name="ForgetPassword" 
         component={ForgetPasswordScreen} 
         options={{ headerTitle: '' }} // Hide the header title
       />
       
     </AuthStack.Navigator>
  );
 };

const HomeNavigation = () => {
 return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="MpesaPay" component={PaymentFormScreen} />
    </HomeStack.Navigator>
 );
};

const MoreNavigation = () => {
 return (
    <MoreStack.Navigator>
      <MoreStack.Screen name="Settings" component={SettingsScreen} />
      <MoreStack.Screen name="Profile" component={ProfileScreen} />
      <MoreStack.Screen name="Developers" component={DevelopersScreen} />
      <MoreStack.Screen name="About" component={AboutScreen} />
       
    </MoreStack.Navigator>
 );
};

const TabGroup = () => {
  return (
     <Tab.Navigator
       screenOptions={({ route }) => ({
         tabBarIcon: ({ focused, color, size }) => {
           let iconName;
 
           if (route.name === 'Home') {
             iconName = focused ? 'home' : 'home-outline';
           } else if (route.name === 'History') {
             iconName = focused ? 'history' : 'history-outline';
           } else if (route.name === 'Refund') {
             iconName = focused ? 'currency-usd' : 'currency-usd-off';
           } else if (route.name === 'More') {
             iconName = focused ? 'dots-horizontal' : 'dots-horizontal';
           }
 
           return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
         },
         tabBarLabelStyle: {
          fontSize: 18, // Increase the font size of the label
        },
         
         tabBarActiveTintColor: 'tomato',
         tabBarInactiveTintColor: '#2aa8aa',
         tabBarStyle: {
           backgroundColor: '#F5F5F5',
           padding: "10px",
         },
         headerStyle: {
          backgroundColor: '#2aa8aa', // Telegram-like dark blue
        },
        headerTintColor: '#fff', // White text color for header
        headerTitleStyle: {
          fontWeight: 'bold',
        },
       })}
     >
       <Tab.Screen
         name="Lipa Fee"
         component={HomeNavigation}
         options={{
           tabBarLabel: 'Home',
           tabBarIcon: ({ focused, color, size }) => (
             <MaterialCommunityIcons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
           ),
         }}
       />
       <Tab.Screen
         name="History"
         component={PaymentHistory}
         options={{
           tabBarLabel: 'History',
           tabBarIcon: ({ focused, color, size }) => (
             <MaterialCommunityIcons name={focused ? 'history' : 'history'} size={size} color={color} />
           ),
         }}
       />
       <Tab.Screen
         name="Refund"
         component={RefundFormScreen}
         options={{
           tabBarLabel: 'Refund',
           tabBarIcon: ({ focused, color, size }) => (
             <MaterialCommunityIcons name={focused ? 'currency-usd' : 'currency-usd-off'} size={size} color={color} />
           ),
         }}
       />
       <Tab.Screen
         name="More"
         component={MoreNavigation}
         options={{
           tabBarLabel: 'More',
           tabBarIcon: ({ focused, color, size }) => (
             <MaterialCommunityIcons name={focused ? 'dots-horizontal' : 'dots-horizontal'} size={size} color={color} />
           ),
         }}
       />
     </Tab.Navigator>
  );
 };
export default function AppNavigation() {
 const { isAuthenticated } = useAuth();

 return isAuthenticated ? <TabGroup /> : <AuthNavigation />;
}











// pages with link to backend
// signupscreen
// login screen
// setting screen
