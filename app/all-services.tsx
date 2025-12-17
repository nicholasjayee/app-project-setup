import { ThemedText } from "@/components/themed-text";
import { SERVICES_DATA } from "@/constants/services-data";
import { Ionicons } from "@expo/vector-icons";
import { Link, Stack, useRouter } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");
const COLUMN_WIDTH = width / 2 - 25; // Calculate width for 2 columns

const categories = ["All", "Cleaning", "Auto", "Outdoor", "Labor"];
const sortOptions = ["Recommended", "Price: Low-High", "Rating: 4.5+"];

export default function AllServicesScreen() {
  const router = useRouter();

  // State for Filters
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSort, setActiveSort] = useState("Recommended");
  const [searchQuery, setSearchQuery] = useState("");

  // --- FILTER LOGIC ---
  const getFilteredData = () => {
    let data = [...SERVICES_DATA];

    // 1. Filter by Category
    if (activeCategory !== "All") {
      data = data.filter(
        (item) => item.category.toLowerCase() === activeCategory.toLowerCase(),
      );
    }

    // 2. Filter by Search Query
    if (searchQuery) {
      data = data.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    // 3. Sort Logic
    if (activeSort === "Price: Low-High") {
      data.sort((a, b) => a.pricing.oneTimePrice - b.pricing.oneTimePrice);
    } else if (activeSort === "Rating: 4.5+") {
      data = data.filter((item) => item.rating >= 4.5);
    }

    return data;
  };

  const filteredData = getFilteredData();

  // --- RENDER ITEM (Grid Card) ---
  const renderItem = ({ item }: { item: (typeof SERVICES_DATA)[0] }) => {
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
        <TouchableOpacity style={styles.card} activeOpacity={0.8}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.thumbnail }} style={styles.image} />
            <View style={styles.ratingBadge}>
              <Ionicons name="star" size={12} color="#FFD700" />
              <ThemedText style={styles.ratingText}>{item.rating}</ThemedText>
            </View>
          </View>

          <View style={styles.cardContent}>
            <ThemedText
              type="defaultSemiBold"
              style={styles.cardTitle}
              numberOfLines={1}>
              {item.title}
            </ThemedText>
            <ThemedText style={styles.priceText}>
              {item.pricing.oneTimePrice.toLocaleString()}{" "}
              {item.pricing.currencySymbol}
            </ThemedText>
          </View>
        </TouchableOpacity>
      </Link>
    );
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FB" />

      <SafeAreaView style={styles.safeArea}>
        {/* --- HEADER --- */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backBtn}>
            <Ionicons name="arrow-back" size={24} color="#1A1A1A" />
          </TouchableOpacity>
          <ThemedText style={styles.headerTitle}>All Services</ThemedText>
          <View style={{ width: 40 }} />
        </View>

        {/* --- SEARCH BAR --- */}
        <View style={styles.searchContainer}>
          <View style={styles.inputWrapper}>
            <Ionicons name="search" size={20} color="#9CA3AF" />
            <TextInput
              placeholder="Search..."
              style={styles.input}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        {/* --- FILTERS (Vertical Stack) --- */}
        <View style={styles.filtersContainer}>
          {/* Row 1: Categories */}
          <FlatList
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterRow}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
              const isActive = activeCategory === item;
              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(item)}
                  style={[
                    styles.filterChip,
                    isActive && styles.filterChipActive,
                  ]}>
                  <ThemedText
                    style={[
                      styles.filterText,
                      isActive && styles.filterTextActive,
                    ]}>
                    {item}
                  </ThemedText>
                </TouchableOpacity>
              );
            }}
          />

          {/* Row 2: Sort Options */}
          <View style={{ height: 10 }} />
          <FlatList
            data={sortOptions}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterRow}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
              const isActive = activeSort === item;
              return (
                <TouchableOpacity
                  onPress={() => setActiveSort(item)}
                  style={[styles.sortChip, isActive && styles.sortChipActive]}>
                  <ThemedText
                    style={[
                      styles.sortText,
                      isActive && styles.sortTextActive,
                    ]}>
                    {item}
                  </ThemedText>
                  {isActive && (
                    <Ionicons
                      name="checkmark"
                      size={14}
                      color="#005D63"
                      style={{ marginLeft: 4 }}
                    />
                  )}
                </TouchableOpacity>
              );
            }}
          />
        </View>

        {/* --- MAIN GRID --- */}
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={styles.gridContent}
          columnWrapperStyle={styles.columnWrapper}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.emptyState}>
              <Ionicons name="search-outline" size={50} color="#ccc" />
              <ThemedText style={{ color: "#888", marginTop: 10 }}>
                No services found.
              </ThemedText>
            </View>
          }
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
  // Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1A1A1A",
  },
  // Search
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 50,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  // Filters
  filtersContainer: {
    marginBottom: 10,
  },
  filterRow: {
    paddingHorizontal: 20,
    gap: 10,
  },
  // Category Chips
  filterChip: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  filterChipActive: {
    backgroundColor: "#005D63",
    borderColor: "#005D63",
  },
  filterText: {
    fontSize: 14,
    color: "#666",
  },
  filterTextActive: {
    color: "#FFF",
    fontWeight: "600",
  },
  // Sort Chips (Smaller)
  sortChip: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: "rgba(0, 93, 99, 0.05)", // Very light teal
  },
  sortChipActive: {
    backgroundColor: "rgba(0, 93, 99, 0.15)",
    borderWidth: 1,
    borderColor: "rgba(0, 93, 99, 0.3)",
  },
  sortText: {
    fontSize: 12,
    color: "#005D63",
    fontWeight: "600",
  },
  sortTextActive: {
    color: "#005D63",
  },
  // Grid
  gridContent: {
    padding: 20,
    paddingTop: 10,
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 20,
  },
  // Card
  card: {
    width: COLUMN_WIDTH,
    backgroundColor: "#FFF",
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  imageContainer: {
    height: 120,
    width: "100%",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  ratingBadge: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(255,255,255,0.9)",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    gap: 3,
  },
  ratingText: {
    fontSize: 10,
    fontWeight: "bold",
  },
  cardContent: {
    padding: 12,
  },
  cardTitle: {
    fontSize: 16,
    marginBottom: 4,
    color: "#1A1A1A",
  },
  priceText: {
    fontSize: 14,
    color: "#005D63",
    fontWeight: "bold",
  },
  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
});
