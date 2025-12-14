import { ThemedText } from "@/components/themed-text";
import { StyleSheet, TouchableOpacity } from "react-native";

export function SubmitButton() {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.8}>
      <ThemedText style={styles.text}>Submit</ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#005D63", // Deep Teal matching the theme
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: "center",
    width: "100%",
    marginBottom: 20, // Bottom safety margin
  },
  text: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
