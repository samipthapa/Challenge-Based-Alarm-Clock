import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

function CustomKeypad({ onChange, onBackspace, isCorrect }): JSX.Element {


    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity style={styles.squares} onPress={() => onChange('7')}>
                    <Text style={styles.textStyle}>7</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.squares} onPress={() => onChange('8')}>
                    <Text style={styles.textStyle}>8</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.squares} onPress={() => onChange('9')}>
                    <Text style={styles.textStyle}>9</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={styles.squares} onPress={() => onChange('4')}>
                    <Text style={styles.textStyle}>4</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.squares} onPress={() => onChange('5')}>
                    <Text style={styles.textStyle}>5</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.squares} onPress={() => onChange('6')}>
                    <Text style={styles.textStyle}>6</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={styles.squares} onPress={() => onChange('1')}>
                    <Text style={styles.textStyle}>1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.squares} onPress={() => onChange('2')}>
                    <Text style={styles.textStyle}>2</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.squares} onPress={() => onChange('3')}>
                    <Text style={styles.textStyle}>3</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity
                    style={[styles.squares, { backgroundColor: 'rgb(75,81,95)' }]}
                    onPress={onBackspace}
                >
                    <Text style={[styles.textStyle, { fontSize: 20 }]}>⌫</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.squares} onPress={() => onChange('0')}>
                    <Text style={styles.textStyle}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.squares, { backgroundColor: 'rgb(246, 16, 62)' }]}
                    onPress={isCorrect}
                >
                    <Text style={[styles.textStyle, { fontSize: 20 }]}>✓</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(32,33,37)',
        alignSelf: 'center',
        marginTop: 50,
    },
    textStyle: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    squares: {
        backgroundColor: 'rgb(29, 29, 38)',
        height: 60,
        width: 70,
        borderRadius: 7,
        margin: 3,
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
    }
});

export default CustomKeypad;