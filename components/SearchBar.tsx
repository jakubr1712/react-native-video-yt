import React from "react";
import { TextInput, StyleSheet, Platform } from "react-native";
import { Text, View } from "@/components/Themed";

import { Ionicons } from "@expo/vector-icons";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    // Tutaj możesz dodać logikę do wyszukiwania lub filtracji danych
  };

  return (
    <View style={styles.searchContainer}>
      <Ionicons
        name="search"
        size={20}
        color="grey"
        style={{ marginHorizontal: 10 }}
      />
      <TextInput
        placeholder="Search videos"
        value={searchQuery}
        onChangeText={handleSearchChange}
        style={styles.searchInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // pozostałe style
  searchContainer: {
    flexDirection: "row",
    width: "100%",
    padding: 10,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  searchInput: {
    flex: 1,
    padding: 8,
    fontSize: 16,
  },
});

export default SearchBar;
