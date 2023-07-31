import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

function NoMatchScreen({ navigation }): JSX.Element {
    const photo = useRoute().params?.photo;
    console.log('Hello');

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Photo does not match, please try again!</Text>

            <TouchableOpacity
                style={styles.dismissButton}
                onPress={
                    () => navigation.navigate('PhotoMission', { photo: photo, redirect: true })
                }
            >
                <Text style={styles.dismissText}>Go Back</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'rgb(32,33,37)',
    },
    textStyle: {
        color: 'white',
        fontSize: 35,
        fontWeight: '700',
        textAlign: 'center',

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
});

export default NoMatchScreen;