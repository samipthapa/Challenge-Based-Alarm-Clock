import React, { useState } from 'react';
import { 
    Text,
    StyleSheet, 
    View, 
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';

function SetAlarmScreen({ navigation }: {navigation: any}): JSX.Element {
    const [date, setDate] = useState(new Date());

    return (
        <SafeAreaView>
            <View style={styles.section}>
                <View style={styles.headerBody}>
                    <Ionicons name="chevron-back" size={30} color="black" onPress={() => navigation.navigate('Home')} />
                    <Text style={styles.headerText}>Ring in less than 1 min.</Text>
                    <Text style={styles.previewStyle}>Preview</Text>
                </View>

                <View style={{alignSelf: 'center', marginVertical: 10}}>
                    <DatePicker 
                        date={date} 
                        onDateChange={setDate} 
                        mode="time"
                    />
                </View>

                <TouchableOpacity style={styles.repeat}>
                    <Text style={styles.repeatText}>Repeat</Text>
                    <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                        <Text style={{fontSize: 16}}>Never</Text>
                        <Ionicons name="chevron-forward" size={16} color="gray" />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{width: '100%', height: '2%', backgroundColor: 'rgb(246,250,254)'}}/>

            <View style={styles.section}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.repeatText}>Mission</Text>
                    <Text style={{fontSize: 16, marginLeft: 5}}> 0/3</Text>
                </View>
                <TouchableOpacity style={styles.addMission}>
                    <AntDesign name="plus" size={20} color="black" />
                </TouchableOpacity>
            </View>

            <View style={{width: '100%', height: '2%', backgroundColor: 'rgb(246,250,254)'}}/>

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
    }
});

export default SetAlarmScreen;