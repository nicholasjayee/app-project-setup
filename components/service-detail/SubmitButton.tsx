import { ThemedText } from "@/components/themed-text";
import { StyleSheet, TouchableOpacity } from "react-native";

interface SubmitButtonProps {
  onPress?: () => void;
}

export function SubmitButton({ onPress }: SubmitButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={onPress}>
      <ThemedText style={styles.text}>Book Service</ThemedText>
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
    // Shadow
    shadowColor: "#005D63",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
