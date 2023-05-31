import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

function CountdownTimer({ inputValue }): JSX.Element {
    const [seconds, setSeconds] = useState(30);
    const [progress, setProgress] = useState(1);

    useEffect(() => {
        setSeconds(30);
    }, [inputValue]);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prevSeconds) => {
                if (prevSeconds > 0) {
                    return prevSeconds - 1;
                } else {
                    clearInterval(timer);
                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        setProgress(seconds / 30);
    }, [seconds]);

    return (
        <View>
            <ProgressBar
                progress={progress}
                animationType='timing'
                animated={true}
                width={null}
                color='rgb(207,211,220)'
                borderColor='rgb(32,33,37)'
                height={4}
            />
        </View>
    )
}

export default CountdownTimer;