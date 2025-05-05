import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons';

export default function PersonalInfoScreen({ navigation }: { navigation: any }) {
  const [image, setImage] = useState<string | null>(null);
  const [fullName, setFullName] = useState("Devashish Adhikari");
  const [age, setAge] = useState("22");
  const [email, setEmail] = useState("devashish@gmail.com");
  const [phone, setPhone] = useState("+977 984-1234567");
  const [address, setAddress] = useState("Bhaktapur, Nepal");

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const saveChanges = () => {
    Alert.alert("Changes Saved", "Your personal information has been updated.");
    navigation.navigate("ProfileScreen");
  };

  return (
    <View style={styles.container}>
      {/* Top Red Band */}
      <View style={styles.topBand}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.topBandText}>Personal Information</Text>
      </View>

      {/* Body */}
      <View style={styles.body}>
        {/* User Image Section */}
        <TouchableOpacity onPress={pickImage} style={styles.imageContainer}>
          {image ? (
            <Image source={{ uri: image }} style={styles.userImage} />
          ) : (
            <FontAwesome name="user-circle" size={100} color="gray" />
          )}
          <Text style={styles.changeImageText}>Change Image</Text>
        </TouchableOpacity>

        {/* Editable Fields */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
            placeholder="Full Name"
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Age</Text>
          <TextInput
            style={styles.input}
            value={age}
            onChangeText={setAge}
            placeholder="Age"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email Address"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="Phone Number"
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress}
            placeholder="Address"
          />
        </View>

        {/* Save Changes Button */}
        <TouchableOpacity style={styles.saveButton} onPress={saveChanges}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
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
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  body: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  changeImageText: {
    color: 'blue',
    marginTop: 10,
    fontSize: 14,
  },
  fieldContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  saveButtonText: {
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