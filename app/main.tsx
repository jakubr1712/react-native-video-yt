import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";

import MyCarousel from "@/components/MyCarousel";
import SearchBar from "@/components/SearchBar";
import { ScrollView } from "react-native";

export default function ModalScreen() {
  const data = [
    {
      title: "First Item",
      image:
        "https://justjoin.it/blog/wp-content/uploads/2021/09/React_Native_Logo.png",
      description: "Description for first item",
      link: "https://example.com",
    },
    {
      title: "second Item",
      image:
        "https://justjoin.it/blog/wp-content/uploads/2021/09/React_Native_Logo.png",
      description: "Description for second item",
      link: "https://example.com",
    },
    {
      title: "3 Item",
      image:
        "https://justjoin.it/blog/wp-content/uploads/2021/09/React_Native_Logo.png",
      description: "Description for second item",
      link: "https://example.com",
    },
    {
      title: "4 Item",
      image:
        "https://justjoin.it/blog/wp-content/uploads/2021/09/React_Native_Logo.png",
      description: "Description for second item",
      link: "https://example.com",
    },
  ];

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <SearchBar />
      <View style={styles.container}>
        <Text style={styles.title}>React Native</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <MyCarousel data={data} />
        <Text style={styles.title}>React</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <MyCarousel data={data} />
        <Text style={styles.title}>Typescript</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <MyCarousel data={data} />
        <Text style={styles.title}>Javascript</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <MyCarousel data={data} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
