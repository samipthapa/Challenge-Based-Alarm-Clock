import React, { useState, useMemo } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import CustomKeypad from '../components/CustomKeypad';
import CountdownTimer from '../components/CountdownTimer';
import Ionicons from 'react-native-vector-icons/Ionicons';

function MathMissionScreen({ navigation }): JSX.Element {
    const [inputValue, setInputValue] = useState('');
    const [state, setState] = useState('?');
    const [count, setCount] = useState(1);

    const [num1, num2] = useMemo(() => {
        const n1 = Math.floor(Math.random() * 91) + 10;
        const n2 = Math.floor(Math.random() * 91) + 10;
        return [n1, n2];
    }, [count]);

    function isCorrect(): void {
        if (count == 3) {
            navigation.navigate('Home');
        }
        const result = num1 + num2 === Number(inputValue);
        setInputValue('');
        setState(result ? '✓' : '❌');

        if (result) {
            setCount(prev => prev + 1);

            setTimeout(() => {
                setState('?');
            }, 500);
        } else {
            setTimeout(() => {
                setState('?');
            }, 500);
        }
    }

    const handleCountdownFinish = () => {
        navigation.navigate('Preview', { mission: 'Math' });
    };

    return (
        <View style={styles.container}>
            <CountdownTimer
                inputValue={inputValue}
                onCountdownFinish={handleCountdownFinish}
            />

            <View style={{ padding: 20, marginTop: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons name="chevron-back" size={30} color="white"
                        onPress={() => navigation.navigate('Preview', { mission: 'Math' })}
                    />
                    <Text style={styles.challengeStyle}>{count}/3</Text>
                </View>

                <View style={{ marginTop: '5%' }}>
                    <Text style={styles.textStyle}>{num1}+{num2}</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '95%', alignSelf: 'center', marginTop: 30, alignItems: 'center' }}>
                        <Text style={styles.textStyle}>=</Text>
                        {inputValue == '' ? <Text style={[styles.textStyle, { fontSize: 25 }]}>{state}</Text>
                            : <Text style={styles.textStyle}>{inputValue}</Text>}
                    </View>

                    <CustomKeypad
                        onChange={(value: string) => setInputValue(prev => prev + value)}
                        onBackspace={() => setInputValue(prev => prev.slice(0, -1))}
                        isCorrect={isCorrect}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'rgb(32,33,37)',
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
        fontSize: 16,
        marginLeft: '40%',
    },
    squares: {
        backgroundColor: 'white',
        height: 50,
        width: 50,
        borderRadius: 5,
    }
});

export default MathMissionScreen;