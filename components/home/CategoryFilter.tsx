import { ThemedText } from "@/components/themed-text";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

// Updated categories to match your screenshot
const categories = ["Services", "house", "laundry", "carwash", "construction"];

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
          // Logic: "Services" acts as the "All" button in this design
          // If selectedCategory is "All" (default from index.tsx), we highlight "Services"
          const isSelected =
            (category === "Services" && selectedCategory === "All") ||
            selectedCategory.toLowerCase() === category.toLowerCase();

          return (
            <TouchableOpacity
              key={index}
              onPress={() =>
                onSelectCategory(category === "Services" ? "All" : category)
              }
              activeOpacity={0.7}
              style={[
                styles.button,
                isSelected ? styles.buttonActive : styles.buttonInactive,
              ]}>
              <ThemedText
                style={[
                  styles.text,
                  isSelected ? styles.textActive : styles.textInactive,
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
    gap: 10,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20, // Slightly less rounded than full pill
    alignItems: "center",
    justifyContent: "center",
  },
  buttonActive: {
    backgroundColor: "#005D63", // Deep Teal
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
    color: "#9CA3AF", // Grey text
  },
});
