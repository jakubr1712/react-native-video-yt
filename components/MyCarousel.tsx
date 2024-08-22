import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Linking,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { useRouter } from "expo-router";
import CommonButton from "../components/CommonButton";
import { searchYouTubeVideos } from "../api/searchYouTubeVideos";

export interface CardData {
  title: string;
  image: string;
  description: string;
  link: string;
}

interface CarouselProps {
  query: string;
}

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const CarouselCardItem: React.FC<{ item: CardData; index: number }> = ({
  item,
  index,
}) => {
  return (
    <View style={styles.cardContainer} key={index}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
          <Text style={styles.link}>Learn More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const MyCarousel: React.FC<CarouselProps> = ({ query }) => {
  const router = useRouter();

  const handleButtonPress = () => {
    router.replace(`/search?query=${query}`);
  };

  const [videos, setVideos] = React.useState<CardData[]>([]);

  const handleSearchChange = (query: string) => {
    if (query.length > 3) {
      searchYouTubeVideos(query, 3).then(setVideos);
    }
  };

  React.useEffect(() => {
    query && handleSearchChange(query);
  }, []);

  return (
    <View style={styles.cardsContainer}>
      <CommonButton
        type="1"
        title="Show more"
        onPress={handleButtonPress}
        height={35}
        backgroundColor="royalblue"
        borderRadius={10}
        textAlign="center"
        textColor="seashell"
        fontFamily="Arial"
        textSize={25}
      />
      <Carousel
        data={videos}
        renderItem={({ item, index }) => (
          <CarouselCardItem item={item} index={index} />
        )}
        sliderWidth={screenWidth}
        itemWidth={screenWidth * 0.8}
        useScrollView={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    height: screenHeight * 0.5,
  },
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    width: "100%",
    paddingBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  image: {
    width: "100%",
    height: screenWidth * 0.5,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  description: {
    fontSize: 14,
    marginVertical: 5,
  },
  link: {
    color: "blue",
    paddingVertical: 10,
    textAlign: "center",
  },
});

export default MyCarousel;
