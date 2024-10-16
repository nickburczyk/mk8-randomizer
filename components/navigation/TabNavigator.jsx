import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { palette } from "../../style/palette";
import { Ionicons } from "@expo/vector-icons";
// import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import {
  WelcomeScreen,
  KartsScreen,
  SettingsScreen,
  HistoryScreen,
} from "../../screens";

const Tab = createBottomTabNavigator();

const iconNames = {
  Welcome: "home-outline",
  Karts: "car-outline",
  Settings: "settings-outline",
  History: "save-outline",
  fallback: "ellipsis-horizontal-circle-outline",
};

export const TabNavigator = () => (
  <Tab.Navigator
    sceneContainerStyle={{ backgroundColor: "none" }}
    initialRouteName="Welcome"
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size }) => {
        const iconName = iconNames[route.name] ?? iconNames.fallback;
        return <Ionicons name={iconName} color={color} size={size} />;
      },
      tabBarActiveTintColor: palette.white.hex,
      tabBarInactiveTintColor: palette.white.hex,
      tabBarActiveBackgroundColor: palette.blue.hex,
      tabBarAccessibilityLabel: route.title,
      tabBarLabelStyle: {
        fontWeight: "900",
        fontStyle: "italic",
        textTransform: "uppercase",
        marginBottom: 10,
      },
      tabBarStyle: { height: 75, backgroundColor: palette.red.hex },
    })}
  >
    <Tab.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ title: "Home" }}
    />
    <Tab.Screen name="Karts" component={KartsScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
    <Tab.Screen name="History" component={HistoryScreen} />
  </Tab.Navigator>
);
