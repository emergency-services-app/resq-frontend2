import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginScreen from './loginScreen';

export default function SplashScreen({navigation}: {navigation: any}) {
  const nav = useNavigation();
  const [showButton, setShowButton] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000); // Show button after 3 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image
          source={require('@/assets/images/logo.png')} // Replace with your logo path
          style={styles.logo}
        />
      </View>

      {/* Slogan Section */}
      <View style={styles.sloganContainer}>
        <Text style={styles.sloganBlack}>Every Second Counts.</Text>
        <Text style={styles.sloganRed}> We're Just A Tap Away.</Text>
      </View>

      {/* Button Section */}
      {showButton && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('LoginScreen')} // Navigate to LoginScreen
        >
          <Text style={styles.buttonText}>Let's Get Started</Text>
        </TouchableOpacity>
      )}

      {/* Footer Section */}
      <View style={styles.footer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#f8f9fa', // Light background for a clean look
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 80, // Adjust spacing for better alignment
  },
  logo: {
    width: 200, // Larger logo for better visibility
    height: 200,
    resizeMode: 'contain',
  },
  sloganContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: -20, // Slight overlap for a modern look
  },
  sloganBlack: {
    fontSize: 22, // Larger font size for emphasis
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sloganRed: {
    fontSize: 22, // Match font size with the black text
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    height: 60, // Slightly taller footer
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});