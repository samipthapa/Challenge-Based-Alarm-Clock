import React, {useState}  from 'react';
import { View, Text, StyleSheet, Switch, TouchableWithoutFeedback } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { openDatabase } from 'react-native-sqlite-storage';

let db = openDatabase({ name: 'AlarmDatabase.db' });

function AlarmDetail({ date, isActive, alarmID, setAlarmList }): JSX.Element {
    const [isEnabled, setIsEnabled] = useState(isActive === 1 ? true : false);

    const dateObj = new Date(date);
    const timeString = dateObj.toLocaleTimeString();
    const timeArray = timeString.split(' ');
    const timeComponents = timeArray[0].split(":");
    const time = timeComponents[0] + ':' + timeComponents[1];
    const ampm = timeArray[1];

    const deleteAlarm = () => {
        db.transaction(txn => {
            txn.executeSql("DELETE FROM table_alarm where alarmID=?", [alarmID]);
            txn.executeSql("SELECT * FROM table_alarm", [], 
                (tx, res) => {
                    let temp = [];
                    for (let i = 0; i < res.rows.length; ++i) {
                        temp.push(res.rows.item(i));
                    }
                    setAlarmList(temp);
                })
        })
    }

    const toggleAlarm = () => {

        db.transaction(txn => {
            txn.executeSql("UPDATE table_alarm set isEnabled=? where alarmID=?", 
            [!isEnabled, alarmID], 
            (tx, res) => {
                console.log('Updated Database')
            })
        })
        
        setIsEnabled(previousState => !previousState);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.repeatText}>Every day</Text>

            <View style={styles.toggle}>
                <View style={styles.timeContainer}>
                    <Text style={styles.timeStyle}>{time}</Text>
                    <Text style={styles.period}>{ampm}</Text>
                </View>

                <Switch
                    trackColor={{false: 'rgb(237,240,245)', true: 'rgb(178,234,247)'}}
                    thumbColor={isEnabled ? 'rgb(1,184,224)' : 'rgb(185,185,185)'}
                    onValueChange={() => {
                        toggleAlarm()
                    }}
                    value={isEnabled}
                />
            </View>

            <View style={styles.missionBody}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.missionText}>Mission</Text>
                    <MaterialCommunityIcons name="calculator-variant" size={20} color="black" />
                </View>

                {/* <SimpleLineIcons name="options-vertical" size={13} color="black" /> */}
                <TouchableWithoutFeedback
                    onPress={deleteAlarm}
                >
                    <Feather name="trash-2" size={23} color="black" />
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 25,
        paddingVertical: 15,
        borderRadius: 10,
        elevation: 2,
        marginBottom: 10,
    },
    timeStyle: {
        fontSize: 35,
        color: 'black',
        fontWeight: 'bold',
        marginRight: 5
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    missionBody: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '99%',
    },
    missionText: {
        color: 'black',
        marginRight: 5,
    },
    repeatText: {
        color: 'rgb(4,183,224)',
        fontSize: 15,
        fontWeight: 'bold',
    },
    toggle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 3
    },
    period: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold'
    }
});

export default AlarmDetail;