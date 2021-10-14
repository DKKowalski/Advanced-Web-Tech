import React from "react";

import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/bikeimg.jpg")} />

      <Text style={styles.text1}>Welcome to</Text>
      <Text style={styles.text2}>Power Bike Shop</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={styles.loginGmail}
      >
        <AntDesign
          style={{ color: "red", marginRight: 10 }}
          name="google"
          size={24}
          color="black"
        />
        <Text style={{ fontSize: 20 }}>Login with Gmail</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginApple}>
        <AntDesign
          style={{ marginRight: 10 }}
          name="apple1"
          size={24}
          color="white"
        />
        <Text style={{ color: "white", fontSize: 20 }}>Login with Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginTop: 10 }}>
        <Text>
          not a member? <Text style={{ color: "brown" }}>Signup</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 350,
    height: 350,
    borderRadius: 32,
    marginBottom: 68,
    transform: [{ rotate: "-45deg" }]
    
  },
  loginGmail: {
    flexDirection: "row",
    backgroundColor: "#e3e3e3",
    fontSize: 20,
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 60,
    marginTop: 20,
    alignItems: "center",
  },
  loginApple: {
    flexDirection: "row",
    backgroundColor: "black",
    fontSize: 10,
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 60,
    marginTop: 20,
    alignItems: "center",
    color: "white",
  },

  text1: { fontSize: 32, color: "#e3e3e3" },
  text2: {
    fontWeight: "bold",
    fontSize: 62,
  },
});

export default Login;
