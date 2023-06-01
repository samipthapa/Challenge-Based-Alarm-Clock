import Sound from 'react-native-sound';

function useAlarmTone(mp3FileName: string): Sound {
    Sound.setCategory('Playback');
    const alarmTone = new Sound(mp3FileName, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }

        alarmTone.play(success => {
            if (success) {
                console.log('successfully finished playing');
            } else {
                console.log('Error');
            }
        });
    });

    return alarmTone;
};

export default useAlarmTone;
