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
import { SelectionTitle } from "@/components/service-options/SelectionTitle";
import { ServiceHeaderProfile } from "@/components/service-options/ServiceHeaderProfile";
import { ServiceOptionList } from "@/components/service-options/ServiceOptionList";

export default function ServiceOptionsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      {/* Shared Header Layout */}
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          bounces={true}>
          <ServiceHeaderProfile />

          <SelectionTitle />

          <ServiceOptionList />
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
  headerImage: {
    width: "100%",
    height: 280, // Slightly shorter than the detail page
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
    paddingHorizontal: 20,
    paddingTop: 30,
    overflow: "hidden", // Ensures scroll view respects corners
  },
  scrollContent: {
    paddingBottom: 40,
  },
});
