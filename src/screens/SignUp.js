// React Native code example
import React, {useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';

const SignUp = (props) => {
  // State variables for the two input bars
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  return (
    <View style={styles.container}>
      <ImageBackground
            source={require("../../../assets/signinback.png")}
            style={styles.backgroundImage}
      /> 

      {/* ScholarUp Image */}
      <Image
        style={styles.image}
        source={require("../../../assets/logo.png")}
      />

       {/* Third input User */}
       <TextInput
         style={styles.input}
         placeholder="enter email"
         value={email}
         onChangeText={setEmail}
      />

      {/* First input User */}
      <TextInput
         style={styles.input}
         placeholder="enter username"
         value={username}
         onChangeText={setUsername}
      />

      {/* Second input Password */}
      <TextInput
        style={styles.input}
        placeholder="enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Fourth input User */}
      <TextInput
         style={styles.input}
         placeholder="confirm password"
         value={confirm}
         onChangeText={setConfirm}
      />

      {/* bar sign up */}
      <TouchableOpacity style={styles.bar} onPress>
          <Text style={styles.text}>sign up</Text>
        </TouchableOpacity>

      {/* Clickable text at the bottom for log in */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Have an account?</Text>
        <TouchableOpacity onPress= {function(){props.navigation.navigate('SignIn')}}>
          <Text style={[styles.footerText, styles.link]}>Log in</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  backgroundImage:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    //opacity: 0.3,     
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  image: {
    flex: 1,
    width: 350,
    height: "100%",
    resizeMode: "contain", 
  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: '#84a169',
    borderRadius: 25,
    padding: 10,
    fontSize: 18,
  },
  bar: {
    width: 100,
    height: 50,
    backgroundColor: '#84a169',
    borderRadius: 25,
    padding: 10,
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 18,
    color: '#84a169',
    marginHorizontal: 5,
    fontWeight: "bold",
  },
  link: {
    fontSize: 18,
    color: "#88725b",
    fontWeight: "bold",
  },
});

export default SignUp;
