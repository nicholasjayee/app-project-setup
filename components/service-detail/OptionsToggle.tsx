import { ThemedText } from "@/components/themed-text";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export function OptionsToggle() {
  return (
    <View style={styles.container}>
      {/* Pickup Button (Active) */}
      <TouchableOpacity style={[styles.button, styles.activeButton]}>
        <ThemedText style={styles.activeText}>Pickup</ThemedText>
      </TouchableOpacity>

      {/* In house Button (Inactive) */}
      <TouchableOpacity style={[styles.button, styles.inactiveButton]}>
        <ThemedText style={styles.inactiveText}>In house</ThemedText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 5,
  },
  button: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  activeButton: {
    backgroundColor: "#005D63", // Deep Teal
  },
  inactiveButton: {
    backgroundColor: "#E6EBEB", // Light Greyish Teal
  },
  activeText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
  inactiveText: {
    color: "#005D63", // Deep Teal text
    fontWeight: "600",
    fontSize: 16,
  },
});
