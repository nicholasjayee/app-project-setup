import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

import { HomeHeader } from "@/components/home/HomeHeader";
import { SearchBar } from "@/components/home/SearchBar";
import { ServiceGrid } from "@/components/home/ServiceGrid";

export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          <HomeHeader />

          <SearchBar />

          {/* Replaced previous sections with the Grid View */}
          <ServiceGrid />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F8F9FB", // The specific light grey from the design
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 10,
  },
});
