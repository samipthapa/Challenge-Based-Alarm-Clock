import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import AlarmDetail from '../components/AlarmDetail';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useSQLite from '../hooks/useSQLite';
import { useIsFocused } from '@react-navigation/native';

import { openDatabase } from 'react-native-sqlite-storage';

let db = openDatabase({ name: 'AlarmDatabase.db' });

function HomeScreen({ navigation }: { navigation: any }): JSX.Element {
    const [alarmList, setAlarmList] = useState([]);
    const [remainingTime, setRemainingTime] = useState("");
    const isFocused = useIsFocused();

    useSQLite();

    useEffect(() => {
        db.transaction(txn => {
            txn.executeSql("SELECT * FROM table_alarm", [],
                (tx, res) => {
                    let temp = [];
                    if (res.rows.length === 0) {
                        setRemainingTime("No upcoming alarms");
                    }
                    for (let i = 0; i < res.rows.length; ++i) {
                        temp.push(res.rows.item(i));
                    }
                    temp.sort((a, b) => new Date(a.date) - new Date(b.date));
                    setAlarmList(temp);
                })

        });

    }, [isFocused]);

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = new Date().toLocaleTimeString();

            alarmList.forEach(alarm => {
                const alarmTimeObject = new Date(alarm.date).toLocaleTimeString();

                if (alarmTimeObject === currentTime && alarm.isEnabled) {
                    navigation.navigate('Preview', { mission: alarm.mission });
                    console.log('Alarm triggered');
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [alarmList]);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.nextAlarm}>Next alarm</Text>
                <Text style={styles.countdown}>{remainingTime}</Text>
                <FlatList
                    data={alarmList}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={() => navigation.navigate('Alarm', {
                                    alarmID: item.alarmID,
                                })}
                            >
                                <AlarmDetail
                                    date={item.date}
                                    isActive={item.isEnabled}
                                    alarmID={item.alarmID}
                                    setAlarmList={setAlarmList}
                                />
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={item => item.alarmID}
                />

            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Alarm')}>
                    <Ionicons name="add-circle-sharp" size={70} color="rgb(244,16,59)" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'rgb(242,246,255)',
        height: '100%',
        justifyContent: 'space-between',
    },
    countdown: {
        marginBottom: 30,
        fontWeight: 'bold',
        color: 'black',
        fontSize: 19,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 10,
    },
    nextAlarm: {
        fontWeight: 'bold',
        color: 'rgb(103,109,124)',
        fontSize: 16,
        marginVertical: 3,
    }
});

export default HomeScreen;