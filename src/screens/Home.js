import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Image style={styles.image} source={require('../../assets/home2.jpg')} />
                <Text style={styles.welcomeText}>Welcome To</Text>
                <Text style={styles.platformText}>Our Online Platform</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('About') }}>
                    <Text style={styles.buttonText}>About Us</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Contact') }}>
                    <Text style={styles.buttonText}>Contact Us</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Users') }}>
                    <Text style={styles.buttonText}>Users</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Courses') }}>
                    <Text style={styles.buttonText}>Courses</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    innerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginBottom: 20,
    },
    image: {
        width: 350,
        height: 200,
        marginBottom: 20,
    },
    welcomeText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    platformText: {
        fontSize: 24,
        color: '#666',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    button: {
        borderRadius: 8,
        marginHorizontal: 2,
        marginVertical: 5,
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 15, // Added for better spacing
        backgroundColor: '#007BFF',

        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,

        // Elevation for Android
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Home;
