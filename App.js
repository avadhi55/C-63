import * as React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {Header} from 'react-native-elements';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      text: ''
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <Header
          backgroundColor= '#edd4a6'
          centerComponent={{ text: 'Word Chunk', style : {color: '#fff', fontSize: 20}}}
        />

        <TextInput
          style = {styles.inputBox} 
          onChangeText = {input=>{
            this.setState({text: input})
          }}
          value = {this.state.text}
        />
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  inputBox: {
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  }
});
