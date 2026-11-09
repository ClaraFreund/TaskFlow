import TacheCard, { type Task } from "@/components/TacheCard";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ScrollView } from "react-native";

const tasks: Task[] = [
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

export default function AccueilScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.heroSection}>
        <ThemedText type="title" style={styles.title}>
          Bienvenue sur&nbsp;TaskFlow
        </ThemedText>
        <ThemedText type="subtitle" style={styles.subtitle}>
          Liste de vos tâches en cours
        </ThemedText>
      </ThemedView>
      <ScrollView
        style={styles.safeArea}
        contentContainerStyle={{ gap: 12, padding: 16 }}
      >
        {tasks.map((task) => (
          <TacheCard key={task.id} task={task} />
        ))}
      </ScrollView>
      {/* <FlatList
        data={tasks}
        renderItem={({ item }) => <TacheCard task={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ gap: 12, padding: 16 }}
      /> */}
    </ThemedView>
  );
}

const styles = {
  container: {
    flex: 1,
    gap: 16,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 16,
  },
  heroSection: {},
  title: {
    marginTop: 16,
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
  },
};
