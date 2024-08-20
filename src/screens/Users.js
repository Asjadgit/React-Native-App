import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Instructors from '../api/instructors';
import { useFonts } from 'expo-font';
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';

const Users = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>; // You can use a spinner or any loading indicator
  }

  const InstructorsData = ({ item }) => {
    return (
      <View style={styles.instructorContainer}>
        <View>
          <Image 
            source={item.image } 
            style={styles.instructorImage} 
            resizeMode="contain" 
          />
        </View>
        <View>
          <Text style={styles.instructorName}>{item.name}</Text>
          <Text style={styles.instructorEmail}>{item.email}</Text>
          <Text style={styles.instructorQualifications}>{item.qualifications}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instructors</Text>
      <FlatList 
        data={Instructors} 
        keyExtractor={(item) => item.id} 
        renderItem={InstructorsData} 
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    felx: 1,
    padding: 20,
    marginVertical: 55,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    fontFamily: 'Poppins_700Bold',
  },
  instructorContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  instructorImage: {
    width: 150,
    height: 150,
    marginRight: 16,
  },
  instructorName: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
  },
  instructorEmail: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
  },
  instructorQualifications: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: 'gray',
  },
});

export default Users;
