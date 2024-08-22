import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import SearchBar from "@/components/SearchBar";
import Card, { CardData } from "@/components/Card";
import { ScrollView } from "react-native";
import React from "react";
import { searchYouTubeVideos } from "@/api/searchYouTubeVideos";
import { useLocalSearchParams } from "expo-router";

const SearchScreen: React.FC = ({}) => {
  const { query } = useLocalSearchParams<{ query?: string }>();
  const [videos, setVideos] = React.useState<CardData[]>([]);

  const handleSearchChange = (query: string) => {
    if (query.length > 3) {
      searchYouTubeVideos(query, 10).then(setVideos);
    }
  };

  React.useEffect(() => {
    query && handleSearchChange(query);
  }, [query]);

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <SearchBar />

      <View style={styles.container}>
        <Text style={styles.title}>Results</Text>

        {videos.map((item, index) => (
          <Card item={item} index={index} key={index} />
        ))}
      </View>
    </ScrollView>
  );
};

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

export default SearchScreen;
