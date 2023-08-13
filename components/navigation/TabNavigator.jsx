import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { palette } from "../../assets/palette";
import { Ionicons } from "@expo/vector-icons";
import { MenuScreen, WelcomeScreen, LoginScreen, ContactScreen } from "../../screens";

const Tab = createBottomTabNavigator();

const iconNames = {
  'Welcome': 'md-home-outline',
  'Menu': 'md-restaurant-outline',
  'Contact': 'chatbubbles-outline',
  'Login': 'lock-open-outline',
  fallback: 'ellipsis-horizontal-circle-outline'
}

export const TabNavigator = () => (
  <Tab.Navigator 
    sceneContainerStyle={{backgroundColor: 'none'}}
    initialRouteName='Welcome'
    screenOptions={({route})=>({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        const iconName = iconNames[route.name] ?? iconNames.fallback
        return <Ionicons name={iconName} color={color} size={size}/>
      },
      tabBarActiveTintColor: palette.yellow.hex,
      tabBarInactiveTintColor: palette.gray.hex,
      tabBarActiveBackgroundColor: palette.red.hex,
      tabBarAccessibilityLabel: route.title,
      tabBarLabelStyle: {
        fontWeight:'900', fontStyle: 'italic', textTransform: 'uppercase', marginBottom: 10
      },
      tabBarStyle: { height: 75, backgroundColor: palette.yellow.hex },
    })}
  >
    <Tab.Screen 
      name='Welcome' 
      component={WelcomeScreen}
      options={{title: 'Home'}}
    />
    <Tab.Screen 
      name='Menu' 
      component={MenuScreen}
    />
    <Tab.Screen 
      name='Contact' 
      component={ContactScreen}
    />
    <Tab.Screen 
      name='Login' 
      component={LoginScreen}
    />
  </Tab.Navigator>
)