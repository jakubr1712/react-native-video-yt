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

interface CardData {
  title: string;
  image: string;
  description: string;
  link: string;
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

export default CarouselCardItem;

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
