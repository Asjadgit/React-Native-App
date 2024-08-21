import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Contact = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submit = () => {
    if(!name || !email || !message){
      Alert.alert('Please fill all fields');
    }else{
      Alert.alert('Tahnks you for contacting us');
      navigation.navigate('Home');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Your Name</Text>
        <TextInput 
          style={styles.input}
          placeholder='Enter your name' 
          value={name} 
          onChangeText={(data) => setName(data)}
        />

        <Text style={styles.label}>Your Email</Text>
        <TextInput 
          style={styles.input}
          placeholder='Enter your email' 
          value={email} 
          onChangeText={(mail) => setEmail(mail)} 
        />

        <Text style={styles.label}>Your Message</Text>
        <TextInput 
          style={styles.msg}
          placeholder='Enter your message' 
          value={message} 
          multiline={true}
          numberOfLines={5}
          onChangeText={(msg) => setMessage(msg)} 
        />

        <TouchableOpacity style={styles.button} onPress={submit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  msg: {
    height: 'auto',
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Contact;
