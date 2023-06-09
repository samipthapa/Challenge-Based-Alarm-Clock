import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { store } from '../redux/store';

function MissionType({ title, navigation }): JSX.Element {
    let IconComponent = null;
    const { iconName, IconProvider } = store.getState()[title];

    switch (IconProvider) {
        case 'MaterialCommunityIcons':
            IconComponent = MaterialCommunityIcons;
            break;
        case 'FontAwesome5':
            IconComponent = FontAwesome5;
            break;
        case 'MaterialIcons':
            IconComponent = MaterialIcons;
            break;
        case 'AntDesign':
            IconComponent = AntDesign;
            break;
        case 'Ionicons':
            IconComponent = Ionicons;
            break;
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                if (title == "Photo") navigation.navigate('Photos');
                else navigation.navigate('Alarm', { title });
            }}
        >
            <IconComponent name={iconName} style={styles.iconStyle} />

            <Text style={styles.nameStyle}>{title}</Text>
        </TouchableOpacity>
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