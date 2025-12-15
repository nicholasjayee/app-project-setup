import { ThemedText } from "@/components/themed-text";
import { Image, StyleSheet, View } from "react-native";

export function IroningInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=200",
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.content}>
        <ThemedText type="title" style={styles.title}>
          Ironing/Pressing
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          Tewekoya, Make life Easy
        </ThemedText>

        <View style={styles.tagsRow}>
          <View style={styles.tagLight}>
            <ThemedText style={styles.tagTextTeal}>Subscription</ThemedText>
          </View>
          <View style={styles.tagDark}>
            <ThemedText style={styles.tagTextWhite}>Onetime off</ThemedText>
          </View>
        </View>
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
  imageContainer: {
    padding: 4,
    backgroundColor: "#F0F5F5",
    borderRadius: 16,
    marginRight: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 12,
    backgroundColor: "#C8E6C9",
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#1A1A1A",
  },
  subtitle: {
    fontSize: 13,
    color: "#555",
    marginBottom: 10,
  },
  tagsRow: {
    flexDirection: "row",
    gap: 10,
  },
  tagLight: {
    backgroundColor: "#E8F3F1", // Light background
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
  tagDark: {
    backgroundColor: "#005D63", // Dark Teal background
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
  tagTextTeal: {
    fontSize: 11,
    color: "#005D63",
    fontWeight: "600",
  },
  tagTextWhite: {
    fontSize: 11,
    color: "#FFFFFF",
    fontWeight: "600",
  },
});
