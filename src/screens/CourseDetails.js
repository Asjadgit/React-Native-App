import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { useFonts } from 'expo-font';
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';

const CourseDetails = ({ route }) => {
    const { course } = route.params;
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
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.courseName}>{course.name}</Text>
                <Text style={styles.coursePrice}> ${course.price.toFixed(2)}</Text>
                <Text style={styles.courseDescription}>{course.description}</Text>

                {/* Rendering the list of languages */}
                <Text style={styles.languagesHeader}>Languages Covered:</Text>
                <FlatList
                    data={course.languages}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Text style={styles.languageItem}>{item}</Text>
                    )}
                />
                <Button title='Join Now' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#00b891',
        padding: 20,
        width: 350,
        height: 'auto',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 10,
    },
    courseName: {
        fontSize: 24,
        fontFamily: 'Poppins_700Bold',
        marginBottom: 8,
        color: '#fff',
    },
    coursePrice: {
        fontSize: 20,
        marginBottom: 8,
        color: '#fff',
    },
    courseDescription: {
        fontSize: 16,
        marginBottom: 16,
        fontFamily: 'Inter_600SemiBold',
        color: '#fff',
    },
    languagesHeader: {
        fontSize: 18,
        fontFamily: 'Poppins_600SemiBold',
        marginBottom: 8,
        color: '#fff',
    },
    languageItem: {
        fontSize: 16,
        marginBottom: 6,
        fontFamily: 'Inter_400Regular',
        color: '#fff',
    },
});

export default CourseDetails;
