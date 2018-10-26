/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class FirstProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          안녕, 아이폰 앱!
        </Text>
        <Text style={styles.instructions}>
          나는 지금 처음으로 앱을 만들어봐
        </Text>

        <View style={styles.container2}>
          <Text style={styles.welcome}>
            이 부분은 응용을 한 거지~ flex2
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
          <Text style={styles.customized}>
            일기장 앱을 만들꺼야!! 데이구래무!!!
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin: 30,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  container2: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  customized: {
    textAlign: 'center',
    color: '#f00',
    fontSize: 20,
  },
});

AppRegistry.registerComponent('FirstProject', () => FirstProject);
