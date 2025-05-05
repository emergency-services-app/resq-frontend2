import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ProfileScreen({ navigation }: { navigation: any }) {
  const currentUser = {
    name: "Devashish Adhikari",
    phone: "+977 984-1234567",
  };

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  return (
    <View style={styles.container}>
      {/* Top Red Band */}
      <View style={styles.topBand}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesome name="arrow-left" size={20} color="black"  />
        </TouchableOpacity>
        <Text style={styles.topBandText}>Profile</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* User Info */}
        <View style={styles.userInfo}>
          <FontAwesome name="user-circle" size={100} color="black" />
          <Text style={styles.userName}>{currentUser.name}</Text>
          <Text style={styles.userPhone}>{currentUser.phone}</Text>
        </View>

        {/* Account Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account Settings</Text>
          <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('PersonalInfoScreen')}>
            <Text style={styles.rowText}>Personal Information</Text>
            <FontAwesome name="angle-right" size={20} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('ChangePasswordScreen')}>
            <Text style={styles.rowText}>Change Password</Text>
            <FontAwesome name="angle-right" size={20} color="gray" />
          </TouchableOpacity>
        </View>

        {/* Preferences */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <View style={styles.row}>
            <Text style={styles.rowText}>Dark Mode</Text>
            <Switch
              value={isDarkMode}
              onValueChange={(value) => setIsDarkMode(value)}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>Notifications</Text>
            <Switch
              value={isNotificationsEnabled}
              onValueChange={(value) => setIsNotificationsEnabled(value)}
            />
          </View>
        </View>

        {/* Support */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('TermsScreen')}>
            <Text style={styles.rowText}>Terms and Conditions</Text>
            <FontAwesome name="angle-right" size={20} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.row}>
            <Text style={styles.rowText}>Help Center</Text>
            <FontAwesome name="angle-right" size={20} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('FeedbackScreen')}>
            <Text style={styles.rowText}>Feedback</Text>
            <FontAwesome name="angle-right" size={20} color="gray" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <FontAwesome name="sign-out" size={20} color="white" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      {/* Bottom Red Band */}
      <View style={styles.bottomBand}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  topBand: {
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 10,
    padding: 10,
},
  topBandText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    alignItems: 'center',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 80, // Ensure space for logout button and bottom band
  },
  userInfo: {
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  userPhone: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5,
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#444',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  rowText: {
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    position: 'absolute',
    bottom: 40, // Position above the bottom band
    left: 20,
    right: 20,
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  bottomBand: {
    backgroundColor: 'red',
    height: 30,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },

  helpCenter: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  helpCenterText: {
    fontSize: 16,
    color: '#333',
  },
});