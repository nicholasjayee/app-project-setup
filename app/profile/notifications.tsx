import { ThemedText } from "@/components/themed-text";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Switch,
  TouchableOpacity,
  View,
} from "react-native";

export default function NotificationsScreen() {
  const router = useRouter();

  // State for toggles
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(false);
  const [promoEnabled, setPromoEnabled] = useState(true);

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
          <ThemedText style={styles.headerTitle}>Notifications</ThemedText>
          <View style={{ width: 40 }} />
        </View>

        <View style={styles.content}>
          {/* Push Notifications Toggle */}
          <View style={styles.row}>
            <View style={styles.textContainer}>
              <ThemedText style={styles.label}>Push Notifications</ThemedText>
              <ThemedText style={styles.subLabel}>
                Receive alerts on your device
              </ThemedText>
            </View>
            <Switch
              value={pushEnabled}
              onValueChange={setPushEnabled}
              trackColor={{ false: "#E5E5EA", true: "#005D63" }}
              thumbColor={"#FFFFFF"}
            />
          </View>

          {/* Email Notifications Toggle */}
          <View style={styles.row}>
            <View style={styles.textContainer}>
              <ThemedText style={styles.label}>Email Notifications</ThemedText>
              <ThemedText style={styles.subLabel}>
                Receive receipts and updates
              </ThemedText>
            </View>
            <Switch
              value={emailEnabled}
              onValueChange={setEmailEnabled}
              trackColor={{ false: "#E5E5EA", true: "#005D63" }}
              thumbColor={"#FFFFFF"}
            />
          </View>

          {/* Promo Notifications Toggle */}
          <View style={styles.row}>
            <View style={styles.textContainer}>
              <ThemedText style={styles.label}>Promotional Offers</ThemedText>
              <ThemedText style={styles.subLabel}>
                Discounts and deals
              </ThemedText>
            </View>
            <Switch
              value={promoEnabled}
              onValueChange={setPromoEnabled}
              trackColor={{ false: "#E5E5EA", true: "#005D63" }}
              thumbColor={"#FFFFFF"}
            />
          </View>
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
    gap: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    // Soft Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 5,
    elevation: 2,
  },
  textContainer: {
    maxWidth: "80%",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
    color: "#1A1A1A",
  },
  subLabel: {
    fontSize: 13,
    color: "#888",
  },
});
