import React from "react";
import { Pressable, Image, StyleSheet, GestureResponderEvent, ImageSourcePropType } from "react-native";

type imageButtonProps = {source: ImageSourcePropType; onPress: () => void; style?: object};
const ImageButton: React.FC<imageButtonProps> = ({ source, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Image source={ source } style={styles.image} />
    </Pressable>
  );
};

export default ImageButton;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 8,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
});
