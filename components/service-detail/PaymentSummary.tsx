import { ThemedText } from "@/components/themed-text";
import { ServiceData } from "@/constants/services-data";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface PaymentSummaryProps {
  pricing: ServiceData["pricing"];
  quantity: number;
  isPickup: boolean;
}

export function PaymentSummary({
  pricing,
  quantity,
  isPickup,
}: PaymentSummaryProps) {
  // Logic: Base price + Pickup fee
  const basePrice = pricing.oneTimePrice * quantity;
  const pickupFee = isPickup ? 5000 : 0;
  const total = basePrice + pickupFee;

  const formatMoney = (amount: number) =>
    `${amount.toLocaleString()} ${pricing.currencySymbol}`;

  return (
    <View style={styles.container}>
      <ThemedText style={styles.header}>Payment Summary</ThemedText>

      {/* Base Price Row */}
      <View style={styles.row}>
        <ThemedText style={styles.label}>Price</ThemedText>
        <ThemedText style={styles.value}>{formatMoney(basePrice)}</ThemedText>
      </View>

      {/* Pickup Fee Row */}
      <View style={styles.row}>
        <ThemedText style={styles.label}>Pickup</ThemedText>
        <ThemedText style={styles.value}>
          {pickupFee > 0 ? formatMoney(pickupFee) : "0 UGX"}
        </ThemedText>
      </View>

      {/* Total Row */}
      <View style={styles.totalRow}>
        <ThemedText style={styles.totalLabel}>Total</ThemedText>
        <ThemedText style={styles.totalValue}>{formatMoney(total)}</ThemedText>
      </View>

      {/* Payment Method Selector */}
      <TouchableOpacity style={styles.paymentMethod} activeOpacity={0.8}>
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
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  label: {
    fontSize: 16,
    color: "#1A1A1A",
    fontWeight: "600",
  },
  totalLabel: {
    fontSize: 16,
    color: "#1A1A1A",
    fontWeight: "700",
  },
  value: {
    fontSize: 16,
    color: "#666",
    fontWeight: "500",
  },
  totalValue: {
    fontSize: 16,
    color: "#666", // Matches the screenshot (Grey/Black)
    fontWeight: "600",
  },
  paymentMethod: {
    marginTop: 25,
    backgroundColor: "#E8EEF1", // Light Grey/Blue from screenshot
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
