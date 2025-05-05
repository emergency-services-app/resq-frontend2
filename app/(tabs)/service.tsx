import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { FontAwesome } from '@expo/vector-icons';

export default function ServiceScreen({ route, navigation }: { route: any; navigation: any }) {
  const { serviceType } = route.params; // Get the selected service type from route params
  const [location, setLocation] = useState<any>(null);
  const [locationName, setLocationName] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }

        let currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation.coords);

        // Reverse geocode to get location name
        let reverseGeocode = await Location.reverseGeocodeAsync(currentLocation.coords);
        if (reverseGeocode.length > 0) {
          const { city, region, country } = reverseGeocode[0];
          setLocationName(`${city || ''}, ${region || ''}, ${country || ''}`);
        }
      } catch (error) {
        setErrorMsg('An error occurred while fetching location');
      }
    })();
  }, []);

  const handleRequestService = () => {
    if (!location) {
      Alert.alert("Error", "Unable to fetch your location. Please try again.");
      return;
    }
    Alert.alert(
      "Service Requested",
      `Your request for ${serviceType} has been submitted.`
    );
  };

  return (
    <View style={styles.container}>

      <View style={styles.topBand}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.topBandText}>Service</Text>
      </View>

      <View style={styles.mapContainer}>
        {location ? (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title="You are here"
            />
          </MapView>
        ) : (
          <Text style={styles.loadingText}>
            {errorMsg || "Fetching your location..."}
          </Text>
        )}
      </View>

      {/* Request Service Section */}
      <View style={styles.requestServiceContainer}>
        <Text style={styles.sectionTitle}>Request Service</Text>
        <Text style={styles.infoText}>Current Location:</Text>
        <Text style={styles.locationText}>
          {locationName || "Fetching location name..."}
        </Text>
        <Text style={styles.infoText}>Selected Service:</Text>
        <Text style={styles.serviceText}>{serviceType}</Text>
        <TouchableOpacity style={styles.requestButton} onPress={handleRequestService}>
          <Text style={styles.requestButtonText}>Request Service</Text>
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
    alignItems: 'center',
    padding: 10,
  },
  topBandText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  loadingText: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 16,
    color: 'gray',
  },
  requestServiceContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  infoText: {
    fontSize: 16,
    color: 'gray',
    marginTop: 10,
  },
  locationText: {
    fontSize: 14,
    color: 'black',
    marginBottom: 10,
  },
  serviceText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
  },
  requestButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  requestButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomBand: {
    backgroundColor: 'red',
    height: 50,
  },
});