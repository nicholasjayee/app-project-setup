import { ThemedText } from "@/components/themed-text";
import { StyleSheet, View } from "react-native";

export function SelectionTitle() {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.text}>How can we help you ?</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1.5,
    borderColor: "#005D63", // Brand Teal
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 25,
    backgroundColor: "#FFFFFF",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#005D63", // Text matches border
    textAlign: "center", // Although left aligned in some contexts, design looks slightly centered or strictly left. Let's stick to left based on the image alignment, or actually the image shows it strictly left aligned? No, it looks vertically centered.
    // Actually, looking closely at the image "How can we help you ?", it's left-aligned but the box spans full width.
  },
});
