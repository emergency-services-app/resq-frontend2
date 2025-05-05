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
import { FontAwesome } from '@expo/vector-icons';

export default function FeedbackScreen({ navigation }: { navigation: any }) {
  const [serviceRating, setServiceRating] = useState(0);
  const [responseTimeRating, setResponseTimeRating] = useState(0);
  const [professionalismRating, setProfessionalismRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const currentUser = {
    name: "John Doe",
    image: null, // Replace with dynamic user image if available
  };

  const handleSubmitFeedback = () => {
    if (
      serviceRating === 0 ||
      responseTimeRating === 0 ||
      professionalismRating === 0 ||
      feedback.trim() === ""
    ) {
      Alert.alert("Error", "Please fill in all the feedback details.");
      return;
    }

    Alert.alert("Feedback Submitted", "Thank you for your feedback!");
    navigation.navigate("ProfileScreen");
  };

  const renderStars = (rating: number, setRating: React.Dispatch<React.SetStateAction<number>>) => {
    return (
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => setRating(star)}>
            <FontAwesome
              name="star"
              size={30}
              color={star <= rating ? "gold" : "gray"}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Top White Band */}
      <View style={styles.topBand}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                  <FontAwesome name="arrow-left" size={20} color="black"  />
                </TouchableOpacity>
                <Text style={styles.topBandText}>Feedback</Text>
      </View>

      {/* Body */}
      <View style={styles.body}>
        {/* Feedback Container */}
        <View style={styles.feedbackContainer}>
          <Text style={styles.title}>How was the service?</Text>

          {/* User Image */}
          <View style={styles.userInfo}>
            {currentUser.image ? (
              <Image source={{ uri: currentUser.image }} style={styles.userImage} />
            ) : (
              <FontAwesome name="user-circle" size={80} color="gray" />
            )}
            <Text style={styles.userName}>{currentUser.name}</Text>
          </View>

          {/* Service Rating */}
          <Text style={styles.sectionTitle}>Service</Text>
          {renderStars(serviceRating, setServiceRating)}

          {/* Response Time Rating */}
          <Text style={styles.sectionTitle}>Response Time</Text>
          {renderStars(responseTimeRating, setResponseTimeRating)}

          {/* Professionalism Rating */}
          <Text style={styles.sectionTitle}>Professionalism</Text>
          {renderStars(professionalismRating, setProfessionalismRating)}

          {/* Feedback Input */}
          <TextInput
            style={styles.feedbackInput}
            value={feedback}
            onChangeText={setFeedback}
            placeholder="Write your feedback here..."
            multiline
          />

          {/* Submit Feedback Button */}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmitFeedback}>
            <Text style={styles.submitButtonText}>Submit Feedback</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom White Band */}
      <View style={styles.bottomBand}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  topBand: {
    backgroundColor: 'white',
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
    color: 'black', // corrected from 'lack' to 'black'
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    alignItems: 'center',
  },
  bottomBand: {
    backgroundColor: 'white',
    height: 50,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  feedbackContainer: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5, // For shadow on Android
    shadowColor: '#000', // For shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  feedbackInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    textAlignVertical: 'top',
    height: 100,
  },
  submitButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});