import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Title } from 'react-native-paper';

const SignUpScreen = () => {
  const handleButtonPress = () => {
    console.log('Button pressed!');
  };

  return (
    <View style={styles.container}>
      <Title>Welcome to Signup Screen</Title>
      <Button mode="contained" onPress={handleButtonPress} style={styles.button}>
        Press Me
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  button: {
    marginTop: 16,
  },
});
export default SignUpScreen;