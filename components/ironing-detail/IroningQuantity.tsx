import { ThemedText } from "@/components/themed-text";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export function IroningQuantity() {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=200",
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.details}>
        <ThemedText style={styles.title}>Iron/pressing</ThemedText>
        <ThemedText style={styles.subtitle}>Quantity of Clothing</ThemedText>
      </View>

      <View style={styles.counterContainer}>
        <TouchableOpacity style={styles.counterBtn}>
          <ThemedText style={styles.counterSymbol}>-</ThemedText>
        </TouchableOpacity>

        <ThemedText style={styles.countText}>5</ThemedText>

        <TouchableOpacity style={styles.counterBtn}>
          <ThemedText style={styles.counterSymbol}>+</ThemedText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  imageWrapper: {
    padding: 3,
    backgroundColor: "#F0F5F5",
    borderRadius: 12,
    marginRight: 15,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: "#C8E6C9",
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1A1A1A",
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  counterBtn: {
    padding: 5,
    minWidth: 30,
    alignItems: "center",
  },
  counterSymbol: {
    fontSize: 24,
    fontWeight: "600",
    color: "#1A1A1A",
  },
  countText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1A1A1A",
  },
});
