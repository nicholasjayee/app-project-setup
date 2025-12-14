import { ThemedText } from "@/components/themed-text";
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
  return (
    <View style={styles.container}>
      <ThemedText type="subtitle" style={styles.sectionTitle}>
        Most Popular
      </ThemedText>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {/* Card 1: House Cleaning (Dark Teal Theme) */}
        <Link href="/service-detail" asChild>
          <TouchableOpacity
            // FIX: Flatten the array so it works on Web
            style={StyleSheet.flatten([styles.card, styles.cardActive])}
            activeOpacity={0.9}>
            <View style={styles.cardHeader}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1581578731117-104f2a41272c?q=80&w=200",
                }}
                style={styles.serviceImage}
              />
              <ThemedText style={styles.topTagText}>kyusa routine</ThemedText>
            </View>

            <View style={styles.textContainer}>
              <ThemedText type="defaultSemiBold" style={styles.textWhite}>
                House Cleaning
              </ThemedText>
              <ThemedText style={styles.subTextWhite}>
                Tewekoya, Make life Easy
              </ThemedText>
            </View>

            <View style={styles.tagsRow}>
              <View style={styles.tagBtnWhite}>
                <ThemedText style={styles.tagTextTeal}>Subscription</ThemedText>
              </View>
              <View style={styles.tagBtnWhite}>
                <ThemedText style={styles.tagTextTeal}>Onetime Off</ThemedText>
              </View>
            </View>

            <Ionicons
              name="bookmark-outline"
              size={22}
              color="white"
              style={styles.bookmark}
            />
          </TouchableOpacity>
        </Link>

        {/* Card 2: Laundry (White Theme) */}
        <View style={StyleSheet.flatten([styles.card, styles.cardInactive])}>
          <View style={styles.cardHeader}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1582735689369-c613c66e5aa1?q=80&w=200",
              }}
              style={styles.serviceImage}
            />
          </View>

          <View style={styles.textContainer}>
            <ThemedText type="defaultSemiBold" style={styles.textDark}>
              Laundry
            </ThemedText>
            <ThemedText style={styles.subTextDark}>
              focused on the t...
            </ThemedText>
          </View>

          <View style={styles.tagsRow}>
            <View style={styles.tagBtnLightTeal}>
              <ThemedText style={styles.tagTextTeal}>Subscription</ThemedText>
            </View>
          </View>
        </View>
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
    paddingBottom: 15, // Space for shadows
  },
  card: {
    width: width * 0.72,
    height: 190,
    borderRadius: 18,
    padding: 18,
    marginRight: 16,
    justifyContent: "space-between",
    // Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
  },
  cardActive: {
    backgroundColor: "#1F6C75", // Brand Teal
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
  },
  topTagText: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 12,
  },

  // Text Area
  textContainer: {
    marginTop: 5,
  },
  textWhite: {
    color: "#FFFFFF",
    fontSize: 18,
    marginBottom: 4,
  },
  subTextWhite: {
    color: "rgba(255,255,255,0.85)",
    fontSize: 13,
  },
  textDark: {
    color: "#1A1A1A",
    fontSize: 18,
    marginBottom: 4,
  },
  subTextDark: {
    color: "#9CA3AF",
    fontSize: 13,
  },

  // Buttons/Tags
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
    backgroundColor: "#E0F2F1", // Very light teal
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  tagTextTeal: {
    fontSize: 11,
    fontWeight: "700",
    color: "#1F6C75",
  },

  bookmark: {
    position: "absolute",
    bottom: 18,
    right: 18,
  },
});
