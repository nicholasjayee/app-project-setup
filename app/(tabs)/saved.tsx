import { ThemedText } from "@/components/themed-text";
import { Ionicons } from "@expo/vector-icons";
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

// Sample data for saved items
const savedItems = [
  {
    id: "1",
    title: "House Cleaning",
    subtitle: "Tewekoya, Make life Easy",
    image:
      "https://images.unsplash.com/photo-1581578731117-104f2a41272c?q=80&w=200",
    tag: "Subscription",
  },
  {
    id: "2",
    title: "Laundry",
    subtitle: "Washing and Ironing",
    image:
      "https://images.unsplash.com/photo-1545173168-9f1947eebb8f?q=80&w=200",
    tag: "One time",
  },
];

export default function SavedScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <ThemedText type="title" style={styles.headerTitle}>
            Saved Services
          </ThemedText>
        </View>

        <FlatList
          data={savedItems}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />

              <View style={styles.cardContent}>
                <ThemedText type="defaultSemiBold" style={styles.title}>
                  {item.title}
                </ThemedText>
                <ThemedText style={styles.subtitle}>{item.subtitle}</ThemedText>

                <View style={styles.tagContainer}>
                  <ThemedText style={styles.tagText}>{item.tag}</ThemedText>
                </View>
              </View>

              <TouchableOpacity style={styles.actionBtn}>
                <Ionicons name="bookmark" size={24} color="#005D63" />
              </TouchableOpacity>
            </View>
          )}
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
});
