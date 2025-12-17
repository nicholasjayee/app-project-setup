import { ThemedText } from "@/components/themed-text";
import { SERVICES_DATA } from "@/constants/services-data";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

interface SeeMoreSectionProps {
  selectedCategory: string;
}

export function SeeMoreSection({ selectedCategory }: SeeMoreSectionProps) {
  // 1. Filter Logic
  const filteredServices =
    selectedCategory === "All"
      ? SERVICES_DATA
      : SERVICES_DATA.filter(
          (s) => s.category.toLowerCase() === selectedCategory.toLowerCase(),
        );

  // 2. Limit: Only show first 5 items on Home screen to keep it clean
  const displayList = filteredServices.slice(0, 5);

  return (
    <View style={styles.container}>
      {/* Header Row with "See All" Link */}
      <View style={styles.headerRow}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          {selectedCategory === "All" ? "Recommended" : selectedCategory}
        </ThemedText>

        <Link href="/all-services" asChild>
          <TouchableOpacity activeOpacity={0.7}>
            <ThemedText style={styles.seeAllText}>See All</ThemedText>
          </TouchableOpacity>
        </Link>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {displayList.map((service) => {
          // Route Logic
          const routePath = service.hasSubCategories
            ? "/service-options"
            : "/service-detail";

          return (
            <Link
              key={service.id}
              href={{
                pathname: routePath,
                params: { id: service.id },
              }}
              asChild>
              <TouchableOpacity style={styles.card} activeOpacity={0.9}>
                <View style={styles.imageContainer}>
                  <Image
                    source={{ uri: service.thumbnail }}
                    style={styles.image}
                  />
                  <View style={styles.iconOverlay}>
                    <Ionicons name="bookmark-outline" size={16} color="white" />
                  </View>
                </View>

                <View style={styles.cardContent}>
                  <ThemedText type="defaultSemiBold" style={styles.cardTitle}>
                    {service.title}
                  </ThemedText>
                  <ThemedText
                    style={styles.cardSubtitle}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {service.subtitle}
                  </ThemedText>
                </View>
              </TouchableOpacity>
            </Link>
          );
        })}

        {/* Empty State if category has no items */}
        {displayList.length === 0 && (
          <View style={styles.emptyState}>
            <ThemedText style={styles.emptyText}>
              No services found in this category.
            </ThemedText>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    paddingRight: 20, // Align "See All" with content
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  seeAllText: {
    fontSize: 14,
    color: "#005D63", // Deep Teal
    fontWeight: "600",
  },
  scrollContent: {
    paddingRight: 20,
    gap: 15,
  },
  card: {
    width: width * 0.42,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    overflow: "hidden",
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
  emptyState: {
    width: width - 40,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 12,
  },
  emptyText: {
    color: "#666",
  },
});
