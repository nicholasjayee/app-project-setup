import { ThemedText } from "@/components/themed-text";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProfileScreen() {
  const router = useRouter();

  const handleLogout = () => {
    // In a real app, clear auth tokens here
    console.log("Logging out...");
    // router.replace("/"); // Go back to login
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Header Title */}
          <View style={styles.header}>
            <ThemedText type="title" style={styles.headerTitle}>
              Profile
            </ThemedText>
          </View>

          {/* User Info Section */}
          <View style={styles.userInfoSection}>
            <View style={styles.avatarContainer}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
                }}
                style={styles.avatar}
              />
              <Link href="/profile/account" asChild>
                <TouchableOpacity style={styles.editIcon}>
                  <Ionicons name="pencil" size={16} color="#FFFFFF" />
                </TouchableOpacity>
              </Link>
            </View>
            <ThemedText style={styles.userName}>Martine</ThemedText>
            <ThemedText style={styles.userEmail}>
              martine@example.com
            </ThemedText>
          </View>

          {/* Menu Options */}
          <View style={styles.menuContainer}>
            <MenuOption
              icon="person-outline"
              label="My Account"
              route="/profile/account"
            />
            <MenuOption
              icon="card-outline"
              label="Payment Methods"
              route="/profile/payments"
            />
            <MenuOption
              icon="notifications-outline"
              label="Notifications"
              route="/profile/notifications"
            />
            <MenuOption
              icon="shield-checkmark-outline"
              label="Privacy & Security"
              route="/profile/privacy"
            />
            <MenuOption
              icon="help-circle-outline"
              label="Help & Support"
              route="/profile/help"
            />
          </View>

          {/* Logout Button */}
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={20} color="#FF4D4D" />
            <ThemedText style={styles.logoutText}>Log Out</ThemedText>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

// Helper Component for Menu Rows with Navigation
function MenuOption({
  icon,
  label,
  route,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  route: string;
}) {
  return (
    <Link href={route as any} asChild>
      <TouchableOpacity style={styles.menuRow}>
        <View style={styles.menuLeft}>
          <View style={styles.iconBox}>
            <Ionicons name={icon} size={22} color="#005D63" />
          </View>
          <ThemedText style={styles.menuLabel}>{label}</ThemedText>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
      </TouchableOpacity>
    </Link>
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
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 24,
    color: "#1A1A1A",
  },
  userInfoSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  avatarContainer: {
    position: "relative",
    marginBottom: 15,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#FFFFFF",
  },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#005D63", // Deep Teal
    padding: 8,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#F8F9FB",
  },
  userName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1A1A1A",
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
    color: "#888",
  },
  menuContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    // Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  menuRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F5F5F5",
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconBox: {
    width: 36,
    height: 36,
    backgroundColor: "#E8F3F1", // Light Teal
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  menuLabel: {
    fontSize: 16,
    color: "#1A1A1A",
    fontWeight: "500",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#FFE5E5", // Light Red
    borderRadius: 12,
    gap: 10,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF4D4D",
  },
});
