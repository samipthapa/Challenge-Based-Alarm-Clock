import React, { useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Slider} from '@miblanchard/react-native-slider';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

function SetAlarmScreen({ navigation }: { navigation: any }): JSX.Element {
    const [date, setDate] = useState(new Date());
    const [volume, setVolume] = useState(1.0);
    const [vibrate, setVibrate] = useState(true);

    return (
        <SafeAreaView>
            <View style={styles.section}>
                <View style={styles.headerBody}>
                    <Ionicons name="chevron-back" size={30} color="black" onPress={() => navigation.navigate('Home')} />
                    <Text style={styles.headerText}>Ring in less than 1 min.</Text>
                    <Text style={styles.previewStyle}>Preview</Text>
                </View>

                <View style={{ alignSelf: 'center', marginVertical: 10 }}>
                    <DatePicker
                        date={date}
                        onDateChange={setDate}
                        mode="time"
                    />
                </View>

                <TouchableOpacity style={styles.repeat}>
                    <Text style={styles.repeatText}>Repeat</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                        <Text style={{ fontSize: 16 }}>Never</Text>
                        <Ionicons name="chevron-forward" size={16} color="gray" />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{ width: '100%', height: '2%', backgroundColor: 'rgb(246,250,254)' }} />

            <View style={styles.section}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.repeatText}>Mission</Text>
                    <Text style={{ fontSize: 16, marginLeft: 5 }}> 0/3</Text>
                </View>

                <TouchableOpacity 
                    style={styles.addMission}
                    onPress={() => navigation.navigate('Mission')}
                >
                    <AntDesign name="plus" size={20} color="black" />
                </TouchableOpacity>
            </View>

            <View style={{ width: '100%', height: '2%', backgroundColor: 'rgb(246,250,254)' }} />

            <View style={styles.section}>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {volume === 0 && <Ionicons name="volume-mute" size={27} color="rgb(137,141,152)" style={styles.speakerIcon} />}
                    {volume !== 0 && <Ionicons name="volume-medium" size={27} color="rgb(67,70,76)" style={styles.speakerIcon} />}

                    <View style={{width: '50%', marginRight: 10, marginBottom: 10,}}>
                        <Slider
                            value={volume}
                            onValueChange={newValue => setVolume(newValue[0])}
                            thumbStyle={styles.thumbStyle}
                            trackStyle={styles.trackStyle}
                            maximumTrackTintColor='rgb(137,141,152)'
                            minimumTrackTintColor='rgb(56,194,224)'
                        />
                    </View>

                    <Ionicons name="play" size={24} color="rgb(137,141,152)" style={[styles.speakerIcon, {marginRight: 0}]} />

                    <Text style={{marginBottom: 15, fontSize: 30, color: 'rgb(56,194,224)'}}> | </Text>

                    <MaterialCommunityIcon name="vibrate" size={27} color="rgb(67,70,76)" style={styles.speakerIcon} />
                </View>

                <View style={styles.configuration}>
                    <Text style={styles.repeatText}>Sound</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                        <Text style={{ fontSize: 16, color: 'black' }}>Homecoming</Text>
                        <Ionicons name="chevron-forward" size={16} color="gray" />
                    </View>
                </View>

                <View style={styles.configuration}>
                    <Text style={styles.repeatText}>Snooze</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                        <Text style={{ fontSize: 16, color: 'black' }}>5 minutes</Text>
                        <Ionicons name="chevron-forward" size={16} color="gray" />
                    </View>
                </View>

                <View style={styles.configuration}>
                    <Text style={styles.repeatText}>Label</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                        <Text style={{ fontSize: 16, color: 'gray' }}>None</Text>
                        <Ionicons name="chevron-forward" size={16} color="gray" />
                    </View>
                </View>


            </View>

            <View style={styles.saveStyle}>
                <Text style={styles.buttonText}>Save</Text>
            </View>



        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    saveStyle: {
        backgroundColor: 'rgb(235,38,65)',
        width: '80%',
        borderRadius: 5,
        paddingVertical: 12,
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        alignSelf: 'center'
    },
    headerBody: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },
    previewStyle: {
        color: 'black'
    },
    repeat: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    repeatText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 16
    },
    section: {
        marginVertical: 10,
        marginHorizontal: 20
    },
    addMission: {
        backgroundColor: 'rgb(242,246,255)',
        height: 80,
        width: 110,
        borderRadius: 5,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    configuration: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 14
    },
    speakerIcon: {
        marginBottom: 10,
        marginRight: 10
    },
    thumbStyle: {
        width: 12,
        height: 12,
        backgroundColor: 'rgb(56,194,224)'
    },
    trackStyle: {
        height: 3,
    }
});

export default SetAlarmScreen;