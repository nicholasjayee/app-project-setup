import { ThemedText } from "@/components/themed-text";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export function PickupOnlyBtn() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <ThemedText style={styles.text}>Pickup</ThemedText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#005D63", // Deep Teal
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
