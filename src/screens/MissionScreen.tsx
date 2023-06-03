import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MissionType from '../components/MissionType';

function MissionScreen({ navigation }: { navigation: any }): JSX.Element {

    return (
        <View style={styles.container}>
            <View style={styles.headerStyle}>
                <Ionicons name="chevron-back" style={styles.iconStyle} onPress={() => navigation.navigate('Alarm')} />

                <Text style={styles.headerText}>Select Mission</Text>
            </View>

            <View style={styles.missionView}>
                <Text style={styles.missionText}>Wake Your Brain</Text>
                <MissionType
                    title="Memory"
                    navigation={navigation}
                />
                <MissionType
                    title="Typing"
                    navigation={navigation}
                />
                <MissionType
                    title="Math"
                    navigation={navigation}
                />
            </View>

            <View style={styles.missionView}>
                <Text style={styles.missionText}>Wake Your Body</Text>
                <MissionType
                    title="Step"
                    navigation={navigation}
                />
                <MissionType
                    title="Shake"
                    navigation={navigation}
                />
                <MissionType
                    title="Photo"
                    navigation={navigation}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(242,246,255)',
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    headerText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
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
    missionView: {
        marginTop: '10%'
    },
    missionText: {
        fontWeight: 'bold',
        color: 'rgb(103,109,124)',
        fontSize: 13,
    }
});

export default MissionScreen;