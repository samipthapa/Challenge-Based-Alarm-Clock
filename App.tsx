import HomeScreen from './src/screens/HomeScreen';
import SetAlarmScreen from './src/screens/SetAlarmScreen';
import MissionScreen from './src/screens/MissionScreen';
import UpdateAlarmScreen from './src/screens/UpdateAlarmScreen';
import PreviewScreen from './src/screens/PreviewScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

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
    <Stack.Screen name="Update" component={UpdateAlarmScreen} />
    <Stack.Screen name="Preview" component={PreviewScreen} />
    </Stack.Navigator>
  )
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;