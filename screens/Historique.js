import React, { Component } from 'react'
import { Text, View } from 'react-native';
import styles from './StylesScreens';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class Historique extends Component{
    render(){
        return(
            <View style={[styles.mainContainer, { justifyContent: 'center' }]}>
                <Text style={styles.title}>Fonctionnalité en cours de construction</Text>
                <Ionicons name={"md-construct"} size={40}/>
                <Text style={styles.text}>Rendez-vous à la prochaine mise à jour !</Text>

            </View>
        )
    }
}


