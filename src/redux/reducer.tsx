const initialState = {
    "Memory": {
        "title": "Memory",
        "iconName": "brain",
        "IconProvider": "MaterialCommunityIcons",
    },
    "Typing": {
        "title": "Typing",
        "iconName": "keyboard",
        "IconProvider": "FontAwesome5",
    },
    "Math": {
        "title": "Math",
        "iconName": "calculate",
        "IconProvider": "MaterialIcons",
    },
    "Step": {
        "title": "Step",
        "iconName": "directions-walk",
        "IconProvider": "MaterialIcons",
    },
    "Shake": {
        "title": "Shake",
        "iconName": "shake",
        "IconProvider": "AntDesign",
    },
    "Photo": {
        "title": "Photo",
        "iconName": "camera",
        "IconProvider": "Ionicons",
    },
    "": {
        "title": "",
        "iconName": "cross",
        "IconProvider": "Entypo",
    },
    "alarmID": 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ALARMID':
            return {
                ...state,
                "alarmID": action.payload
            };
        default:
            return state;
    }
};

export default reducer;