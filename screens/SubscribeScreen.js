import * as React from "react";
import { Pressable } from "react-native";
import { TextInput } from "react-native";
import { View, StyleSheet, Image, Text, Alert, Keyboard } from "react-native";

const SubscribeScreen = () => {
  const [email, onChangeEmail] = React.useState("");
  const thanksMessage = () => {
    Keyboard.dismiss();
    Alert.alert("Thanks for subscribing, stay tuned", null, [
      {
        text: "OK",
        onPress: () => {
          onChangeEmail("");
        },
      },
    ]);
  };
  // Add subscribe screen code here
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/little-lemon-logo-grey.png")}
      ></Image>
      <Text style={styles.mainText}>
        Subscribe to out newsletter for our latest delicious recipes!
      </Text>
      <TextInput
        style={styles.inputBox}
        placeholder="Type your email"
        value={email}
        onChangeText={onChangeEmail}
      ></TextInput>
      <Pressable style={styles.button} onPress={thanksMessage}>
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
  logo: {
    height: 100,
    width: 100,
    resizeMode: "contain",
    marginTop: 25,
  },
  mainText: {
    fontSize: 20,
    textAlign: "center",
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 30,
  },
  inputBox: {
    width: 315,
    borderWidth: 1,
    padding: 5,
    borderColor: "EDEFEE",
    borderRadius: 5,
    marginTop: 20,
    paddingLeft: 10,
  },
  button: {
    width: 315,
    backgroundColor: "black",
    paddingTop: 7,
    paddingBottom: 7,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
  },
});
export default SubscribeScreen;
