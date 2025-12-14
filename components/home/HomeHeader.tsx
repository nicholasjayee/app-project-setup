import { ThemedText } from "@/components/themed-text";
import { Image, StyleSheet, View } from "react-native";

export function HomeHeader() {
  return (
    <View style={styles.container}>
      <View>
        <ThemedText style={styles.greeting}>Hello, Martine</ThemedText>
        <ThemedText type="title" style={styles.headline}>
          Get The Help You Need
        </ThemedText>
      </View>
      <Image
        // Using a placeholder image for now
        source={{
          uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
        }}
        style={styles.avatar}
      />
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
    color: "#1F6C75", // Dark Teal from design
    fontWeight: "bold",
    maxWidth: "80%", // Prevents text from hitting the image
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#E1E1E1",
  },
});
