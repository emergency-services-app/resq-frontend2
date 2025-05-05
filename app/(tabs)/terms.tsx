import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function TermsScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      {/* Top Red Band */}
      <View style={styles.topBand}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <FontAwesome name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.topBandText}>Terms and Conditions</Text>
      </View>

      {/* Body */}
      <View style={styles.body}>
        <FontAwesome name="file-text" size={80} color="red" style={styles.icon} />
        <Text style={styles.lastUpdated}>Last Updated: April 16, 2025</Text>
        <ScrollView style={styles.termsContainer}>
          <Text style={styles.termsText}>
            Emergency Services Access
          </Text>
          <Text style={styles.termsDescription}>
            By using this emergency application, you acknowledge that this service is designed to provide immediate assistance during emergencies. False alarms and misuse may result in account suspension.
          </Text>

          <Text style={styles.termsText}>
            Location Services
          </Text>
          <Text style={styles.termsDescription}>
            This app requires access to your location to provide emergency services. You must enable location services to use the core features of the application.
          </Text>

          <Text style={styles.termsText}>
            User Privacy
          </Text>
          <Text style={styles.termsDescription}>
            Your personal information and emergency contacts will be stored securely and only used for emergency response purposes.
          </Text>

          <Text style={styles.termsText}>
            Service Reliability
          </Text>
          <Text style={styles.termsDescription}>
            While we strive to maintain 24/7 service availability, we cannot guarantee uninterrupted service due to technical limitations or network issues.
          </Text>

          <Text style={styles.termsText}>
            User Responsibility
          </Text>
          <Text style={styles.termsDescription}>
            Users must provide accurate information and keep emergency contacts updated. Misuse of emergency features may result in legal consequences.
          </Text>

          <Text style={styles.agreementText}>
            By using our service, you agree to these terms and conditions.
          </Text>
        </ScrollView>
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
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
    backButton: {
        position: 'absolute',
        left: 10,
        top: 10,
        padding: 10,
    },
  topBandText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  icon: {
    marginBottom: 20,
  },
  lastUpdated: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  termsContainer: {
    flex: 1,
    width: '100%',
  },
  termsText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  termsDescription: {
    fontSize: 14,
    marginTop: 5,
    lineHeight: 20,
    color: 'black',
  },
  agreementText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    color: 'black',
  },
  bottomBand: {
    backgroundColor: 'red',
    height: 50,
  },
});