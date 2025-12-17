import { ThemedText } from "@/components/themed-text";
import { SERVICES_DATA } from "@/constants/services-data";
import { Ionicons } from "@expo/vector-icons";
import { Link, Stack, useLocalSearchParams, useRouter } from "expo-router";
import {
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

export default function ServiceOptionsScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  // Find the parent service
  const service = SERVICES_DATA.find((s) => s.id === id);

  if (!service) {
    return (
      <View style={styles.center}>
        <ThemedText>Service not found</ThemedText>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      {/* Header Image */}
      <ImageBackground
        source={{ uri: service.coverImage }}
        style={styles.headerImage}
        resizeMode="cover">
        <SafeAreaView style={styles.headerSafeArea}>
          <View style={styles.headerNav}>
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.backButton}>
              <Ionicons name="chevron-back" size={28} color="white" />
            </TouchableOpacity>
            <ThemedText style={styles.headerTitle}>Service Detail</ThemedText>
            <View style={{ width: 28 }} />
          </View>
        </SafeAreaView>
      </ImageBackground>

      {/* White Content Sheet */}
      <View style={styles.contentSheet}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>
          {/* Service Identity Section (Thumbnail + Title) */}
          <View style={styles.identityRow}>
            <Image
              source={{ uri: service.thumbnail }}
              style={styles.thumbnail}
            />
            <View>
              <ThemedText type="defaultSemiBold" style={styles.serviceTitle}>
                {service.title}
              </ThemedText>
              <ThemedText style={styles.serviceSubtitle}>
                {service.subtitle}
              </ThemedText>
            </View>
          </View>

          {/* "How can we help you?" Box */}
          <View style={styles.helpBox}>
            <ThemedText style={styles.helpText}>
              How can we help you ?
            </ThemedText>
          </View>

          {/* Options List */}
          <View style={styles.listContainer}>
            {service.subCategories?.map((option) => (
              <Link
                key={option.id}
                href={{
                  pathname: "/service-detail",
                  params: { id: service.id, optionId: option.id },
                }}
                asChild>
                <TouchableOpacity style={styles.optionCard} activeOpacity={0.7}>
                  <ThemedText style={styles.optionName}>
                    {option.name}
                  </ThemedText>
                  <ThemedText style={styles.optionDesc}>
                    {option.description}
                  </ThemedText>
                </TouchableOpacity>
              </Link>
            ))}
          </View>

          {/* Bottom Padding */}
          <View style={{ height: 20 }} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FB",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerImage: {
    width: "100%",
    height: 250, // Height based on image ratio
  },
  headerSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  headerNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
  contentSheet: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: -40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
  },
  scrollContent: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },

  // Identity Section
  identityRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
    gap: 15,
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: "#eee",
  },
  serviceTitle: {
    fontSize: 18,
    color: "#000",
    marginBottom: 4,
  },
  serviceSubtitle: {
    fontSize: 13,
    color: "#666",
  },

  // Help Box
  helpBox: {
    borderWidth: 1.5,
    borderColor: "#005D63", // Teal Border
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
    backgroundColor: "#FFFFFF",
  },
  helpText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#005D63", // Teal Text
  },

  // List Items
  listContainer: {
    gap: 12,
  },
  optionCard: {
    backgroundColor: "#E8EEF1", // Light Grey/Blue background from image
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionName: {
    fontSize: 15,
    fontWeight: "700",
    color: "#2C3E50", // Dark Blue-ish Grey
  },
  optionDesc: {
    fontSize: 14,
    color: "#7F8C8D", // Grey
    fontWeight: "400",
  },
});
