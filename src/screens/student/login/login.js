import React, { useState } from 'react';
import { View, StyleSheet} from 'react-native';
import { TextInput,Button  } from 'react-native-paper';
// import axios from 'axios';
// import { IP } from '../../../config/index';

const LoginScreen = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [account, setAccount] = useState([]);

  const handleLogin = () => {
    // Xử lý logic đăng nhập
    // var url = "http://" + IP + ":3000/account";
    // axios.get(url).then((taikhoan) => {
    //   var flag = false;
    //   var typeAccount;
    //   taikhoan.data.map((item) => {
    //     if (username == item.tendangnhap && password == item.matkhau) {
    //       flag = true;
    //       typeAccount = item.ltk_maloai.toString();
    //     }
    //   })
    //   if (flag) {
    //     /* Student account */
    //     if (typeAccount == '1') {
    //       props.navigation.navigate('HOME');
    //     }
    //     /* Admin account */
    //     else {
    //       console.log(typeAccount);
    //       props.navigation.navigate('ADMIN_TAB');
    //     }
    //   }
    //   else Alert.alert('Tài khoản hoặc mật khẩu không đúng');
    //   setAccount(taikhoan.data);
    // });

    props.navigation.navigate('HOME');
  };
  const handleSignup = () => {
    // Xử lý logic đăng ký
    props.navigation.navigate('SIGNUP');
  };

  return (
    <View style={styles.container} >
      <TextInput
        label="Tên đăng nhập"
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={styles.input}
      />
      <TextInput
        label="Mật khẩu"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Đăng nhập
      </Button>
      <Button mode="contained" onPress={handleSignup} style={styles.button}>
        Đăng ký
      </Button>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 56,
  },
  input: {
    marginBottom: 12,
  },
  button: { 
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#00649F",
    paddingVertical: 6
  },
});

export default LoginScreen;
