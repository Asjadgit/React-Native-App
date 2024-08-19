import React, { useCallback } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

// Prevent splash screen from auto-hiding before fonts are loaded
SplashScreen.preventAutoHideAsync();
const Home = () => {
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });
    const navigation = useNavigation();

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null; // Optionally, return a loading spinner or placeholder
    }

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <View style={styles.innerContainer}>
                <Image style={styles.image} source={require('../../assets/home2.jpg')} />
                <Text style={styles.welcomeText}>Welcome To</Text>
                <Text style={styles.platformText}>Our Online Education Platform</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('About') }}>
                    <Image style={styles.icon} source={{uri:"https://img.icons8.com/?size=100&id=43969&format=png&color=000000"}} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Contact') }}>
                <Image style={styles.icon} source={{uri:"https://img.icons8.com/?size=100&id=43436&format=png&color=000000"}} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Instructors') }}>
                <Image style={styles.icon} source={{uri:"https://img.icons8.com/?size=100&id=RiQFWoQQ4lQE&format=png&color=000000"}} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Courses') }}>
                <Image style={styles.icon} source={{uri:"https://img.icons8.com/?size=100&id=13203&format=png&color=000000"}} />
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
        fontFamily: 'Poppins_700Bold', // Using Poppins Bold
        fontSize: 30,
        marginBottom: 10,
        color: '#333',
    },
    platformText: {
        fontFamily: 'Poppins_400Regular', // Using Poppins Regular
        fontSize: 20,
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
        paddingVertical: 10, // Added for better spacing
        backgroundColor: '#fff',

        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,

        // Elevation for Android
        elevation: 5,
    },
    icon: {
        width: '100%',
        height: 50,
        aspectRatio:1,
    },
});

export default Home;
