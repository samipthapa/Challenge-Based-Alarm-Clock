import React from 'react';
import { 
    Text,
    StyleSheet, 
    View, 
    SafeAreaView,
    FlatList,
    Dimensions
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');
const colors = {
  black: '#323F4E',
  red: '#F76A6A',
  text: '#ffffff',
};

const hours = [...Array(12).keys()].map((i) => (i === 0 ? 1 : i + 1));
const minutes = [...Array(60).keys()].map((i) => (i < 10 ? '0' : '') + i);

const ITEM_SIZE = width * 0.38;
const ITEM_SPACING = (width - ITEM_SIZE) / 2;

function SetAlarmScreen(): JSX.Element {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.headerBody}>
                <Ionicons name="chevron-back" size={30} color="black" />
                <Text style={styles.headerText}>Ring in less than 1 min.</Text>
                <Text style={styles.previewStyle}>Preview</Text>
            </View>

            <View style={{height: '30%'}}>              
                <FlatList
                    data={hours}
                    keyExtractor={item => item.toString()}
                    bounces={false}
                    snapToInterval={ITEM_SIZE}
                    style={{flexGrow: 0}}
                    contentContainerStyle={{
                        paddingVertical: ITEM_SPACING
                    }}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => {
                        return <View>
                            <Text>{item}</Text>
                        </View>
                    }}
                />
            </View>

            <View style={styles.saveStyle}>
                <Text style={styles.buttonText}>Save</Text>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    saveStyle: {
        backgroundColor: 'rgb(235,38,65)',
        width: '80%',
        borderRadius: 5,
        paddingVertical: 12,
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        alignSelf: 'center'
    },
    headerBody: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },
    previewStyle: {
        color: 'black'
    },
    container: {
        margin: 10
    },
});

export default SetAlarmScreen;