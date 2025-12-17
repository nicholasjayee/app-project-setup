import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim()) {
      // Future logic: Navigate to a search results page
      console.log("Searching for:", query);

      // Example of how you would link this later:
      // router.push({ pathname: "/search-results", params: { q: query } });
    }
  };

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
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch} // Triggers when "Enter" is pressed
          returnKeyType="search"
          autoCorrect={false}
        />
        {/* specific "Clear" button if text exists */}
        {query.length > 0 && (
          <TouchableOpacity onPress={() => setQuery("")}>
            <Ionicons name="close-circle" size={20} color="#ccc" />
          </TouchableOpacity>
        )}
      </View>

      <TouchableOpacity style={styles.filterButton} activeOpacity={0.8}>
        {/* Replaced placeholder with real icon */}
        <Ionicons name="options-outline" size={24} color="#FFFFFF" />
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
    borderRadius: 16,
    paddingHorizontal: 15,
    height: 55,
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
    height: "100%", // Ensures touch target is full height
  },
  filterButton: {
    width: 55,
    height: 55,
    backgroundColor: "#005D63", // Updated to Deep Teal to match your Theme
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    // Shadow for button
    shadowColor: "#005D63",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
});
