import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image } from 'react-native';

export default function ChangePasswordScreen({ navigation }: { navigation: any }) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      Alert.alert("Error", "New password and confirm password do not match.");
      return;
    }
    Alert.alert("Success", "Your password has been changed.");
    navigation.navigate("ProfileScreen");
  };

  return (
    <View style={styles.container}>
      {/* Top Red Band */}
      <View style={styles.topBand}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesome name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.topBandText}>Change Password</Text>
      </View>

      {/* Body */}
      <View style={styles.body}>
        {/* Logo */}
        <Image source={require('@/assets/images/logo.png')} style={styles.logo} />

        {/* Password Fields */}
        <TextInput
          style={styles.input}
          value={currentPassword}
          onChangeText={setCurrentPassword}
          placeholder="Current Password"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          value={newPassword}
          onChangeText={setNewPassword}
          placeholder="Enter New Password"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirm Password"
          secureTextEntry
        />

        {/* Change Password Button */}
        <TouchableOpacity style={styles.changeButton} onPress={handleChangePassword}>
          <Text style={styles.changeButtonText}>Change Password</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Red Band */}
      <View style={styles.bottomBand}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topBand: {
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  backButton: {
    position: 'absolute',
    left: 10,
    
    padding: 10,
},
  backText: {
    color: 'white',
    fontSize: 16,
    marginRight: 10,
  },
  topBandText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  changeButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  changeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomBand: {
    backgroundColor: 'red',
    height: 50,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});