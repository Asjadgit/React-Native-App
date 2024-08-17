import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';

const About = () => {
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
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>About Us</Text>
      <Text style={styles.paragraph}>
        Welcome to Here, your go-to destination for high-quality online education. Our mission is to empower learners worldwide by providing accessible, affordable, and engaging educational content. Whether you're a student seeking to enhance your knowledge, a professional looking to upskill, or simply someone passionate about learning, we have something for everyone.
      </Text>
      <Text style={styles.subHeader}>Our Vision</Text>
      <Text style={styles.paragraph}>
        At our Platform , we believe that education is the key to unlocking potential and driving progress. Our vision is to create a global community of learners who are empowered with the skills and knowledge needed to succeed in an ever-changing world. We strive to make education accessible to everyone, regardless of location, background, or financial circumstances.
      </Text>
      <Text style={styles.subHeader}>Our Courses</Text>
      <Text style={styles.paragraph}>
        We offer a diverse range of courses designed by industry experts and educators who are passionate about teaching. From technology and business to arts and personal development, our courses are tailored to meet the needs of modern learners. Each course is designed with practical, real-world applications in mind, ensuring that you gain valuable skills that you can apply immediately.
      </Text>
      <Text style={styles.subHeader}>Why Choose Us?</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.boldText}>Expert Instructors:</Text> Learn from professionals with real-world experience in their fields. {'\n'}
        <Text style={styles.boldText}>Flexible Learning:</Text> Study at your own pace, from anywhere, at any time. {'\n'}
        <Text style={styles.boldText}>Affordable Pricing:</Text> We believe in making education affordable for everyone. {'\n'}
        <Text style={styles.boldText}>Engaging Content:</Text> Our courses are interactive and designed to keep you engaged from start to finish. {'\n'}
        <Text style={styles.boldText}>Supportive Community:</Text> Join a global network of learners and engage with like-minded individuals.
      </Text>
      <Text style={styles.subHeader}>Join Us Today</Text>
      <Text style={styles.paragraph}>
        Embark on your learning journey with us today. Whether you're looking to advance your career, learn something new, or explore a new passion, we are here to support you every step of the way. Together, let's make education a powerful tool for change and growth.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#079992',
  },
  header: {
    fontSize: 28,
    marginBottom: 10,
    color: '#fff',
    fontFamily: 'Poppins_700Bold', // Using Poppins for the main header
  },
  subHeader: {
    fontSize: 22,
    fontWeight: '600',
    marginVertical: 10,
    color: '#fff',
    fontFamily: 'Inter_600SemiBold', // Using Inter for subheaders
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#fff',
    marginBottom: 10,
    fontFamily: 'Inter_400Regular', // Using Inter for body text
  },
  boldText: {
    fontWeight: '600',
    fontFamily: 'Poppins_600SemiBold', // Using Poppins for bold text within paragraphs
  },
});

export default About;
