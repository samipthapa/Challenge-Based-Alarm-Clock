import React, { useState, useMemo } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import CustomKeypad from '../components/CustomKeypad';

function MathMissionScreen({ navigation }): JSX.Element {
    const [inputValue, setInputValue] = useState('');
    const [state, setState] = useState('?');

    const [num1, num2] = useMemo(() => {
        const n1 = Math.floor(Math.random() * 91) + 10;
        const n2 = Math.floor(Math.random() * 91) + 10;
        return [n1, n2];
    }, []);

    function isCorrect(): void {
        const result = num1 + num2 === Number(inputValue);
        setInputValue('');
        setState(result ? '✓' : '❌');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.challengeStyle}>1/3</Text>
            <Text style={styles.textStyle}>{num1}+{num2}</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '95%', alignSelf: 'center', marginTop: 20, alignItems: 'center' }}>
                <Text style={styles.textStyle}>=</Text>
                {inputValue == '' && <Text style={[styles.textStyle, { fontSize: 25 }]}>{state}</Text>}
                {inputValue != '' && <Text style={styles.textStyle}>{inputValue}</Text>}
            </View>

            <CustomKeypad
                onChange={(value: string) => setInputValue(prev => prev + value)}
                onBackspace={() => setInputValue(prev => prev.slice(0, -1))}
                isCorrect={isCorrect}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'rgb(32,33,37)',
        padding: 20
    },
    textStyle: {
        color: 'white',
        fontSize: 35,
        fontWeight: '700',
        textAlign: 'center',

    },
    challengeStyle: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 70,
        fontSize: 16
    },
    squares: {
        backgroundColor: 'white',
        height: 50,
        width: 50,
        borderRadius: 5,
    }
});

export default MathMissionScreen;