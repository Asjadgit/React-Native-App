import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import coursesData from '../api/courses.json'; // Adjust the path according to your project structure
import { useFonts } from 'expo-font';
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';


const Courses = () => {
  // Separate variables for top 5 and all courses
  const allCourses = coursesData.allCourses;
  const top5Courses = coursesData.top5Courses;

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

  return (
    <ScrollView style={styles.container}>
      {/* Top 5 Courses - Horizontal Scroll */}
      <Text style={styles.header}>Top 5 Courses</Text>
      <FlatList
        data={top5Courses}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.horizontalCourseContainer}>
            <Text style={styles.courseName}>{item.name}</Text>
            <Text style={styles.coursePrice}>${item.price.toFixed(2)}</Text>
            <Text style={styles.courseDescription}>{item.description}</Text>
            <TouchableOpacity style={styles.moreDetailsButton}>
              <Text style={styles.moreDetailsText}>More Details</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* All Courses - Vertical Scroll */}
      <Text style={styles.header}>All Courses</Text>
      {allCourses.map((item, index) => (
        <View key={index} style={styles.verticalCourseContainer}>
          <Text style={styles.courseName}>{item.name}</Text>
          <Text style={styles.coursePrice}>${item.price.toFixed(2)}</Text>
          <Text style={styles.courseDescription}>{item.description}</Text>
          <TouchableOpacity style={styles.moreDetailsButton}>
              <Text style={styles.moreDetailsText}>More Details</Text>
            </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#079992',
  },
  header: {
    fontSize: 24,
    fontFamily: 'Poppins_700Bold',
    marginVertical: 10,
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 20,
  },
  horizontalCourseContainer: {
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 5,
    width: 300, // Adjust width as needed
    height: 'auto',
  },
  verticalCourseContainer: {
    marginBottom: 50,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
  },
  courseName: {
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
    marginBottom: 10,
  },
  coursePrice: {
    fontSize: 16,
    color: '#007BFF',
    marginBottom: 10,
  },
  courseDescription: {
    fontSize: 16,
    color: '#666',
    fontFamily: 'Poppins_400Regular',
  },
  moreDetailsButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  moreDetailsText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
    textAlign: 'center',
  },
});

export default Courses;
