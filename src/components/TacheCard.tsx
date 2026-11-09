import { COULEURS } from "@/styles/couleurs";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export type Task = {
  title: string;
  id: number;
  category: string;
  description: string;
  status: boolean; // true for completed, false for not completed
};

export default function TacheCard({ task }: { task: Task }) {
  const statusText = task.status ? "Terminé" : "À faire";
  const statusColor = task.status ? COULEURS.muted : COULEURS.accent;
  const [taskStatus, setTaskStatus] = React.useState(task.status);
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.titre}>{task.title}</Text>
        <Text style={styles.category}>{task.category}</Text>
      </View>
      <Text style={styles.description}>{task.description}</Text>
      <Button
        title={statusText}
        color={statusColor}
        onPress={() => {
          setTaskStatus(!taskStatus);
          task.status = !taskStatus; // Update the task status
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: 12,
    padding: 16,
    backgroundColor: COULEURS.fond,
    borderRadius: 12,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  titre: {
    color: COULEURS.texte,
    fontSize: 18,
    fontWeight: "bold",
    flexShrink: 1,
  },
  category: {
    color: COULEURS.muted,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COULEURS.muted,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  description: {
    color: COULEURS.texte,
    fontSize: 16,
    lineHeight: 22,
  },
});
