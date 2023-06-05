import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CheckBox } from '@rneui/base';

function SoundScreen({ navigation }): JSX.Element {
    const [selectedValue, setSelectedValue] = useState('casino.mp3');
    const [tone, setTone] = useState();

    const handleCheckbox = (value: string) => {
        var Sound = require('react-native-sound');
        Sound.setCategory('Playback');

        if (tone) {
            tone.stop();
        }

        const alarmTone = new Sound(value, Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            alarmTone.stop();
            alarmTone.play(success => {
                if (success) {
                    console.log('successfully finished playing');
                } else {
                    console.log('Error');
                }
            });
            alarmTone.setNumberOfLoops(-1);
            setTone(alarmTone);
        });

        if (selectedValue === value) {
            setSelectedValue('');
        }
        else {
            setSelectedValue(value);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerStyle}>
                <Ionicons name="chevron-back" style={styles.iconStyle}
                    onPress={() => {
                        if (tone)
                            tone.stop();
                        navigation.navigate('Alarm', { sound: selectedValue });
                    }}
                />

                <Text style={styles.headerText}>Sound</Text>
            </View>

            <View style={{ backgroundColor: 'rgb(242,246,255)', flexDirection: 'row', alignItems: 'center', marginTop: '5%' }}>
                <CheckBox
                    checked={selectedValue === 'casino.mp3'}
                    onPress={() => handleCheckbox('casino.mp3')}
                    iconType="material-community"
                    checkedIcon="checkbox-blank-circle"
                    uncheckedIcon="checkbox-blank-circle-outline"
                    checkedColor="rgb(35,167,199)"
                    containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
                />
                <Text style={{ color: 'rgb(103,109,124)', fontSize: 16 }}>Casino</Text>
            </View>

            <View style={{ backgroundColor: 'rgb(242,246,255)', flexDirection: 'row', alignItems: 'center' }}>
                <CheckBox
                    checked={selectedValue === 'retro.mp3'}
                    onPress={() => handleCheckbox('retro.mp3')}
                    iconType="material-community"
                    checkedIcon="checkbox-blank-circle"
                    uncheckedIcon="checkbox-blank-circle-outline"
                    checkedColor="rgb(35,167,199)"
                    containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
                />
                <Text style={{ color: 'rgb(103,109,124)', fontSize: 16 }}>Retro</Text>
            </View>

            <View style={{ backgroundColor: 'rgb(242,246,255)', flexDirection: 'row', alignItems: 'center' }}>
                <CheckBox
                    checked={selectedValue === 'rooster.mp3'}
                    onPress={() => handleCheckbox('rooster.mp3')}
                    iconType="material-community"
                    checkedIcon="checkbox-blank-circle"
                    uncheckedIcon="checkbox-blank-circle-outline"
                    checkedColor="rgb(35,167,199)"
                    containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
                />
                <Text style={{ color: 'rgb(103,109,124)', fontSize: 16 }}>Rooster</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(242,246,255)',
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    headerStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconStyle: {
        fontSize: 30,
        color: 'black',
        marginRight: '30%'
    },
    headerText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default SoundScreen;