import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './splashScreen'; 
import LoginScreen from './loginScreen'; 
import RegisterScreen from './registerScreen';
import OtpScreen from './otp'; 
import { NavigationContainer } from '@react-navigation/native';
import RegSuccessScreen from './regSuccess';
import ForgotPWScreen from './forgotPW';
import OtpPWScreen from './otpPW';
import NewPWScreen from './newPw';
import PwChangeSuccessScreen from './pwChangeSuccess';
import HomeScreen from './home';
import ProfileScreen from './profile';
import PersonalInfoScreen from './personalInfo';
import ChangePasswordScreen from './changePw';
import FeedbackScreen from './feedback';
import TermsScreen from './terms';
import ServiceScreen from './service';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OtpScreen"
        component={OtpScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegSuccessScreen"
        component={RegSuccessScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPWScreen"
        component={ForgotPWScreen} 
        options={{ headerShown: false }}  
      />
      <Stack.Screen
        name="OtpPWScreen"
        component={OtpPWScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewPWScreen"
        component={NewPWScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PwChangeSuccessScreen"
        component={PwChangeSuccessScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PersonalInfoScreen"
        component={PersonalInfoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FeedbackScreen"
        component={FeedbackScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TermsScreen"
        component={TermsScreen}
        options={{ headerShown: false }}  
      />
      <Stack.Screen
        name="ServiceScreen"
        component={ServiceScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}