import { ThemedText } from "@/components/themed-text";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

export default function PaymentsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backBtn}>
            <Ionicons name="arrow-back" size={24} color="#1A1A1A" />
          </TouchableOpacity>
          <ThemedText style={styles.headerTitle}>Payment Methods</ThemedText>
          <View style={{ width: 40 }} />
        </View>

        <View style={styles.content}>
          {/* Active Method: MTN Mobile Money */}
          <View style={styles.paymentCard}>
            <View style={styles.cardIcon}>
              <Ionicons
                name="phone-portrait-outline"
                size={24}
                color="#005D63"
              />
            </View>
            <View style={styles.cardInfo}>
              <ThemedText style={styles.cardTitle}>MTN Mobile Money</ThemedText>
              <ThemedText style={styles.cardNumber}>
                +256 700 *** 890
              </ThemedText>
            </View>
            <Ionicons name="checkmark-circle" size={24} color="#005D63" />
          </View>

          {/* Secondary Method: Airtel Money */}
          <View style={styles.paymentCard}>
            <View style={[styles.cardIcon, styles.cardIconInactive]}>
              <Ionicons name="phone-portrait-outline" size={24} color="#666" />
            </View>
            <View style={styles.cardInfo}>
              <ThemedText style={styles.cardTitle}>Airtel Money</ThemedText>
              <ThemedText style={styles.cardNumber}>
                +256 750 *** 123
              </ThemedText>
            </View>
            <TouchableOpacity>
              <ThemedText style={styles.editText}>Edit</ThemedText>
            </TouchableOpacity>
          </View>

          {/* Add New Button */}
          <TouchableOpacity style={styles.addBtn} activeOpacity={0.7}>
            <Ionicons name="add" size={24} color="#005D63" />
            <ThemedText style={styles.addBtnText}>Add New Method</ThemedText>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FB",
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
  },
  backBtn: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1A1A1A",
  },
  content: {
    padding: 20,
    gap: 15,
  },
  paymentCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 16,
    // Shadow
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  cardIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#E8F3F1", // Light Teal
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  cardIconInactive: {
    backgroundColor: "#F5F5F5", // Grey
  },
  cardInfo: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 2,
    color: "#1A1A1A",
  },
  cardNumber: {
    fontSize: 14,
    color: "#666",
  },
  editText: {
    color: "#005D63",
    fontWeight: "600",
  },
  addBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderWidth: 1.5,
    borderColor: "#005D63",
    borderRadius: 12,
    borderStyle: "dashed",
    marginTop: 10,
  },
  addBtnText: {
    color: "#005D63",
    fontWeight: "bold",
    marginLeft: 8,
  },
});
