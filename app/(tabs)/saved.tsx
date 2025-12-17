import { ThemedText } from "@/components/themed-text";
import { SERVICES_DATA } from "@/constants/services-data"; // Import Data
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

export default function SavedScreen() {
  // Simulate a list of saved IDs. In a real app, this comes from a database or storage.
  const [savedIds, setSavedIds] = useState<string[]>(["1", "2", "5"]);

  // Filter the full data to get only saved items
  const savedServices = SERVICES_DATA.filter((service) =>
    savedIds.includes(service.id),
  );

  const handleRemove = (id: string) => {
    setSavedIds((prev) => prev.filter((item) => item !== id));
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <ThemedText type="title" style={styles.headerTitle}>
            Saved Services
          </ThemedText>
        </View>

        <FlatList
          data={savedServices}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          // Empty State Logic
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Ionicons name="bookmark-outline" size={64} color="#ccc" />
              <ThemedText style={styles.emptyText}>
                No saved services yet.
              </ThemedText>
            </View>
          }
          renderItem={({ item }) => {
            // Determine Route: Options vs Detail
            const routePath = item.hasSubCategories
              ? "/service-options"
              : "/service-detail";

            return (
              <Link
                href={{
                  pathname: routePath,
                  params: { id: item.id },
                }}
                asChild>
                <TouchableOpacity style={styles.card} activeOpacity={0.7}>
                  <Image
                    source={{ uri: item.thumbnail }}
                    style={styles.image}
                  />

                  <View style={styles.cardContent}>
                    <ThemedText type="defaultSemiBold" style={styles.title}>
                      {item.title}
                    </ThemedText>
                    <ThemedText style={styles.subtitle} numberOfLines={1}>
                      {item.subtitle}
                    </ThemedText>

                    <View style={styles.tagContainer}>
                      <ThemedText style={styles.tagText}>
                        {/* Dynamic Tag: Show 'Subscription' if available, else Price */}
                        {item.pricing.subscriptionPrice > 0
                          ? "Subscription available"
                          : `${item.pricing.oneTimePrice.toLocaleString()} ${
                              item.pricing.currencySymbol
                            }`}
                      </ThemedText>
                    </View>
                  </View>

                  {/* Bookmark Button (Independent Click) */}
                  <TouchableOpacity
                    style={styles.actionBtn}
                    onPress={(e) => {
                      // Stop propagation usually tricky in RN, but distinct touchable works
                      handleRemove(item.id);
                    }}>
                    <Ionicons name="bookmark" size={24} color="#005D63" />
                  </TouchableOpacity>
                </TouchableOpacity>
              </Link>
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FB",
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  headerTitle: {
    fontSize: 24,
    color: "#1A1A1A",
  },
  listContent: {
    padding: 20,
    paddingBottom: 100, // Space for tab bar
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    alignItems: "center",
    // Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 12,
    backgroundColor: "#eee",
  },
  cardContent: {
    flex: 1,
    marginLeft: 15,
  },
  title: {
    fontSize: 16,
    color: "#1A1A1A",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    color: "#888",
    marginBottom: 6,
  },
  tagContainer: {
    backgroundColor: "#E8F3F1",
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  tagText: {
    fontSize: 10,
    color: "#005D63",
    fontWeight: "600",
  },
  actionBtn: {
    padding: 10,
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    opacity: 0.5,
  },
  emptyText: {
    marginTop: 10,
    fontSize: 16,
    color: "#888",
  },
});
