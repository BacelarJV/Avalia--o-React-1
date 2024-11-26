import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, Pressable, Alert } from "react-native";
import { useRouter } from "expo-router";
import ImageButton from "../components/ImagemButton";

export default function LoginScreen() {
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
      <Text style={styles.logo}>DutyFree App</Text>
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
      <ImageButton source={require("../../assets/login-button.png")} onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  input: {
    width: "80%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 16,
  },
});
