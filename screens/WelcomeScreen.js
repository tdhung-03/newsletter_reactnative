import * as React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/little-lemon-logo.png")}
      ></Image>
      <Text style={styles.mainText}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Subscribe")}
      >
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
  },
  logo: {
    height: 250,
    width: 250,
    resizeMode: "contain",
    marginTop: 100,
  },
  mainText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 40,
  },
  button: {
    width: 315,
    backgroundColor: "black",
    paddingTop: 7,
    paddingBottom: 7,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
  },
});
export default WelcomeScreen;
