export const setAlarmID = (alarmID: number) => {
    return {
        type: 'ALARMID',
        payload: alarmID
    }
}

export const setSound = (sound: string) => {
    return {
        type: 'SOUND',
        payload: sound
    }
}

export const setImagePath = (imagePath: string) => {
    return {
        type: 'IMAGEPATH',
        payload: imagePath
    }
}