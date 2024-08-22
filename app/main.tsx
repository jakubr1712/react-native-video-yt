import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import MyCarousel from "@/components/MyCarousel";
import SearchBar from "@/components/SearchBar";
import { ScrollView } from "react-native";

export default function MainScreen() {
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
        <MyCarousel query={"React Native"} />
        <Text style={styles.title}>React</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <MyCarousel query={"React"} />
        <Text style={styles.title}>Typescript</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <MyCarousel query={"Typescript"} />
        <Text style={styles.title}>Javascript</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <MyCarousel query={"Javascript"} />
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
