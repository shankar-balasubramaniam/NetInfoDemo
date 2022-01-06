/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import NetInfo from '@react-native-community/netinfo';

const App = () => {
  const [netInfo, setNetInfo] = useState({});

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setNetInfo(state);
    });
    return () => unsubscribe();
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.background}>
        <Text style={styles.title}>NetInfo Demo</Text>
        <View style={styles.separator} />
        <Text
          style={
            styles.infoText
          }>{`Connected to a network: ${netInfo.isConnected}`}</Text>
        <Text
          style={styles.infoText}>{`Connection Type: ${netInfo.type}`}</Text>
        <Text
          style={
            styles.infoText
          }>{`Has internet: ${netInfo.isInternetReachable}`}</Text>
        <Text style={styles.infoText}>{`Strength: ${
          netInfo?.details?.strength || 'undefined'
        }`}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#ccc7b9',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 27,
    color: '#004643',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#000',
  },
  infoText: {
    fontSize: 21,
    marginHorizontal: 50,
    marginVertical: 20,
    color: '#63585e',
  },
});

export default App;
