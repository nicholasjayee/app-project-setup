import { ThemedText } from "@/components/themed-text";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

const categories = ["Services", "house", "laundry", "carwash", "construction"];

export function CategoryFilter() {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {categories.map((category, index) => {
          const isActive = index === 0; // "Services" is active
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.button,
                isActive ? styles.buttonActive : styles.buttonInactive,
              ]}>
              <ThemedText
                style={[
                  styles.text,
                  isActive ? styles.textActive : styles.textInactive,
                ]}>
                {category}
              </ThemedText>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },
  scrollContent: {
    paddingRight: 20,
    gap: 12, // Increased gap for better touch targets
  },
  button: {
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 25, // Fully rounded pills
    alignItems: "center",
    justifyContent: "center",
  },
  buttonActive: {
    backgroundColor: "#1F6C75", // Brand Teal
  },
  buttonInactive: {
    backgroundColor: "#E5E7EB", // Light Grey
  },
  text: {
    fontWeight: "600",
    fontSize: 14,
    textTransform: "capitalize",
  },
  textActive: {
    color: "#FFFFFF",
  },
  textInactive: {
    color: "#6B7280", // Darker Grey for contrast
  },
});
