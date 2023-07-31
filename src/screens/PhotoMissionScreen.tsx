import React, { useMemo, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import CountdownTimer from '../components/CountdownTimer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';

interface Props {
    navigation: any;
}

const PhotoMissionScreen = ({ navigation }: Props): JSX.Element => {
    var randomNumber = Math.random();
    const photo = useRoute().params?.photo;
    const redirect = useRoute().params?.redirect;
    console.log(redirect)
    const [picture, setPicture] = React.useState('');

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: false,
        }).then(image => {
            setPicture(image.path);
            if (redirect) {
                navigation.navigate("Home");
            } else {
                navigation.navigate("NotMatch", { photo: photo });
            }

        });
    };

    return (
        <View style={styles.container}>
            <CountdownTimer
                inputValue={""}
                onCountdownFinish={() => navigation.navigate('Preview', { mission: 'Photo' })}
            />

            <Ionicons name="chevron-back" size={30} color="white"
                style={{ marginTop: 20, marginLeft: 20 }}
                onPress={() => navigation.navigate('Preview', { mission: 'Photo' })}
            />

            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Get ready to take the photo</Text>

                <Image
                    source={{ uri: photo }}
                    style={styles.imageStyle}
                />

                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => takePhotoFromCamera()}
                >
                    <Text style={styles.buttonText}>I'm ready</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'rgb(32,33,37)',
    },
    buttonStyle: {
        backgroundColor: 'rgb(235,38,65)',
        width: '80%',
        borderRadius: 5,
        paddingVertical: 12,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        alignSelf: 'center'
    },
    textStyle: {
        color: 'white',
        fontSize: 27,
        fontWeight: '600',
        width: '50%',
        textAlign: 'center',
        marginBottom: 20,
    },
    imageStyle: {
        width: 270,
        height: 270,
        borderRadius: 5,
        marginBottom: 20,
    },
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default PhotoMissionScreen;