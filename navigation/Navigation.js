import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Encoder from '../screens/Encoder';
import Decoder from '../screens/Decoder';
import Historique from '../screens/Historique';
import Ionicons from 'react-native-vector-icons/Ionicons';



const Navigation = createBottomTabNavigator({
  Décoder: {
    screen: Decoder
  },
  Encoder: {
    screen: Encoder
  },
  Historique: {
    screen: Historique
  }
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Encoder') {
          iconName = `ios-arrow-dropup`;
        } else if (routeName === 'Décoder') {
          iconName = `ios-arrow-dropdown`;
        }
        else if (routeName === 'Historique') {
          iconName = `ios-clock`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    },
  }
);


const AppNavigator = createAppContainer(Navigation)

export default AppNavigator;