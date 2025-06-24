import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Dashboard from './components/Dashboard'
import Drawer from './components/Drawer'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Signup" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Dashboard" component={Drawer} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
