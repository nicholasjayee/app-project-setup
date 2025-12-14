import { ThemedText } from "@/components/themed-text";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions, Image, ScrollView, StyleSheet, View } from "react-native";

const { width } = Dimensions.get("window");

const services = [
  {
    id: 1,
    title: "Laundry",
    subtitle: "washing and Ironing",
    image:
      "https://images.unsplash.com/photo-1545173168-9f1947eebb8f?q=80&w=400",
  },
  {
    id: 2,
    title: "Construction",
    subtitle: "Interior and exterior",
    image:
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=400",
  },
  {
    id: 3,
    title: "Maintenance",
    subtitle: "Home repairs",
    image:
      "https://images.unsplash.com/photo-1581578731117-104f2a41272c?q=80&w=400",
  },
];

export function SeeMoreSection() {
  return (
    <View style={styles.container}>
      <ThemedText type="subtitle" style={styles.sectionTitle}>
        See more
      </ThemedText>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {services.map((service) => (
          <View key={service.id} style={styles.card}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: service.image }} style={styles.image} />
              <View style={styles.iconOverlay}>
                <Ionicons name="bookmark-outline" size={16} color="white" />
              </View>
            </View>

            <View style={styles.cardContent}>
              <ThemedText type="defaultSemiBold" style={styles.cardTitle}>
                {service.title}
              </ThemedText>
              <ThemedText style={styles.cardSubtitle}>
                {service.subtitle}
              </ThemedText>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  sectionTitle: {
    marginBottom: 15,
    fontSize: 16,
    color: "#9CA3AF",
    fontWeight: "normal",
  },
  scrollContent: {
    paddingRight: 20,
    gap: 15, // Space between cards
  },
  card: {
    width: width * 0.42, // Slightly less than half width to show it's scrollable
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    overflow: "hidden",
    // Consistent Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  imageContainer: {
    height: 110,
    width: "100%",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  iconOverlay: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(0,0,0,0.25)",
    borderRadius: 8,
    padding: 6,
  },
  cardContent: {
    padding: 12,
  },
  cardTitle: {
    fontSize: 16,
    color: "#1A1A1A",
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 12,
    color: "#9CA3AF",
  },
});
