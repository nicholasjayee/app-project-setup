import { ThemedText } from "@/components/themed-text";
import { SERVICES_DATA } from "@/constants/services-data";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

// Components
import { OptionsToggle } from "@/components/service-detail/OptionsToggle";
import { PaymentSummary } from "@/components/service-detail/PaymentSummary";
import { QuantitySelector } from "@/components/service-detail/QuantitySelector";
import { ServiceInfo } from "@/components/service-detail/ServiceInfo";
import { SubmitButton } from "@/components/service-detail/SubmitButton";

export default function ServiceDetailScreen() {
  const router = useRouter();
  const { id, optionId } = useLocalSearchParams();

  // 1. Find the Parent Service (e.g. Car Wash)
  const parentService = SERVICES_DATA.find((s) => s.id === id);

  if (!parentService) {
    return (
      <View style={styles.center}>
        <ThemedText>Service not found.</ThemedText>
      </View>
    );
  }

  // 2. Logic: Determine if we are showing the main service or a specific sub-option
  let activeService = parentService;

  if (optionId && parentService.subCategories) {
    const selectedOption = parentService.subCategories.find(
      (opt) => opt.id === optionId,
    );

    if (selectedOption) {
      activeService = {
        ...parentService,
        title: selectedOption.name, // e.g. "Exterior wash"
        subtitle: "Tewekoya, Make life Easy", // Matching screenshot subtitle
        pricing: {
          ...parentService.pricing,
          oneTimePrice: selectedOption.price,
        },
      };
    }
  }

  // 3. State Management
  const [quantity, setQuantity] = useState(1);
  const [isPickup, setIsPickup] = useState(true); // Default to Pickup as per screenshot

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      {/* Header Image - Always show the Parent Service Cover */}
      <ImageBackground
        source={{ uri: parentService.coverImage }}
        style={styles.headerImage}
        resizeMode="cover">
        <SafeAreaView style={styles.headerSafeArea}>
          <View style={styles.headerNav}>
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.backButton}>
              <Ionicons name="chevron-back" size={28} color="white" />
            </TouchableOpacity>

            {/* Header Title is usually the Category (Car Wash) */}
            <ThemedText style={styles.headerTitle}>
              {parentService.title}
            </ThemedText>

            <View style={{ width: 28 }} />
          </View>
        </SafeAreaView>
      </ImageBackground>

      {/* Content Sheet */}
      <View style={styles.contentSheet}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollInner}>
          {/* Service Info (Title: Exterior Wash) */}
          <ServiceInfo service={activeService} />

          {/* Toggle: Pickup vs In House */}
          <OptionsToggle isPickup={isPickup} onToggle={setIsPickup} />

          <View style={styles.divider} />

          {/* Quantity Selector with Thumbnail */}
          <QuantitySelector
            title={activeService.title}
            unitName={activeService.pricing.unitName}
            image={activeService.thumbnail}
            quantity={quantity}
            onIncrease={() => setQuantity((q) => q + 1)}
            onDecrease={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
          />

          <View style={styles.divider} />

          {/* Totals with Pickup Fee Logic */}
          <PaymentSummary
            pricing={activeService.pricing}
            quantity={quantity}
            isPickup={isPickup}
          />

          <View style={{ height: 20 }} />

          <View style={styles.footer}>
            <SubmitButton onPress={() => console.log("Booking Submitted")} />
          </View>
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
    height: 300, // Taller header
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
    marginTop: -40, // Negative margin to overlap
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
  },
  scrollInner: {
    paddingHorizontal: 25,
    paddingTop: 30,
    paddingBottom: 40,
  },
  divider: {
    height: 1,
    backgroundColor: "#EEEEEE",
    marginVertical: 20,
  },
  footer: {
    marginTop: 10,
  },
});
