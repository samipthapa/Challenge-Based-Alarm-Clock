import React, { useState, useEffect } from 'react';
import {
    Text,
    StyleSheet,
    View,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { Slider } from '@miblanchard/react-native-slider';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ModalComponent from '../components/ModalComponent';
import { CheckBox } from '@rneui/themed';
import { openDatabase } from 'react-native-sqlite-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import store from '../redux/store';
import { useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setUpdate } from '../redux/actions';
import { setAlarmID } from '../redux/actions';
import { useSelector } from 'react-redux';

let db = openDatabase({ name: 'AlarmDatabase.db' });

function SetAlarmScreen({ navigation }: { navigation: any }): JSX.Element {
    const dispatch = useDispatch();
    const route = useRoute();
    const mission = route.params?.title;

    const [date, setDate] = useState(new Date());
    const [title, setTitle] = useState('');
    const [volume, setVolume] = useState(1.0);
    const [vibrate, setVibrate] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        if (mission)
            setTitle(mission);
    }, [mission]);

    useEffect(() => {
        if (route.params?.alarmID) {
            db.transaction(txn => {
                txn.executeSql("SELECT * FROM table_alarm where alarmID=?", [route.params.alarmID], (tx, res) => {
                    const data = res.rows.item(0);
                    console.log(data);
                    const date = new Date(data.date);
                    setDate(date);
                    setTitle(data.mission);
                    dispatch(setAlarmID(route.params.alarmID));
                })
            })
        }
    }, []);

    const { iconName, IconProvider } = store.getState()?.[title] ?? {};

    let IconComponent = null;

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

    const alarmID = useSelector(state => state.alarmID);

    const saveData = (): void => {

        if (alarmID !== 0) {
            const dateStr = date.toISOString();
            console.log(title);

            db.transaction(txn => {
                txn.executeSql("UPDATE table_alarm set date=?, mission=? where alarmID=?", [dateStr, title, alarmID], (tx, res) => {
                    navigation.goBack();
                })
            })
            dispatch(setAlarmID(0));
        }

        else {
            const dateStr = date.toISOString();

            db.transaction(txn => {
                txn.executeSql(
                    'INSERT INTO table_alarm(isEnabled, date, mission) VALUES (?, ?, ?)',
                    [true, dateStr, title],
                    (tx, res) => {
                        if (res.rowsAffected == 1) {
                            navigation.goBack();
                        }
                        console.log(res)
                    },
                    error => {
                        console.log(error);
                    }
                );
            })
        }

    };

    return (
        <SafeAreaView>
            <ModalComponent
                visibility={modalVisible}
                onChangeVisibility={() => setModalVisible(prev => !prev)}
            />

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
                        textColor='black'
                    />
                </View>

                <TouchableOpacity
                    style={styles.repeat}
                    onPress={() => setModalVisible(prev => !prev)}
                >
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
                    {title && <View>
                        <IconComponent name={iconName} style={styles.iconStyle} />
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.missionStyle}>{title}</Text>
                            <Ionicons name="chevron-forward" size={20} color="black" />
                        </View>
                    </View>}

                    {!title && <AntDesign name="plus" size={20} color="black" />}
                </TouchableOpacity>
            </View>

            <View style={{ width: '100%', height: '2%', backgroundColor: 'rgb(246,250,254)' }} />

            <View style={styles.section}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {volume === 0 && <Ionicons name="volume-mute" size={27} color="rgb(137,141,152)" style={styles.speakerIcon} />}
                    {volume !== 0 && <Ionicons name="volume-medium" size={27} color="rgb(67,70,76)" style={styles.speakerIcon} />}

                    <View style={{ width: '50%', marginRight: 10, marginBottom: 10, }}>
                        <Slider
                            value={volume}
                            onValueChange={newValue => setVolume(newValue[0])}
                            thumbStyle={styles.thumbStyle}
                            trackStyle={styles.trackStyle}
                            maximumTrackTintColor='rgb(137,141,152)'
                            minimumTrackTintColor='rgb(56,194,224)'
                        />
                    </View>

                    <Ionicons name="play" size={24} color="rgb(137,141,152)" style={[styles.speakerIcon, { marginRight: 0 }]} />

                    <Text style={{ marginBottom: 15, fontSize: 30, color: 'rgb(56,194,224)' }}> | </Text>

                    <MaterialCommunityIcon
                        name="vibrate"
                        size={27}
                        color="rgb(67,70,76)"
                        style={{ marginBottom: 10 }}
                    />

                    <CheckBox
                        checked={vibrate}
                        iconType="material-community"
                        checkedIcon="checkbox-marked"
                        uncheckedIcon="checkbox-blank-outline"
                        checkedColor="rgb(35,167,199)"
                        onPress={() => setVibrate(prev => !prev)}
                        wrapperStyle={{ marginBottom: 10 }}
                    />
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

            <TouchableOpacity
                style={styles.saveStyle}
                onPress={() => saveData()}
            >
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>

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
        marginVertical: 12
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
    },
    missionStyle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black'
    },
    iconStyle: {
        fontSize: 16,
        color: 'black',
    },
});

export default SetAlarmScreen;