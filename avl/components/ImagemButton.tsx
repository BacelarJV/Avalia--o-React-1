import React from "react";
import { Pressable, Image, StyleSheet } from "react-native";

interface ImageButtonProps {
  source: any;
  onPress: () => void;
}

const ImageButton: React.FC<ImageButtonProps> = ({ source, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Image source={source} style={styles.image} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default ImageButton;
