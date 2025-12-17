import { ThemedText } from "@/components/themed-text";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import {
  Linking,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

export default function HelpScreen() {
  const router = useRouter();

  // Helper functions to trigger native apps
  const handleCall = () => {
    Linking.openURL("tel:+256700000000");
  };

  const handleEmail = () => {
    Linking.openURL("mailto:support@example.com");
  };

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
          <ThemedText style={styles.headerTitle}>Help & Support</ThemedText>
          <View style={{ width: 40 }} />
        </View>

        <View style={styles.content}>
          <ThemedText style={styles.subtitle}>How can we help you?</ThemedText>

          {/* Call Card */}
          <TouchableOpacity
            style={styles.supportCard}
            onPress={handleCall}
            activeOpacity={0.8}>
            <View style={[styles.iconCircle, { backgroundColor: "#E8F3F1" }]}>
              <Ionicons name="call" size={24} color="#005D63" />
            </View>
            <View>
              <ThemedText style={styles.cardTitle}>Call Us</ThemedText>
              <ThemedText style={styles.cardSub}>
                Speak to an agent directly
              </ThemedText>
            </View>
          </TouchableOpacity>

          {/* Email Card */}
          <TouchableOpacity
            style={styles.supportCard}
            onPress={handleEmail}
            activeOpacity={0.8}>
            <View style={[styles.iconCircle, { backgroundColor: "#FFF0E6" }]}>
              <Ionicons name="mail" size={24} color="#FF9500" />
            </View>
            <View>
              <ThemedText style={styles.cardTitle}>Email Us</ThemedText>
              <ThemedText style={styles.cardSub}>
                Get a response within 24h
              </ThemedText>
            </View>
          </TouchableOpacity>

          {/* Live Chat Card */}
          <TouchableOpacity style={styles.supportCard} activeOpacity={0.8}>
            <View style={[styles.iconCircle, { backgroundColor: "#E6EEFA" }]}>
              <Ionicons name="chatbubbles" size={24} color="#007AFF" />
            </View>
            <View>
              <ThemedText style={styles.cardTitle}>Live Chat</ThemedText>
              <ThemedText style={styles.cardSub}>
                Chat with our support team
              </ThemedText>
            </View>
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
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1A1A1A",
  },
  supportCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    marginBottom: 15,
    // Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#1A1A1A",
  },
  cardSub: {
    fontSize: 14,
    color: "#666",
  },
});
