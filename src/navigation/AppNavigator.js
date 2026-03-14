import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { AppContext } from '../context/AppContext';

import SignInScreen from '../screens/auth/SignInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import HomeScreen from '../screens/main/HomeScreen';
import ProfileScreen from '../screens/main/ProfileScreen';

const Auth = createStackNavigator();
const Main = createStackNavigator();
const Tab = createBottomTabNavigator();

function AuthStack() {
  return (
    <Auth.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
      <Auth.Screen name="SignIn" component={SignInScreen} />
      <Auth.Screen name="SignUp" component={SignUpScreen} />
      <Auth.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Auth.Navigator>
  );
}

function MainBottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName = route.name === 'Home' ? 'grid-outline' : 'person-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Explorer' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Account' }} />
    </Tab.Navigator>
  );
}

function MainStack() {
  return (
    <Main.Navigator>
      <Main.Screen name="MainTabs" component={MainBottomTab} options={{ headerShown: false }} />
    </Main.Navigator>
  );
}

export default function AppNavigator() {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}