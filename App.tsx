import HomeScreen from './src/screens/HomeScreen';
import SetAlarmScreen from './src/screens/SetAlarmScreen';
import MissionScreen from './src/screens/MissionScreen';
import PreviewScreen from './src/screens/PreviewScreen';
import MathMissionScreen from './src/screens/MathMissionScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
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
    </Stack.Navigator>
  )
}

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;