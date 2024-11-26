import { Tabs } from "expo-router";

export default function App() {
  return (
    <Tabs>
      <Tabs.Screen name="login" options={{ title: "Login" }} />
      <Tabs.Screen name="list" options={{ title: "Listagem" }} />
      <Tabs.Screen name="about" options={{ title: "Sobre" }} />
    </Tabs>
  );
}
