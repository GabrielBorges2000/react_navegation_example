import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Page2 } from "./src/views/page2";
import { Home } from "./src/views/home";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
    <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'green',
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
            height: 70,
            paddingVertical: Platform.OS === 'ios' ? 20 : 0,
            paddingBottom: 10,
            alignItems: 'center',
            justifyContent: 'center'
        }
    }}>
        <Tab.Screen name="Home" component={Home}
            options={{
                tabBarIcon: (() =>
                    <MaterialIcons
                        name='home'
                        size={20}
                        color='#fff'
                    />
                )
            }} />
        <Tab.Screen name="Page 2" component={Page2}
            options={{
                tabBarIcon: (() =>
                    <MaterialIcons
                        name='pages'
                        size={20}
                        color='#fff'
                    />
                )
            }} />
    </Tab.Navigator>
);