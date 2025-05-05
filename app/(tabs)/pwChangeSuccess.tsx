import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PwChangeSuccessScreen({navigation}: {navigation: any}) {
  const nav = useNavigation();
  const [showManualRedirect, setShowManualRedirect] = useState(false); 

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 5000);

    const manualRedirectTimer = setTimeout(() => {
      setShowManualRedirect(true); 
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(manualRedirectTimer);
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      
      <View style={styles.logoContainer}>
        <Image
          source={require('@/assets/images/logo.png')} // Replace with your logo path
          style={styles.logo}
        />
      </View>

      <Text style={styles.successText}>Password Changed Successfully!</Text>

      <View style={styles.logoContainer}>
        <Image
          source={require('@/assets/images/tick.jpg')} // Replace with your tick icon path
          style={styles.logo}
        />
      </View>

  
      <Text style={styles.subText}>You will navigate to the login page in 5 seconds...</Text>

   
      {showManualRedirect && (
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.redirectText}>Click Here If you are not redirected Automatically</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  successText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'green',
  },
  iconContainer: {
    marginBottom: 20,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tickIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    tintColor: '#fff', // Ensure the tick icon is white
  },
  subText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  redirectText: {
    fontSize: 14,
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});