import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function ForgotPWScreen({navigation}: {navigation: any}) {
  const nav = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesome name="arrow-left" size={20} color="black"  />
        </TouchableOpacity>

      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image
          source={require('@/assets/images/logo.png')} // Replace with your logo path
          style={styles.logo}
        />
      </View>

      {/* Forgot Password Text */}
      <Text style={styles.titleText}>Forgot Password</Text>
      <Text style={styles.subText}>Enter your registered phone number to reset your password</Text>

      {/* Phone Number Input */}
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#aaa"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      {/* Continue Button */}
      <TouchableOpacity
        style={[styles.continueButton, { opacity: phoneNumber ? 1 : 0.5 }]} // Enable only when phone number is entered
        disabled={!phoneNumber}
        onPress={() => navigation.navigate('OtpPWScreen')} // Navigate to OTP screen
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa', // Light background for a clean look
    justifyContent: 'center',
  },
  backButton: {
    marginTop: 20,
    marginBottom: 10,
  },
  backButtonText: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 120, // Slightly larger logo for better visibility
    height: 120,
    resizeMode: 'contain',
  },
  titleText: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  subText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#fff',
    elevation: 2, // Add shadow for better input visibility
  },
  continueButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 3, // Add shadow for the button
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});