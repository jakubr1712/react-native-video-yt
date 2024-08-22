import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { View } from "@/components/Themed";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SearchBar = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearchSubmit = () => {
    navigation.navigate("search", { query: searchQuery });
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
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
        onSubmitEditing={handleSearchSubmit}
        returnKeyType="search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
