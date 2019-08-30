import React, { Component } from 'react';
import QRCode from 'react-native-qrcode';
import styles from './StylesScreens';

import {
    AppRegistry,
    View,
    TextInput
} from 'react-native';

class QrCodeGenerator extends Component {
  state = {
    text: 'boby',
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text: text})}
          value={this.state.text}
        />
        <QRCode
          value={this.state.text}
          size={200}
          bgColor='blue'
          fgColor='white'/>
      </View>
    );
  };
}


AppRegistry.registerComponent('HelloWorld', () => QrCodeGenerator);

module.exports = QrCodeGenerator;