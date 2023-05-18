import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function PreviewScreen(): JSX.Element {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'column'}}>
                <View style={styles.circle1} />
                <View style={styles.circle2} />
                <Text style={styles.dateStyle}>May 18 Thu</Text>
            </View>

            <Text style={styles.timeStyle}>4:46</Text>
            <View style={styles.circle3} />

            <TouchableOpacity
                style={styles.snoozeButton}
            >
                <Text style={styles.snoozeText}>Snooze</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.dismissButton}
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
        fontSize: 90,
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