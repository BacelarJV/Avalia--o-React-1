import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  Pressable,
  ActionSheetIOS,
} from "react-native";
import { useRouter } from "expo-router";
import data from "../services/data";
import ActionFormButton from "../components/style/actionformbuttom";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import AcTion from "../components/action";

interface Passenger {
  id: number;
  passenger_name: string;
  passenger_avatar: string;
  origin: string;
  destination: string;
}

interface Section {
  title: string;
  data: Passenger[];
}

export default function list() {
  const router = useRouter();
  const [sections, setSections] = useState<Section[]>([]);

  // Função para agrupar passageiros por país (origem e destino)
  const groupByCountry = (passengers: Passenger[]): Section[] => {
    const grouped: Record<string, Passenger[]> = {};

    passengers.forEach((passenger) => {
      [passenger.origin, passenger.destination].forEach((country) => {
        if (!grouped[country]) {
          grouped[country] = [];
        }
        grouped[country].push(passenger);
      });
    });

    // Transforma o objeto em um array de seções ordenado por país
    return Object.keys(grouped)
      .sort()
      .map((country) => ({
        title: `${country} (${grouped[country].length})`,
        data: grouped[country],
      }));
  };

  useEffect(() => {
    // Organiza os dados ao carregar a tela
    const groupedData = groupByCountry(data);
    setSections(groupedData);
  }, []);

  return (
    <ActionSheetProvider>
      <View style={styles.container}>
        <View style={styles.action}>
          <AcTion />
        </View>
        <Text style={styles.header}>Lista de Passageiros</Text>

        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id.toString()}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          renderItem={({ item }) => (
            <Text style={styles.item}>
              {item.passenger_name} - {item.origin} → {item.destination}
            </Text>
          )}
        />
        <Pressable
          style={styles.menuButton}
          onPress={() => router.push("/about")}
        >
          <Text style={styles.menuButtonText}>Sobre</Text>
        </Pressable>
      </View>
    </ActionSheetProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#836FFF",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#836FFF",
    padding: 8,
    marginTop: 16,
  },
  item: {
    padding: 8,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
  },
  menuButton: {
    marginTop: 16,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "##836FFF",
    alignItems: "center",
  },
  menuButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  action: {
    position: "absolute",
    left: 310,
    top: 32,
  },
});
