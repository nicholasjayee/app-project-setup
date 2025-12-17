import { ThemedText } from "@/components/themed-text";
import { ServiceData } from "@/constants/services-data"; // Import the Type
import { Image, StyleSheet, View } from "react-native";

interface ServiceInfoProps {
  service: ServiceData;
}

export function ServiceInfo({ service }: ServiceInfoProps) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: service.thumbnail }} style={styles.image} />
      </View>

      <View style={styles.content}>
        <ThemedText type="title" style={styles.title}>
          {service.title}
        </ThemedText>
        <ThemedText style={styles.subtitle}>{service.subtitle}</ThemedText>

        <View style={styles.tagsRow}>
          {/* Dynamically show Subscription tag only if a price exists */}
          {service.pricing.subscriptionPrice > 0 && (
            <View style={styles.tagLight}>
              <ThemedText style={styles.tagTextTeal}>Subscription</ThemedText>
            </View>
          )}

          <View style={styles.tagDark}>
            <ThemedText style={styles.tagTextWhite}>One-time</ThemedText>
          </View>

          {/* Added Rating display */}
          <View style={styles.ratingContainer}>
            <ThemedText style={styles.ratingText}>
              ★ {service.rating}
            </ThemedText>
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
    alignItems: "center",
  },
  tagLight: {
    backgroundColor: "#E8F3F1",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
  tagDark: {
    backgroundColor: "#005D63",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
  ratingContainer: {
    marginLeft: "auto",
  },
  ratingText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FBBC04",
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
