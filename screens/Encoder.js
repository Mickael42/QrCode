import React, { Component } from 'react';
import QRCode from 'react-native-qrcode';
import styles from './StylesScreens';
import {
  AppRegistry,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native';


class QrCodeGenerator extends Component {
  state = {
    text: 'https://github.com/Mickael42',
    show: false
  };



  handleChangeState() {
    if (this.state.show == true) {
      this.setState({ show: false })
    } else {
      this.setState({ show: true })
    }
  }

  showComponent() {
    if (this.state.show == true) {
      return (
        <>
          <QRCode
            value={this.state.text}
            size={200}
            bgColor='black'
            fgColor='white' />
          <Text style={styles.text}>QR Code de l'url: </Text>
          <Text>{this.state.text}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={(() => this.handleChangeState())}>
            <Text style={styles.buttonText}>Retour</Text>
          </TouchableOpacity>
        </>
      );
    } else {
      return (
        <>
          <Text style={styles.title}>Générateur de QR Code</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ text: text })}
            placeholder={'Veuillez entrer l\'url à encoder'}
            placeholderTextColor={"black"}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={(() => this.handleChangeState())}>
            <Text style={styles.buttonText} >Afficher le QR Code</Text>
          </TouchableOpacity>
        </>
      )

        ;
    }
  };

  render() {
    return (
      <View style={[styles.mainContainer, { justifyContent: 'center' }]}>
        {this.showComponent()}
      </View>
    );
  };
}


AppRegistry.registerComponent('QrCodeGenerator', () => QrCodeGenerator);

module.exports = QrCodeGenerator;