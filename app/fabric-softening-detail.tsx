//x-50
import { ThemedText } from "@/components/themed-text";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
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

// Components we will create next
import { FabricSofteningInfo } from "@/components/fabric-softening-detail/FabricSofteningInfo";
import { FabricSofteningPayment } from "@/components/fabric-softening-detail/FabricSofteningPayment";
import { FabricSofteningQuantity } from "@/components/fabric-softening-detail/FabricSofteningQuantity";
import { PickupOnlyBtn } from "@/components/fabric-softening-detail/PickupOnlyBtn";
import { SubmitButton } from "@/components/service-detail/SubmitButton"; // Reuse generic submit button

export default function FabricSofteningDetailScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        bounces={true}>
        {/* Header Section */}
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=1000",
          }}
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
          <FabricSofteningInfo />

          <PickupOnlyBtn />

          <View style={styles.divider} />

          <FabricSofteningQuantity />

          <View style={styles.divider} />

          <FabricSofteningPayment />

          <View style={{ height: 20 }} />

          <SubmitButton />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FB",
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  headerImage: {
    width: "100%",
    height: 320,
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
    backgroundColor: "#FFFFFF",
    marginTop: -50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 25,
    paddingTop: 30,
    paddingBottom: 20,
    minHeight: 500,
  },
  divider: {
    height: 1,
    backgroundColor: "#EEEEEE",
    marginVertical: 25,
  },
});
