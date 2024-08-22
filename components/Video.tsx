import React from "react";
import Video, { VideoRef } from "react-native-video";
import { StyleSheet } from "react-native";

const VideoPlayer = () => {
  const videoRef = React.useRef<VideoRef>(null);
  const background = require("../assets/bgc.mp4");

  return (
    <Video
      source={background}
      ref={videoRef}
      onError={(e) => console.log(e)}
      style={styles.backgroundVideo}
      resizeMode="cover"
      onBuffer={(e) => console.log(e)}
    />
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
