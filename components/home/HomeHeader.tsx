import { ThemedText } from "@/components/themed-text";
import { Link } from "expo-router";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export function HomeHeader() {
  // Simple logic to get greeting based on time of day
  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return "Good Morning";
    if (hours < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const user = {
    name: "Martine",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
  };

  return (
    <View style={styles.container}>
      <View>
        <ThemedText style={styles.greeting}>
          {getGreeting()}, {user.name}
        </ThemedText>
        <ThemedText type="title" style={styles.headline}>
          Get The Help You Need
        </ThemedText>
      </View>

      {/* Tapping the avatar navigates to the Profile Tab */}
      <Link href="/(tabs)/profile" asChild>
        <TouchableOpacity activeOpacity={0.8}>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  greeting: {
    fontSize: 16,
    color: "#666",
    marginBottom: 4,
  },
  headline: {
    fontSize: 24,
    color: "#005D63", // Updated to consistent Deep Teal
    fontWeight: "bold",
    maxWidth: "80%",
    lineHeight: 32, // Added line height for better readability
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#E1E1E1",
    borderWidth: 2,
    borderColor: "#FFFFFF", // Adds a clean white border around the image
  },
});
