import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import TimeComponent from '../components/TimeComponent';

function PreviewScreen({ navigation }): JSX.Element {
    const mission = useRoute().params?.mission;

    console.log('Preview Screen Rendered');

    var Sound = require('react-native-sound');
    Sound.setCategory('Playback');

    Sound.setCategory('Playback');
    const alarmTone = new Sound('casino.mp3', Sound.MAIN_BUNDLE, (error) => {
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
            <TimeComponent />
            <TouchableOpacity
                style={styles.snoozeButton}
            >
                <Text style={styles.snoozeText}>Snooze</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.dismissButton}
                onPress={
                    () => {
                        if (mission == 'Math') {
                            navigation.navigate('MathMission');
                            alarmTone.stop();
                        }
                        else {
                            navigation.goBack();
                            alarmTone.stop();
                        }
                    }
                }
            >
                {mission ? <Text style={styles.dismissText}>Start Mission</Text> : <Text style={styles.dismissText}>Dismiss</Text>}
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
});

export default PreviewScreen;