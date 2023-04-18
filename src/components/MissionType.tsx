import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function MissionType({ title, iconName, IconProvider }): JSX.Element {
    return (
        <View style={styles.container}>
            <IconProvider name={iconName} style={styles.iconStyle}/>

            <Text style={styles.nameStyle}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 60,
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    nameStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },
    iconStyle: {
        fontSize: 22,
        color: 'black',
        marginHorizontal: 12
    },
});

export default MissionType;