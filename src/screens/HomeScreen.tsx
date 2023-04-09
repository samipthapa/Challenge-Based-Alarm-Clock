import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AlarmDetail from '../components/AlarmDetail';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen(): JSX.Element {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.nextAlarm}>Next alarm</Text>
                <Text style={styles.countdown}>Alarm will ring in 11 hr. 43 min.</Text>
                <AlarmDetail />
            </View>
            <View style={styles.buttonContainer}>
                <Ionicons name="add-circle-sharp" size={70} color="rgb(244,16,59)"/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'rgb(242,246,255)',
        height: '100%',
        justifyContent: 'space-between',
    },
    countdown: {
        marginBottom: 30,
        fontWeight: 'bold',
        color: 'black',
        fontSize: 19,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 10,
    },
    nextAlarm: {
        fontWeight: 'bold', 
        color: 'rgb(103,109,124)',
        fontSize: 16,
        marginVertical: 3,
    }
});

export default HomeScreen;