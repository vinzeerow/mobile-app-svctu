import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import BottomTab from '../../component/Tab/BottomTab';

const ProfileScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text variant="headlineMedium">PROFILE!</Text>
            
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
export default ProfileScreen;