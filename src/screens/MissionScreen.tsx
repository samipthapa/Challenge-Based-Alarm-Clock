import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MissionType from '../components/MissionType';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
                    iconName="brain"
                    IconProvider={MaterialCommunityIcons}
                    navigation={navigation}
                />
                <MissionType
                    title="Typing"
                    iconName="keyboard"
                    IconProvider={FontAwesome5}
                    navigation={navigation}
                />
                <MissionType
                    title="Math"
                    iconName="calculate"
                    IconProvider={MaterialIcons}
                    navigation={navigation}
                />
            </View>

            <View style={styles.missionView}>
                <Text style={styles.missionText}>Wake Your Body</Text>
                <MissionType
                    title="Step"
                    IconProvider={MaterialIcons}
                    iconName="directions-walk"
                    navigation={navigation}
                />
                <MissionType
                    title="Shake"
                    IconProvider={AntDesign}
                    iconName="shake"
                    navigation={navigation}
                />
                <MissionType
                    title="Photo"
                    iconName="camera"
                    IconProvider={Ionicons}
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