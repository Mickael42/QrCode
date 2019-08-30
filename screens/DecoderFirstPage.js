import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import styles from './StylesScreens';
import Decoder from "./Decoder";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class DecoderFirstPage extends React.Component {
  static navigationOptions = {
    header: null
  }
  render() {
    const image = require('../assets/logo_transparent.png');
    return (
      <ImageBackground source={image} style={{ width: '100%', height: '100%' }}>
        <View style={[styles.mainContainer, { justifyContent: 'flex-end' }]}>
          <View style={styles.containerButton}>
            <TouchableOpacity
              style={styles.buttonIcon}
              onPress={() => this.props.navigation.navigate('Decoder')}>
              <FontAwesome name={`camera`} size={36} style={styles.icon}></FontAwesome>
            </TouchableOpacity>
            <Text style={styles.text}>Décoder un QR code</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const AppNavigator = createStackNavigator({
  DecoderFirstPage: {
    screen: DecoderFirstPage
  },
  Decoder: {
    screen: Decoder
  }
},

);

export default createAppContainer(AppNavigator);