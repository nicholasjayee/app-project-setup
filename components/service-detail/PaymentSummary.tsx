import { ThemedText } from "@/components/themed-text";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export function PaymentSummary() {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.header}>Payment Summary</ThemedText>

      {/* Price Row */}
      <View style={styles.row}>
        <ThemedText style={styles.label}>Price</ThemedText>
        <ThemedText style={styles.value}>20,000 UGX</ThemedText>
      </View>

      {/* Delivery Row */}
      <View style={styles.row}>
        <ThemedText style={styles.label}>Delivery</ThemedText>
        <ThemedText style={styles.value}>5000 UGX</ThemedText>
      </View>

      {/* Payment Method Selector Dropdown */}
      <TouchableOpacity style={styles.paymentMethod}>
        <ThemedText style={styles.paymentText}>
          Pay with Mobile money
        </ThemedText>
        <Ionicons name="chevron-down" size={24} color="#1A1A1A" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1A1A1A",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    color: "#1A1A1A",
    fontWeight: "700",
  },
  value: {
    fontSize: 16,
    color: "#888", // Grey for values
    fontWeight: "500",
  },
  paymentMethod: {
    marginTop: 25,
    backgroundColor: "#E6EBEB", // Light grey box matching design
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  paymentText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1A1A1A",
  },
});
