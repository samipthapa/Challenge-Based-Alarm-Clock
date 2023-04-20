import React, {useState} from 'react';
import { 
    Text, 
    View, 
    StyleSheet, 
    Modal,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { CheckBox } from '@rneui/themed';

function ModalComponent({ visibility }): JSX.Element {
    const [days, setDays] = useState([
        { day: 'Sunday', active: true },
        { day: 'Monday', active: false },
        { day: 'Tuesday', active: false },
        { day: 'Wednesday', active: false },
        { day: 'Thursday', active: false },
        { day: 'Friday', active: false },
        { day: 'Saturday', active: false },
      ]);
    return (
        <Modal
            transparent={true}
            visible={visibility}
        >
            <View style={{backgroundColor: '#000000aa', flex: 1}}>
                    <View style={styles.modalStyle}>
                        <Text style={styles.titleStyle}>Repeat</Text>

                        <View style={styles.row}>
                            <TouchableOpacity
                                style={styles.buttonStyle}
                                onPress={() =>  setDays((prevDays) => {
                                    const weekdaysTrue = prevDays.slice(1, 6).every((day) => day.active);

                                    return prevDays.map((day, index) => {
                                      if (index >= 1 && index <= 5) {
                                        return { ...day, active: !weekdaysTrue };
                                    }
                                      return day;
                                    })
                                  })
                                }
                            >
                                <Text style={styles.buttonText}>+Weekdays</Text>
                            </TouchableOpacity>
                        
                            <TouchableOpacity
                                style={styles.buttonStyle}
                                onPress={() =>  setDays((prevDays) => {
                                    const weekendsTrue = prevDays[0].active && prevDays[6].active;

                                    return prevDays.map((day, index) => {
                                      if (index === 0 || index === 6) {
                                            return { ...day, active: !weekendsTrue };
                                    } 
                                      return day;
                                    })
                                  })
                                }
                            >
                                <Text style={styles.buttonText}>+Weekends</Text>
                            </TouchableOpacity>
                        </View>

                        <FlatList
                            data={days}
                            renderItem={({item, index}) => {
                                return (
                                    <TouchableOpacity 
                                        style={{flexDirection: 'row', alignItems: 'center'}}
                                        onPress={() => setDays((prev) => {
                                            const newDays = [...prev];
                                            newDays[index].active = !newDays[index].active;
                                            return newDays;
                                        })}
                                        activeOpacity={1}
                                    >
                                        <CheckBox
                                            checked={item.active}
                                            iconType="material-community"
                                            checkedIcon="checkbox-marked"
                                            uncheckedIcon="checkbox-blank-outline"
                                            checkedColor="rgb(35,167,199)"
                                        />
                                        <Text>{item.day}</Text>
                                    </TouchableOpacity>
                                )
                            }}
                            keyExtractor={(item) => item.day}
                        />

                        <View style={styles.doneStyle}>
                            <Text style={styles.doneText}>Done</Text>
                        </View>
                    </View>
                </View>

        </Modal>
    );
};

const styles = StyleSheet.create({
    modalStyle: {
        backgroundColor: '#ffffff', 
        marginTop: '49%', 
        marginHorizontal: 15, 
        height: '73%', 
        borderRadius: 7,
        padding: 25
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        color: 'black'
    },
    buttonStyle: {
        borderWidth: 1,
        borderColor: 'rgb(160,163,169)',
        borderRadius: 5,
        padding: 7,
        width: '48%',
        textAlign: 'center'
    },
    row: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginTop: 15
    },
    buttonText: {
        alignSelf: 'center',
        fontSize: 16,
        color: 'rgb(160,163,169)',
    },
    doneStyle: {
        backgroundColor: 'rgb(234,234,244)',
        width: '100%',
        borderRadius: 5,
        paddingVertical: 8,
        alignSelf: 'center',
    },
    doneText: {
        color: 'rgb(52,52,62)',
        fontSize: 15,
        fontWeight: '500',
        alignSelf: 'center'
    },
});

export default ModalComponent;