import { ThemedText } from "@/components/themed-text";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const services = [
  {
    id: 1,
    title: "Laundry",
    subtitle: "washing and Ironing",
    image:
      "https://images.unsplash.com/photo-1517677208171-0bc6799a4267?q=80&w=400",
    route: "/service-options", // Links to the new Options page
  },
  {
    id: 2,
    title: "Car wash",
    subtitle: "Interior and exterior",
    image:
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=400",
    route: "/service-detail",
  },
  {
    id: 3,
    title: "Gardening",
    subtitle: "Compound work, digging",
    image:
      "https://images.unsplash.com/photo-1615811361269-89432d83663d?q=80&w=400",
    route: "/service-detail",
  },
  {
    id: 4,
    title: "construction",
    subtitle: "Site workers",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=400",
    route: "/service-detail",
  },
  {
    id: 5,
    title: "House Help",
    subtitle: "Maids and house boys",
    image:
      "https://images.unsplash.com/photo-1581578731117-104f2a41272c?q=80&w=400",
    route: "/service-detail",
  },
];

export function ServiceGrid() {
  return (
    <View style={styles.container}>
      {services.map((service) => (
        <Link
          key={service.id}
          href={service.route as any} // Cast to any to avoid strict route typing issues during dev
          asChild>
          <TouchableOpacity style={styles.card} activeOpacity={0.8}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: service.image }} style={styles.image} />
              <View style={styles.bookmarkOverlay}>
                <Ionicons name="bookmark-outline" size={20} color="white" />
              </View>
            </View>

            <View style={styles.cardContent}>
              <ThemedText type="defaultSemiBold" style={styles.title}>
                {service.title}
              </ThemedText>
              <ThemedText style={styles.subtitle}>
                {service.subtitle}
              </ThemedText>
            </View>
          </TouchableOpacity>
        </Link>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  card: {
    width: (width - 55) / 2,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 15,
    overflow: "hidden",
    // Soft Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
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
  bookmarkOverlay: {
    position: "absolute",
    top: 8,
    right: 8,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  cardContent: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    marginBottom: 4,
    color: "#1A1A1A",
    textTransform: "capitalize",
  },
  subtitle: {
    fontSize: 12,
    color: "#888",
  },
});
