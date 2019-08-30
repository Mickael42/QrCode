import { StyleSheet } from 'react-native';


export default StyleSheet.create({

  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: 'bold',
  },
  text: {
    textAlign: "center",
    fontSize: 23,

  },
  input: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
  },
  button: {
    backgroundColor: '#1273b0',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  buttonText: {
    color: "white",
    fontSize: 22,
    textAlign: 'center',
  },
  containerButton: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    marginBottom: 30,
  },

  buttonIcon: {
    borderRadius: 100,
    borderStyle: "dotted",
    borderWidth: 3,
    width: 100,
    height: 100,
    borderColor: 'grey',
    justifyContent: 'center',
    alignSelf: 'center',

  },
  icon: {
    alignSelf: 'center',
  }
})