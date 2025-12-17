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

export default function PrivacyScreen() {
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
          <ThemedText style={styles.headerTitle}>Privacy & Security</ThemedText>
          <View style={{ width: 40 }} />
        </View>

        <View style={styles.content}>
          {/* Change Password */}
          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <ThemedText style={styles.menuText}>Change Password</ThemedText>
            <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
          </TouchableOpacity>

          {/* 2FA */}
          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <ThemedText style={styles.menuText}>
              Two-Factor Authentication
            </ThemedText>
            <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
          </TouchableOpacity>

          {/* Divider Line */}
          <View style={styles.divider} />

          {/* Privacy Policy */}
          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <ThemedText style={styles.menuText}>Privacy Policy</ThemedText>
            <Ionicons name="open-outline" size={20} color="#C7C7CC" />
          </TouchableOpacity>

          {/* Terms of Service */}
          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <ThemedText style={styles.menuText}>Terms of Service</ThemedText>
            <Ionicons name="open-outline" size={20} color="#C7C7CC" />
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
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 12,
    marginBottom: 10,
    // Soft Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 5,
    elevation: 2,
  },
  menuText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1A1A1A",
  },
  divider: {
    height: 1,
    backgroundColor: "#E5E5EA",
    marginVertical: 15,
    marginHorizontal: 5,
  },
});
