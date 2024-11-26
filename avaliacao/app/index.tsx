import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import ImageButton from "../components/ImageButton";
import { Image } from "react-native";

export default function login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (username === "fulano" && password === "123") {
      router.push("/list");
    } else {
      Alert.alert("Erro", "Usuário ou senha inválidos.");
    }
  };

  return (
    <View style={styles.container}>
      <Text>
        <Image
          source={require("../assets/images/av.png")}
          resizeMode="contain"
        />
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <ImageButton
        source={require("../assets/images/a.png")}
        onPress={handleLogin}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
    backgroundColor: "#836FFF",
  },

  input: {
    width: "80%",
    padding: 10,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 100,
    marginBottom: 20,
  },
});
