import React from "react";
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import {
  Ionicons,
  MaterialIcons,
  Feather,
  FontAwesome5,
  Fontisto,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Card, Title, Paragraph } from "react-native-paper";

function home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.home}>
          <View style={styles.tabContainer}>
            <View style={styles.menu}>
              <Ionicons name="menu" size={24} color="black" />
            </View>
            <View style={styles.motor}>
              <MaterialIcons name="motorcycle" size={24} color="black" />
            </View>
            <View style={styles.notify_search}>
              <Feather
                style={{ marginRight: 20 }}
                name="search"
                size={24}
                color="black"
              />
              <Ionicons name="notifications-outline" size={24} color="black" />
            </View>
          </View>

          <View style={styles.textArea}>
            <Text style={styles.text1}>The World's </Text>
            <Text style={styles.text2}>Best Bike</Text>
          </View>
          <View style={styles.categories}>
            <View>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}
              >
                Categories
              </Text>
            </View>
            <View style={styles.categoryTabs}>
              <TouchableOpacity onPress={() => {}} style={styles.tab}>
                <Text>All</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tab}>
                <Text>Roadbike</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tab}>
                <Text>Mountain</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tab}>
                <Text>Urban</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.products}>
            <Card style={styles.card}>
              <Card.Title
                right={(props) => (
                  <FontAwesome5 name="heart" size={24} color="black" />
                )}
              ></Card.Title>

              <Card.Cover
                source={{
                  uri: "https://images.unsplash.com/photo-1505705694340-019e1e335916?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmlrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                }}
              />
              <Card.Content>
                <Paragraph style={{ textAlign: "center" }}>
                  Pinnarello Bike
                </Paragraph>
                <Title style={{ textAlign: "center" }}>$ 1,200</Title>
              </Card.Content>
            </Card>

            <Card style={styles.card}>
              <Card.Title
                right={(props) => (
                  <FontAwesome5 name="heart" size={24} color="black" />
                )}
              ></Card.Title>

              <Card.Cover
                source={{
                  uri: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
                }}
              />
              <Card.Content>
                <Paragraph style={{ textAlign: "center" }}>
                  Pinnarello Bike
                </Paragraph>
                <Title style={{ textAlign: "center" }}>$ 1,200</Title>
              </Card.Content>
            </Card>

            <Card style={styles.card}>
              <Card.Title
                right={(props) => (
                  <FontAwesome5 name="heart" size={24} color="black" />
                )}
              ></Card.Title>

              <Card.Cover
                source={{
                  uri: "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJpa2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                }}
              />
              <Card.Content>
                <Paragraph style={{ textAlign: "center" }}>
                  Pinnarello Bike
                </Paragraph>
                <Title style={{ textAlign: "center" }}>$ 1,200</Title>
              </Card.Content>
            </Card>

            <Card style={styles.card}>
              <Card.Title
                right={(props) => (
                  <FontAwesome5 name="heart" size={24} color="black" />
                )}
              ></Card.Title>

              <Card.Cover
                source={{
                  uri: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmlrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                }}
              />
              <Card.Content>
                <Paragraph style={{ textAlign: "center" }}>
                  Pinnarello Bike
                </Paragraph>
                <Title style={{ textAlign: "center" }}>$ 1,200</Title>
              </Card.Content>
            </Card>
          </View>

          <View style={styles.bottomTab}>
            <View>
              <TouchableOpacity>
                <Ionicons name="ios-mic-circle-sharp" size={60} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.home__bag}>
              <TouchableOpacity>
                <Fontisto name="home" size={24} color="brown" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Cart");
                }}
              >
                <Fontisto name="shopping-bag" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default home;

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: StatusBar.currentHeight },
  home: { display: "flex", flex: 1, marginTop: 50, flexDirection: "column" },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  notify_search: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 10,
  },
  motor: { display: "flex" },
  text1: { fontSize: 20, fontWeight: "bold" },
  text2: { fontSize: 32, color: "orange", fontWeight: "bold" },
  textArea: {
    display: "flex",
    flexDirection: "row",

    alignItems: "center",
  },
  categoryTabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "auto",
  },
  tab: {
    paddingHorizontal: 30,
    backgroundColor: "#e3e3e3",
    paddingVertical: 10,
    borderRadius: 10,
  },
  products: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 50,
    flexWrap: "wrap",
  },
  card: {
    width: 210,
    height: 350,
    display: "flex",
    backgroundColor: "#e3e3e3",
    justifyContent: "space-between",
    borderRadius: 20,
    marginBottom: 20,
  },
  bottomTab: { display: "flex", flexDirection: "column", alignItems: "center" },
  home__bag: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#e3e3e3",
    paddingVertical: 10,
    paddingHorizontal: 220,
    borderRadius: 20,
  },
});
