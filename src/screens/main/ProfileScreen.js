import React, { useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Platform,
} from 'react-native';

import { AppContext } from '../../context/AppContext';

export default function ProfileScreen() {
  const { signOut } = useContext(AppContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileHeader}>
        <Text style={styles.screenMainTitle}>Account</Text>
      </View>

      <View style={styles.profileContent}>
        <Image 
          source={{ uri: '' }} 
          style={styles.avatar} 
        />
        
        <Text style={styles.profileName}>Hung Nguyen</Text>
        <Text style={styles.profileTitle}>Mobile developer</Text>
        
        <Text style={styles.profileBio}>
          I have above 5 years of experience in native mobile apps development, now I am learning React Native.
        </Text>

        <TouchableOpacity style={styles.signOutBtn} onPress={signOut}>
          <Text style={styles.signOutBtnText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  screenMainTitle: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#111' 
  },
  profileHeader: { 
    paddingHorizontal: 20, 
    paddingTop: Platform.OS === 'android' ? 40 : 20, 
    alignItems: 'center' 
  },
  profileContent: { 
    flex: 1, 
    alignItems: 'center', 
    paddingHorizontal: 30, 
    paddingTop: 30 
  },
  avatar: { 
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    marginBottom: 15 
  },
  profileName: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#333', 
    marginBottom: 5 
  },
  profileTitle: { 
    fontSize: 16, 
    color: '#0000ff', 
    marginBottom: 20 
  },
  profileBio: { 
    fontSize: 15, 
    color: '#666', 
    textAlign: 'center', 
    lineHeight: 22, 
    marginBottom: 40 
  },
  signOutBtn: { 
    backgroundColor: '#f0f0f0', 
    paddingVertical: 15, 
    paddingHorizontal: 40, 
    borderRadius: 25, 
    width: '100%', 
    alignItems: 'center' 
  },
  signOutBtnText: { 
    color: '#ff3b30', 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
});