import * as React from 'react';
import styles from './StylesScreens';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import { BarCodeScanner } from 'expo-barcode-scanner';

export default class Decoder extends React.Component {
  static navigationOptions={
    title: 'Retour' 
  }
  state = {
    hasCameraPermission: null,
    scanned: false,
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>L'application a besoin d'avoir accès à la camméra</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>Problème d'accès à la caméra</Text>;
    }
    return (
      <View
        style={styles.mainContainer}>
        <Text style={[styles.text, { marginTop: 5 }]}>Pointez la caméra vers le QR Code</Text>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && (
          <Button
            title={'Recommencer le scan'}
            style={{justifyContent : 'flex-end'}}
            onPress={() => this.setState({ scanned: false })}
          />
        )}
      </View>
    );
  }

  handleBarCodeScanned = ({data }) => {
    this.setState({ scanned: true });
    alert(`Succès ! Le QR code a bien été scanné avec la donnée suivante : 
     ${data}`);
  };
}


