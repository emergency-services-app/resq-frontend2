import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen({ navigation }: { navigation: any }) {
  const currentUser = "Devashish Adhikari"; // Replace with dynamic user data if available

  return (
    <View style={styles.container}>
      {/* Top Red Band */}
      <View style={styles.topBand}>
        <Text style={styles.topBandText}>Home Page</Text>
      </View>

      {/* Body */}
      <View style={styles.body}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <FontAwesome name="user-circle" size={80} color="black" style={styles.userIcon} />
        <Text style={styles.userName}>{currentUser}</Text>
        <Text style={styles.emergencyText}>Are you in emergency?</Text>
        <Text style={styles.assistanceText}>Select the service you need assistance with</Text>

        {/* Services Grid */}
        <View style={styles.servicesGrid}>
          <TouchableOpacity
            style={styles.serviceContainer}
            onPress={() => navigation.navigate('ServiceScreen', { serviceType: 'Ambulance' })}
          >
            <FontAwesome name="ambulance" size={40} color="black" />
            <Text style={styles.serviceText}>Ambulance</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.serviceContainer}
            onPress={() => navigation.navigate('ServiceScreen', { serviceType: 'Fire Brigade' })}
          >
            <FontAwesome name="fire-extinguisher" size={40} color="black" />
            <Text style={styles.serviceText}>Fire Brigade</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.serviceContainer}
            onPress={() => navigation.navigate('ServiceScreen', { serviceType: 'Police' })}
          >
            <FontAwesome name="shield" size={40} color="black" />
            <Text style={styles.serviceText}>Police</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.serviceContainer}
            onPress={() => navigation.navigate('ServiceScreen', { serviceType: 'Rescue' })}
          >
            <FontAwesome name="life-ring" size={40} color="black" />
            <Text style={styles.serviceText}>Rescue</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Red Band */}
      <View style={styles.bottomBand}>
        <TouchableOpacity style={styles.bottomTab}>
          <FontAwesome name="address-book" size={20} color="black" />
          <Text style={styles.bottomBandText}>Contacts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab}>
          <FontAwesome name="home" size={20} color="black" />
          <Text style={styles.bottomBandText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab} onPress={() => navigation.navigate('ProfileScreen')}>
          <FontAwesome name="user" size={20} color="black" />
          <Text style={styles.bottomBandText}>Profile</Text>
        </TouchableOpacity>
      </View>
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
    padding: 10,
    alignItems: 'center',
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
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userIcon: {
    marginVertical: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  emergencyText: {
    fontSize: 16,
    color: 'red',
    marginBottom: 10,
  },
  assistanceText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  serviceContainer: {
    backgroundColor: 'red',
    width: '45%',
    height: 100,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  serviceText: {
    color: 'black',
    fontSize: 16,
    marginTop: 5,
  },
  bottomBand: {
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  bottomTab: {
    alignItems: 'center',
  },
  bottomBandText: {
    color: 'black',
    fontSize: 12,
    marginTop: 5,
  },
});