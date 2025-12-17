import { ThemedText } from "@/components/themed-text";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

interface QuantitySelectorProps {
  title: string;
  unitName: string; // e.g., "Cars"
  quantity: number;
  image: string; // URL for the thumbnail
  onIncrease: () => void;
  onDecrease: () => void;
}

export function QuantitySelector({
  title,
  unitName,
  quantity,
  image,
  onIncrease,
  onDecrease,
}: QuantitySelectorProps) {
  return (
    <View style={styles.container}>
      {/* Thumbnail Image */}
      <View style={styles.imageWrapper}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>

      <View style={styles.details}>
        <ThemedText type="defaultSemiBold" style={styles.title}>
          {title}
        </ThemedText>
        <ThemedText style={styles.subtitle}>Number of {unitName}s</ThemedText>
      </View>

      <View style={styles.counterContainer}>
        <TouchableOpacity onPress={onDecrease} style={styles.counterBtn}>
          <ThemedText style={styles.counterSymbol}>-</ThemedText>
        </TouchableOpacity>

        <ThemedText style={styles.countText}>{quantity}</ThemedText>

        <TouchableOpacity onPress={onIncrease} style={styles.counterBtn}>
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
    paddingVertical: 10,
  },
  imageWrapper: {
    padding: 3,
    backgroundColor: "#F0F5F5", // Light ring effect
    borderRadius: 12,
    marginRight: 15,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: "#eee",
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: "#1A1A1A",
    marginBottom: 4,
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
