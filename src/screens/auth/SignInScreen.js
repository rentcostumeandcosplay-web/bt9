import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import { AppContext } from '../../context/AppContext';

export default function SignInScreen({ navigation }) {
  const { signIn } = useContext(AppContext);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.authContainer}>
      <View style={styles.authContent}>
        <Text style={styles.authTitle}>Sign In</Text>
        
        <Text style={styles.inputLabel}>Email ID</Text>
        <TextInput
          style={styles.authInput}
          placeholder="Enter your email here"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.authInput}
          placeholder="Enter your password here"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.authButton} onPress={signIn}>
          <Text style={styles.authButtonText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.authLinks}>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.linkText}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.linkText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  authContainer: { 
    flex: 1, 
    backgroundColor: '#fff', 
    justifyContent: 'center' 
  },
  authContent: { 
    paddingHorizontal: 30 
  },
  authTitle: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#333', 
    marginBottom: 40, 
    textAlign: 'center' 
  },
  inputLabel: { 
    fontSize: 14, 
    color: '#666', 
    marginBottom: 8, 
    fontWeight: '600' 
  },
  authInput: { 
    backgroundColor: '#f5f5f5', 
    borderRadius: 8, 
    paddingHorizontal: 15, 
    paddingVertical: 12, 
    fontSize: 16, 
    marginBottom: 20 
  },
  authButton: { 
    backgroundColor: '#0000ff', 
    paddingVertical: 15, 
    borderRadius: 8, 
    alignItems: 'center', 
    marginTop: 10 
  },
  authButtonText: { 
    color: '#fff', 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
  authLinks: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 20 
  },
  linkText: { 
    color: '#0000ff', 
    fontSize: 14, 
    fontWeight: '500' 
  },
});