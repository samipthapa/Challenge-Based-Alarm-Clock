import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import CountdownTimer from '../components/CountdownTimer';
import Ionicons from 'react-native-vector-icons/Ionicons';

function TypingScreen({ navigation }): JSX.Element {
    const [count, setCount] = useState(1);

    const [sentences, setSentences] = useState([
        "Believe in yourself and all that you are capable of",
        "You are stronger than you think",
        "Challenges are opportunities for growth and learning",
        "You are worthy of love and respect",
        "The secret of getting ahead is getting started",
        "Do one thing every day that scares you"
    ]);

    const randomSentence = useMemo(() => sentences[Math.floor(Math.random() * sentences.length)], [count]);

    const [inputText, setInputText] = useState('');

    const isCorrect = (): void => {
        if (count === 2 && inputText.trim() === randomSentence.trim()) {
            navigation.navigate('Home');
        }

        if (inputText.trim() === randomSentence.trim()) {
            setCount(prev => prev + 1);
            setInputText('');
            setSentences(prev => prev.filter(sentence => sentence !== randomSentence));
        }
    }

    useEffect(() => {
        if (inputText.trim().length > 0) {
            isCorrect();
        }
    }, [inputText]);

    const renderTextWithStyles = () => {
        return randomSentence.split('').map((char, index) => {
            let color = 'white';
            let textDecorationLine = 'none';

            if (index < inputText.length) {
                if (char === inputText[index]) {
                    color = '#4D8C57';
                } else {
                    color = 'red';
                    textDecorationLine = 'underline'; // Underline incorrect letters
                }
            }
            return (
                <Text key={index} style={[styles.charText, { color, textDecorationLine }]}>
                    {char}
                </Text>
            );
        });
    };

    return (
        <View style={styles.container}>
            <CountdownTimer
                inputValue={inputText}
                onCountdownFinish={() => navigation.navigate('Preview', { mission: 'Typing' })}
            />

            <View style={{ padding: 20, marginTop: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons name="chevron-back" size={30} color="white"
                        onPress={() => navigation.navigate('Preview', { mission: 'Math' })}
                    />
                    <Text style={styles.challengeStyle}>{count}/2</Text>
                </View>

                <View style={{ marginTop: '5%' }}>
                    <Text style={styles.textStyle}>{renderTextWithStyles()}</Text>

                    <TextInput
                        style={{ color: 'white', fontSize: 20, fontWeight: '500', textAlign: 'center', marginTop: 30 }}
                        value={inputText}
                        onChangeText={setInputText}
                        placeholder="Enter the sentence"
                        autoFocus={true}
                        placeholderTextColor={'rgb(103,109,124)'}
                        onEndEditing={() => isCorrect()}
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
    challengeStyle: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 70,
        fontSize: 16,
        marginLeft: '40%',
    },
    textStyle: {
        color: 'white',
        fontSize: 25,
        fontWeight: '700',
        textAlign: 'center',

    },
});

export default TypingScreen;