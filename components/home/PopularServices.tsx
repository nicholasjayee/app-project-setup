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

export function PopularServices() {
  const popularList = SERVICES_DATA.slice(0, 4);

  return (
    <View style={styles.container}>
      <ThemedText type="subtitle" style={styles.sectionTitle}>
        Most Popular
      </ThemedText>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {popularList.map((service, index) => {
          const isFeatured = index === 0;

          // Route Logic
          const routePath = service.hasSubCategories
            ? "/service-options"
            : "/service-detail";

          // Style Logic
          const cardStyle = isFeatured
            ? styles.cardActive
            : styles.cardInactive;
          const titleColor = isFeatured ? styles.textWhite : styles.textDark;
          const subTextColor = isFeatured
            ? styles.subTextWhite
            : styles.subTextDark;
          const tagBg = isFeatured
            ? styles.tagBtnWhite
            : styles.tagBtnLightTeal;

          // Use explicit style object for tags to avoid potential array issues
          const tagTextStyle = styles.tagTextTeal;

          return (
            <Link
              key={service.id}
              href={{
                pathname: routePath,
                params: { id: service.id },
              }}
              asChild>
              <TouchableOpacity
                // FIX: Use StyleSheet.flatten to merge the array into a single object for Web compatibility
                style={StyleSheet.flatten([styles.card, cardStyle])}
                activeOpacity={0.9}>
                {/* Header: Image & Tag */}
                <View style={styles.cardHeader}>
                  <Image
                    source={{ uri: service.thumbnail }}
                    style={styles.serviceImage}
                  />
                  {isFeatured && (
                    <ThemedText style={styles.topTagText}>
                      kyusa routine
                    </ThemedText>
                  )}
                </View>

                {/* Text Content */}
                <View style={styles.textContainer}>
                  {/* FIX: Flatten text styles as well */}
                  <ThemedText
                    type="defaultSemiBold"
                    style={StyleSheet.flatten([
                      styles.serviceTitle,
                      titleColor,
                    ])}
                    numberOfLines={1}>
                    {service.title}
                  </ThemedText>
                  <ThemedText
                    style={StyleSheet.flatten([
                      styles.serviceSubtitle,
                      subTextColor,
                    ])}
                    numberOfLines={1}>
                    {service.subtitle}
                  </ThemedText>
                </View>

                {/* Tags Row */}
                <View style={styles.tagsRow}>
                  {service.pricing.subscriptionPrice > 0 && (
                    <View style={tagBg}>
                      <ThemedText style={tagTextStyle}>Subscription</ThemedText>
                    </View>
                  )}

                  <View style={tagBg}>
                    <ThemedText style={tagTextStyle}>One-time</ThemedText>
                  </View>
                </View>

                <Ionicons
                  name="bookmark-outline"
                  size={22}
                  color={isFeatured ? "white" : "#9CA3AF"}
                  style={styles.bookmark}
                />
              </TouchableOpacity>
            </Link>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },
  sectionTitle: {
    marginBottom: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
  scrollContent: {
    paddingRight: 20,
    paddingBottom: 15,
  },
  card: {
    width: width * 0.72,
    height: 190,
    borderRadius: 18,
    padding: 18,
    marginRight: 16,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
  },
  cardActive: {
    backgroundColor: "#005D63",
  },
  cardInactive: {
    backgroundColor: "#FFFFFF",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  serviceImage: {
    width: 45,
    height: 45,
    borderRadius: 10,
    backgroundColor: "#eee",
  },
  topTagText: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 12,
  },
  textContainer: {
    marginTop: 5,
  },
  serviceTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  serviceSubtitle: {
    fontSize: 13,
  },
  textWhite: {
    color: "#FFFFFF",
  },
  subTextWhite: {
    color: "rgba(255,255,255,0.85)",
  },
  textDark: {
    color: "#1A1A1A",
  },
  subTextDark: {
    color: "#9CA3AF",
  },
  tagsRow: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  tagBtnWhite: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  tagBtnLightTeal: {
    backgroundColor: "#E0F2F1",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  tagTextTeal: {
    fontSize: 11,
    fontWeight: "700",
    color: "#005D63",
  },
  bookmark: {
    position: "absolute",
    bottom: 18,
    right: 18,
  },
});
