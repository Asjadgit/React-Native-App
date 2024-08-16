import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

const Home = ({props}) => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Image style={styles.image} source={require('../../assets/home2.jpg')} />
                <Text style={styles.welcomeText}>Welcome To</Text>
                <Text style={styles.platformText}>Our Online Platform</Text>
                {/* <Text style={styles.platformText}>{channelName} Online Platform</Text> */}
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
    },
    innerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
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
});

export default Home
