import { StyleSheet, Image } from "react-native";
import { Text, View } from "@/components/Themed";
import { useRouter } from "expo-router";
import CommonButton from "../components/CommonButton";

export default function LoginScreen() {
  const router = useRouter();

  const handleButtonPress = () => {
    router.replace(`/main`);
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/login/logo.png")}
        style={styles.banner}
        resizeMode="contain"
      />
      <Image
        source={require("../assets/login/app-icon.png")}
        style={styles.banner}
        resizeMode="contain"
      />
      <Text style={styles.title}>
        Welcome to the best YouTube-based learning application.
      </Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

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

      <Text
        style={styles.getStartedText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        By continuing you agree with Terms and Conditions and Privacy Policy
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: "100%",
    height: 200,
  },
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
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
});
