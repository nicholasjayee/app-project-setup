import { ThemedText } from "@/components/themed-text";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export function CallButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <ThemedText style={styles.text}>Call</ThemedText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#FFFFFF",
    width: "80%", // Not full width, similar to design
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",

    // Strong Shadow to separate from background
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 15,
    elevation: 6,
  },
  text: {
    color: "#3B4D80", // Dark Blue-ish text color to contrast with white
    fontWeight: "bold",
    fontSize: 18,
  },
});
