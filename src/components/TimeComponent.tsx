import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

function TimeComponent(): JSX.Element {
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

    return (
        <View style={{ backgroundColor: 'rgb(42,51,82)' }}>
            <View style={{ flexDirection: 'column' }}>
                <View style={styles.circle1} />
                <View style={styles.circle2} />
                <Text style={styles.dateStyle}>{currentDate}</Text>
            </View>

            <Text style={styles.timeStyle}>{currentTime}</Text>
            <View style={styles.circle3} />
        </View>
    )
}

const styles = StyleSheet.create({

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
});

export default TimeComponent;