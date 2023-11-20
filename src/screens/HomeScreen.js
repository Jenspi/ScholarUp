import React from "react";
import { Text, StyleSheet, View } from "react-native";

const HomeScreen = () => {
  return <View style={styles.container}>
            <Text style={styles.text}>HomeScreen</Text>
          </View>
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: "E9E3DC",
    flex:1
  },
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
