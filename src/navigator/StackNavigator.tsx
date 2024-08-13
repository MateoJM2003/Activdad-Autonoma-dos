import { createStackNavigator } from '@react-navigation/stack';
import BienvenidoScreen from '../screens/BienvenidoScreen';
import Pantalla2Screen from '../screens/Pantalla2Screen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name="Welcome" options={{ headerShown: false }} component={BienvenidoScreen} />
      <Stack.Screen name="Division" options={{ headerShown: false }} component={Pantalla2Screen} />
    </Stack.Navigator>
  );
};
