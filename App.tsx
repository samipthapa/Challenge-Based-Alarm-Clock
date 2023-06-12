import HomeScreen from './src/screens/HomeScreen';
import SetAlarmScreen from './src/screens/SetAlarmScreen';
import MissionScreen from './src/screens/MissionScreen';
import PreviewScreen from './src/screens/PreviewScreen';
import MathMissionScreen from './src/screens/MathMissionScreen';
import TypingScreen from './src/screens/TypingScreen';
import SoundScreen from './src/screens/SoundScreen';
import PhotosScreen from './src/screens/PhotosScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './src/redux/store';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Photos'
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#FFFFFF' },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Alarm" component={SetAlarmScreen} />
      <Stack.Screen name="Mission" component={MissionScreen} />
      <Stack.Screen name="Preview" component={PreviewScreen} />
      <Stack.Screen name="MathMission" component={MathMissionScreen} />
      <Stack.Screen name="TypingMission" component={TypingScreen} />
      <Stack.Screen name="Sound" component={SoundScreen} />
      <Stack.Screen name="Photos" component={PhotosScreen} />
    </Stack.Navigator>
  )
}

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;