import { Ionicons } from "@expo/vector-icons"; // Using Ionicons for the search icon
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

export function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Ionicons
          name="search-outline"
          size={24}
          color="#9CA3AF"
          style={styles.icon}
        />
        <TextInput
          placeholder="Search for services"
          placeholderTextColor="#9CA3AF"
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.filterButton}>
        {/* Simple square to mimic the filter icon in your design */}
        <View style={styles.filterIconPlaceholder} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
    gap: 12,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16, // Slightly more rounded
    paddingHorizontal: 15,
    height: 55, // Taller to match design
    // Soft Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#1A1A1A",
  },
  filterButton: {
    width: 55,
    height: 55,
    backgroundColor: "#1F6C75", // Brand Teal Color
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    // Shadow for button
    shadowColor: "#1F6C75",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  filterIconPlaceholder: {
    width: 20,
    height: 20,
    backgroundColor: "#1F6C75",
    borderWidth: 2,
    borderColor: "#FFFFFF",
    borderRadius: 4,
  },
});
