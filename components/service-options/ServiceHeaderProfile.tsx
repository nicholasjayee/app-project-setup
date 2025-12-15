import { ThemedText } from "@/components/themed-text";
import { Image, StyleSheet, View } from "react-native";

export function ServiceHeaderProfile() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1581578731117-104f2a41272c?q=80&w=200",
        }}
        style={styles.image}
      />

      <View style={styles.textContainer}>
        <ThemedText type="defaultSemiBold" style={styles.title}>
          Laundry
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          Tewekoya, Make life Easy
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 15,
    backgroundColor: "#eee",
  },
  textContainer: {
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    color: "#1A1A1A",
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
  },
});
