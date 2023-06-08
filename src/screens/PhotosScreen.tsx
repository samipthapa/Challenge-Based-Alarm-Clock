import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-crop-picker';

function PhotosScreen(): JSX.Element {
    const [image, setImage] = React.useState<string[]>([]);

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: false,
        }).then(image => {
            console.log(image);
            setImage(prev => [
                ...prev,
                image.path
            ]);
        });
    };

    return (
        <View style={styles.container}>
            <Ionicons name="chevron-back" style={styles.iconStyle} />

            <Text style={styles.textStyle}>Photo</Text>
            <Text style={styles.subheading}>Take photo of the place you set in advance</Text>

            {image &&
                <FlatList
                    data={image}
                    numColumns={2}
                    renderItem={({ item }) => {
                        return (
                            <Image
                                source={{ uri: item }}
                                style={styles.imageStyle}
                            />
                        )
                    }}
                    keyExtractor={item => item}
                    style={{ flex: 1, height: 'auto' }}
                    contentContainerStyle={{ flexGrow: 1 }}
                />
            }

            <TouchableOpacity
                style={styles.addPhoto}
                onPress={takePhotoFromCamera}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <AntDesign name="plus" size={28} color={"rgb(117,206,226)"} />
                    <Text style={styles.addPhotoText}>Add a Photo</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.saveStyle}
            >
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(242,246,255)',
        flex: 1,
        padding: 10,
    },
    iconStyle: {
        fontSize: 30,
        color: 'black',
        marginRight: '30%'
    },
    textStyle: {
        fontSize: 23,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '3%'
    },
    subheading: {
        fontSize: 16,
        textAlign: 'center',
        color: 'rgb(103,109,124)'
    },
    addPhoto: {
        backgroundColor: 'white',
        borderRadius: 7,
        paddingHorizontal: 25,
        paddingVertical: 20,
        marginTop: '5%',
    },
    addPhotoText: {
        fontSize: 19,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 13
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        alignSelf: 'center'
    },
    saveStyle: {
        backgroundColor: 'rgb(235,38,65)',
        width: '100%',
        borderRadius: 5,
        paddingVertical: 12,
        alignSelf: 'center',
        marginTop: '130%'
    },
    imageStyle: {
        width: 175,
        height: 175,
        borderRadius: 5,
    },
});

export default PhotosScreen;