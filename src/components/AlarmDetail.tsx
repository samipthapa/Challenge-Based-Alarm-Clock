import React, {useState}  from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

function AlarmDetail(): JSX.Element {
    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.repeatText}>Every day</Text>

            <View style={styles.toggle}>
                <View style={styles.timeContainer}>
                    <Text style={styles.timeStyle}>5:32</Text>
                    <Text style={styles.period}>AM</Text>
                </View>

                <Switch
                    trackColor={{false: 'rgb(237,240,245)', true: 'rgb(178,234,247)'}}
                    thumbColor={isEnabled ? 'rgb(1,184,224)' : 'rgb(185,185,185)'}
                    onValueChange={() => {
                        setIsEnabled(previousState => !previousState);
                    }}
                    value={isEnabled}
                />
            </View>

            <View style={styles.missionBody}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.missionText}>Mission</Text>
                    <MaterialCommunityIcons name="calculator-variant" size={20} color="black" />
                </View>

                <SimpleLineIcons name="options-vertical" size={13} color="black" />
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