import { StyleSheet } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { ScrollView } from "react-native";

import React from "react";
import { Button, View, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function TabOneScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Tab One details</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <Button
          title="Go to Search"
          onPress={() => navigation.navigate("search")}
        />
        <Button
          title="Go to Main"
          onPress={() => navigation.navigate("main")}
        />
        {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
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
