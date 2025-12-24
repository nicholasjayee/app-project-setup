import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Search Input */}
      <View style={styles.inputWrapper}>
        <Ionicons
          name="search-outline"
          size={22}
          color="#9CA3AF"
          style={styles.icon}
        />
        <TextInput
          placeholder="Search for services"
          placeholderTextColor="#9CA3AF"
          style={styles.input}
          value={query}
          onChangeText={setQuery}
        />
      </View>

      {/* Wallet Button (Teal Square) */}
      <TouchableOpacity style={styles.walletButton} activeOpacity={0.8}>
        <Ionicons name="wallet-outline" size={24} color="#FFFFFF" />
      </TouchableOpacity>

      {/* Cart Icon with Badge */}
      <TouchableOpacity style={styles.cartContainer} activeOpacity={0.8}>
        <Ionicons name="cart-outline" size={28} color="#1A1A1A" />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>2</Text>
        </View>
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
    height: 52,
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
    fontSize: 15,
    color: "#1A1A1A",
    height: "100%",
  },
  walletButton: {
    width: 52,
    height: 52,
    backgroundColor: "#005D63", // Deep Teal
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    // Shadow
    shadowColor: "#005D63",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  cartContainer: {
    width: 40,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: 5,
    right: -2,
    backgroundColor: "#1A1A1A",
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#F8F9FB",
  },
  badgeText: {
    color: "#FFF",
    fontSize: 9,
    fontWeight: "bold",
  },
});
