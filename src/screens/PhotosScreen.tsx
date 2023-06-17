import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-crop-picker';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setImagePath } from "../redux/actions";

const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
        numberOfElementsLastRow++;
    }

    return data;
};

const numColumns = 3;

const renderItem = ({ item, index }) => {
    if (item.empty === true) {
        return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
        <View style={styles.item}>
            <Image
                source={{ uri: item }}
                style={styles.imageStyle}
            />
        </View>
    );
};

function PhotosScreen(): JSX.Element {
    const dispatch = useDispatch();
    const paths = useSelector(state => state.imagePath);

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: false,
        }).then(image => {
            dispatch(setImagePath(image.path));
        });
    };

    const formattedData = formatData(paths, numColumns);

    return (
        <View style={styles.container}>
            <Ionicons name="chevron-back" style={styles.iconStyle} />

            <Text style={styles.textStyle}>Photo</Text>
            <Text style={styles.subheading}>Take photo of the place you set in advance</Text>

            <View style={{ flex: 1 }}>
                <FlatList
                    data={formattedData}
                    style={styles.imageContainerStyle}
                    numColumns={3}
                    renderItem={renderItem}
                />
            </View>

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
    imageContainer: {
        flexGrow: 1,
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
    },
    imageStyle: {
        height: 120,
        width: '100%',
        borderRadius: 5
    },
    imageContainerStyle: {
        flex: 1,
        marginVertical: 20,
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 2,
    },
    itemInvisible: {
        backgroundColor: 'transparent',
    },
});

export default PhotosScreen;