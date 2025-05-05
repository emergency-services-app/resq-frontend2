import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RegSuccessScreen from './regSuccess'; 
import { FontAwesome } from '@expo/vector-icons';

export default function OtpPWScreen({navigation}: {navigation: any}) {
  const nav = useNavigation();
  const [otp, setOtp] = useState('');

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

      {/* OTP Text */}
      <Text style={styles.otpText}>Enter OTP</Text>
      <Text style={styles.subText}>Enter the OTP sent to your registered phone number</Text>

      {/* OTP Input Field */}
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={otp}
        onChangeText={setOtp}
      />

      {/* Verify Button */}
      <TouchableOpacity
        style={[styles.verifyButton, { opacity: otp.length === 4 ? 1 : 0.5 }]} // Enable only when OTP is 6 digits
        disabled={otp.length !== 4}
        onPress={() => navigation.navigate('NewPWScreen')} // Replace with your verification logic
      >
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>

      {/* Resend OTP Option */}
      <TouchableOpacity onPress={() => alert('OTP Resent!')}>
        <Text style={styles.resendText}>Didn't Get The Code? Resend OTP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
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
    marginTop: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  otpText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
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
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    textAlign: 'center',
  },
  verifyButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  verifyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resendText: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
});