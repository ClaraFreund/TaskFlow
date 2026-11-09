import TacheCard from "@/components/TacheCard";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useState } from "react";
import { Button, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const taskList = [
  {
    title: "Préparer le projet",
    id: 1,
    category: "Travail",
    description: "Organiser les prochaines étapes du projet.",
    status: true,
  },
  {
    title: "Préparer le projet 2",
    id: 2,
    category: "Travail",
    description: "Organiser les prochaines étapes du projet.",
    status: false,
  },
  {
    title: "Préparer le projet 3",
    id: 3,
    category: "Travail",
    description: "Organiser les prochaines étapes du projet.",
    status: false,
  },
  {
    title: "Préparer le projet 4",
    id: 4,
    category: "Travail",
    description: "Organiser les prochaines étapes du projet.",
    status: false,
  },
  {
    title: "Préparer le projet 5",
    id: 5,
    category: "Travail",
    description: "Organiser les prochaines étapes du projet.",
    status: false,
  },
];
const [tasks, setTasks] = useState(taskList);

export default function AccueilScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
        <ThemedView style={styles.heroSection}>
          <ThemedText type="title" style={styles.title}>
            Bienvenue sur&nbsp;TaskFlow
          </ThemedText>
          <ThemedText type="subtitle" style={styles.subtitle}>
            Liste de vos tâches en cours
          </ThemedText>
        </ThemedView>
        <Button
          title={"Nouvelle tâche"}
          onPress={() => {
            setTasks([
              ...tasks,
              {
                title: "Nouvelle tâche",
                id: tasks.length + 1,
                category: "Travail",
                description: "Description de la nouvelle tâche.",
                status: false,
              },
            ]);
          }}
        />
        <FlatList
          style={styles.taskList}
          contentContainerStyle={styles.taskListContent}
          showsVerticalScrollIndicator={false}
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <TacheCard task={item} />}
        />
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    alignSelf: "stretch",
    paddingHorizontal: 20,
  },
  heroSection: {
    flexShrink: 0,
    gap: 8,
    paddingTop: 16,
    paddingBottom: 20,
  },
  title: {
    fontSize: 32,
    lineHeight: 38,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 22,
  },
  taskList: {
    flex: 1,
  },
  taskListContent: {
    flexDirection: "column",
    alignItems: "stretch",
    gap: 12,
    paddingBottom: 20,
  },
});
