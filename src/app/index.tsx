import { StyleSheet } from "react-native";

import { ThemedView } from "@/components/themed-view";
import AccueilScreen from "@/screens/AccueilScreen";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <AccueilScreen />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
