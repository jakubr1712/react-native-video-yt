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

interface CardData {
  title: string;
  image: string;
  description: string;
  link: string;
}

interface CarouselProps {
  data: CardData[];
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

import CommonButton from "../components/CommonButton";

const MyCarousel: React.FC<CarouselProps> = ({ data }) => {
  const handleButtonPress = () => {
    console.log("Button pressed");
  };
  return (
    <View style={styles.cardsContainer}>
      <CommonButton
        type="1"
        title="Log in as guest"
        onPress={handleButtonPress}
        width="50%"
        height={45}
        backgroundColor="royalblue"
        borderRadius={25}
        textAlign="center"
        textColor="seashell"
        fontFamily="Arial"
        textSize={25}
      />
      <Carousel
        data={data}
        renderItem={({ item, index }) => (
          <CarouselCardItem item={item} index={index} />
        )}
        sliderWidth={screenWidth}
        itemWidth={screenWidth * 0.8} // Szerokość karty jako 80% szerokości ekranu
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
    width: "100%", // Szerokość dopasowana do itemWidth w Carousel
    paddingBottom: 20, // Miejsce na opis i przycisk
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
    height: screenWidth * 0.5, // Proporcjonalna wysokość obrazka (50% szerokości ekranu)
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
