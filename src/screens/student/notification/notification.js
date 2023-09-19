import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, View} from 'react-native';
import { WebView } from 'react-native-webview';
import {ActivityIndicator} from 'react-native-paper'
import * as Location from 'expo-location';
const NotificationScreen = () => {
    const [errorMsg,setErrorMsg]=useState('');
    const [location,setLocation]=useState('');
    useEffect(()=>{
        getLocationAsync();
    },[])
    
    const getLocationAsync = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      };
    return location ? (
        <View style={styles.container}>
          <WebView
            source={{uri: 'https://vinzeerow.github.io/webMap/'}}
          />
        </View>
      ) : (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default NotificationScreen;