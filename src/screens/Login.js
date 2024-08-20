import React, { useState, useCallback } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

// Prevent splash screen from auto-hiding before fonts are loaded
SplashScreen.preventAutoHideAsync();

const Login = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Optionally, return a loading spinner or placeholder
  }

  const userLogin = () => {
    if (email === '' || password === '') {
      setError('Please fill out the fields');
      setTimeout(() => setError(''),3000);
    } else if (email === 'test@gmail.com' && password === '12345678') {
      setError('');
      navigation.navigate('Home');
    } else {
      setError('Invalid credentials');
      setTimeout(() => setError(''),3000);
    }
  };

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={styles.title}>Welcome Back</Text>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <View style={styles.inputContainer}>
        <Image
          source={{ uri: 'https://img.icons8.com/?size=100&id=Bb6V8LfUDtPJ&format=png&color=000000' }}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder='Your Email'
          autoComplete='false'
          keyboardType='email-address'
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={{ uri: 'https://img.icons8.com/?size=100&id=15451&format=png&color=000000' }}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder='Your Password'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={userLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#000da1', // Background color
  },
  title: {
    fontSize: 35,
    marginBottom: 20,
    color: '#fff', // Text color
    fontFamily: 'Poppins_700Bold',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginVertical: 10,
    paddingHorizontal: 10, // Added padding to fit the icon and text properly
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10, // Space between icon and input text
  },
  input: {
    flex: 1,
    paddingVertical: 15,
    fontFamily: 'Poppins_400Regular',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#007BFF', // Button color
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  buttonText: {
    color: '#fff', // Button text color
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
  },
  errorText: {
    color: '#e74c3c',
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 10,
  },
});

export default Login;
