import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer,
    createSwitchNavigator
} from "react-navigation";

import { ProfileScreen, HistoryScreen, AuthScreen } from "../screens";

const AppStack = createBottomTabNavigator({
    History: createStackNavigator({
        History: HistoryScreen
    }),
    Profile: createStackNavigator({
        Profile: ProfileScreen
    })
})
const AuthStack = createStackNavigator({ SignIn: AuthScreen });

export default createAppContainer(createSwitchNavigator(
    {
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'Auth',
    }
));