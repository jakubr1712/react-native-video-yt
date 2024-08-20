import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import SearchBar from "@/components/SearchBar";

import Card from "@/components/Card";
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
        <Text style={styles.title}>Results</Text>

        {data.map((item, index) => (
          <Card item={item} index={index} key={index} />
        ))}
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
