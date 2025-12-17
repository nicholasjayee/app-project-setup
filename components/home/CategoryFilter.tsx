import { ThemedText } from "@/components/themed-text";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

// Matches categories in your services-data.ts
// "All" is a special UI-only category
const categories = ["All", "cleaning", "auto", "outdoor", "labor", "repair"];

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryFilter({
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {categories.map((category, index) => {
          // Compare prop instead of internal state
          const isActive =
            selectedCategory.toLowerCase() === category.toLowerCase();

          return (
            <TouchableOpacity
              key={index}
              onPress={() => onSelectCategory(category)}
              activeOpacity={0.7}
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
    gap: 12,
  },
  button: {
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  buttonActive: {
    backgroundColor: "#005D63", // Deep Teal
    borderColor: "#005D63",
  },
  buttonInactive: {
    backgroundColor: "#F5F7F7",
    borderColor: "#E5E7EB",
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
    color: "#6B7280",
  },
});
