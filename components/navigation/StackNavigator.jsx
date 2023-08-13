import { createStackNavigator } from "@react-navigation/stack";
import { palette } from "../../assets/palette";
import { MenuScreen, WelcomeScreen, LoginScreen, ContactScreen } from "../../screens";

const Stack = createStackNavigator();

export const StackNavigator = () => (
  <Stack.Navigator 
    initialRouteName='Welcome'
    screenOptions={{
      // TODO: look into white background breaking UI.
      cardStyle: { backgroundColor: 'transparent' },
      headerStyle: { backgroundColor: palette.red.hex },
      headerTintColor: palette.yellow.hex,
    }}
  >
    <Stack.Screen 
      name='Welcome' 
      component={WelcomeScreen}
      options={{title: 'Home'}}
    />
    <Stack.Screen 
      name='Menu' 
      component={MenuScreen}
    />
    <Stack.Screen 
      name='Contact' 
      component={ContactScreen}
    />
    <Stack.Screen 
      name='Login' 
      component={LoginScreen}
    />
  </Stack.Navigator>
)