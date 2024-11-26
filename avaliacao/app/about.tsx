import React from "react";
import { View, Text, StyleSheet, Linking, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import AcTionReturn from "../components/actionReturn";

export default function about() {
  const router = useRouter();

  return (
    <ActionSheetProvider>
      <View style={styles.container}>
        <View style={styles.actionReturn}>
          <AcTionReturn />
        </View>

        <Text style={styles.header}>Sobre o App</Text>
        <Text style={styles.text}>Versão 1.0</Text>
        <Text style={styles.text}>
          Desenvolvido por João Victor Santos Bacelar
        </Text>
        <Pressable
          onPress={() =>
            Linking.openURL("https://github.com/BacelarJV?tab=repositories")
          }
        >
          <Text style={styles.link}>Meu GitHub</Text>
        </Pressable>
        <Pressable style={styles.menuButton} onPress={() => router.push("/")}>
          <Text style={styles.menuButtonText}>Voltar</Text>
        </Pressable>
      </View>
    </ActionSheetProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#836FFF",
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 16,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  link: {
    fontSize: 16,
    color: "#007AFF",
    textDecorationLine: "underline",
    marginBottom: 16,
  },
  menuButton: {
    marginTop: 16,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#007AFF",
    alignItems: "center",
  },
  menuButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  actionReturn: {
    position: "absolute",
    left: 310,
    top: 32,
  },
});
