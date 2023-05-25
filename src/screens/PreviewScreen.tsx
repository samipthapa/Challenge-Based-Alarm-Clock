import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Sound from 'react-native-sound';

function PreviewScreen({ navigation }): JSX.Element {

    const currentDate = new Date().toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        weekday: 'short',
    });

    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    var Sound = require('react-native-sound');
    Sound.setCategory('Playback');

    var alarmTone = new Sound('casino.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }

        alarmTone.play(success => {
            if (success) {
                console.log('successfully finished playing');
            } else {
                console.log('Error');
            }
        });
    });

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'column' }}>
                <View style={styles.circle1} />
                <View style={styles.circle2} />
                <Text style={styles.dateStyle}>{currentDate}</Text>
            </View>

            <Text style={styles.timeStyle}>{currentTime}</Text>
            <View style={styles.circle3} />

            <TouchableOpacity
                style={styles.snoozeButton}
            >
                <Text style={styles.snoozeText}>Snooze</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.dismissButton}
                onPress={
                    () => {
                        navigation.goBack();
                        alarmTone.stop();
                    }
                }
            >
                <Text style={styles.dismissText}>Dismiss</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(42,51,82)',
        height: '100%',
        paddingVertical: '20%'
    },
    dismissButton: {
        backgroundColor: 'rgb(235,38,65)',
        width: '80%',
        borderRadius: 5,
        paddingVertical: 18,
        alignSelf: 'center',
    },
    dismissText: {
        color: 'white',
        fontSize: 19,
        fontWeight: '600',
        alignSelf: 'center'
    },
    dateStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 19,
        fontWeight: '600',
    },
    timeStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 65,
        fontWeight: '700',
    },
    snoozeButton: {
        backgroundColor: 'rgb(198,204,218)',
        width: '25%',
        borderRadius: 5,
        paddingVertical: 10,
        alignSelf: 'center',
        marginVertical: '40%'
    },
    snoozeText: {
        color: 'black',
        fontSize: 17,
        fontWeight: '600',
        alignSelf: 'center'
    },
    circle1: {
        width: 5,
        height: 5,
        borderRadius: 25,
        backgroundColor: 'rgb(154,162,181)',
        marginLeft: '20%'
    },
    circle2: {
        width: 4,
        height: 4,
        borderRadius: 25,
        backgroundColor: 'rgb(103,122,142)',
        marginLeft: '25%',
        marginTop: '2%'
    },
    circle3: {
        width: 5,
        height: 5,
        borderRadius: 25,
        backgroundColor: 'rgb(154,162,181)',
        alignSelf: 'flex-end',
        marginRight: '20%',
    },
});

export default PreviewScreen;