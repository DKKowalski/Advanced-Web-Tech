import React from "react";
import {
  StatusBar,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "react-native-paper";

function Cart() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headTab}>
          <Ionicons name="arrow-back" size={24} color="black" />
          <Text
            style={{
              marginLeft: 192,
              fontWeight: "bold",
              fontSize: 18,
              textAlign: "center",
            }}
          >
            Cart list
          </Text>
        </View>

        <View>
          <Text style={{ textAlign: "center" }}>(3 items)</Text>
          <View style={styles.itemsContainer}>
            <View style={styles.item1}>
              <Drawer.Item
                style={{ backgroundColor: "#ffff" }}
                right={() => (
                  <Image
                    style={styles.image}
                    source={{
                      uri: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
                    }}
                  />
                )}
                icon="star"
                label="First Item"
              />
            </View>
            <View style={styles.item2}></View>
            <View style={styles.item3}></View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Cart;
const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: StatusBar.currentHeight },
  headTab: { display: "flex", flexDirection: "row" },
  image: {
    width: 150,
    height: 150,
    borderRadius: 32,
  },
});
