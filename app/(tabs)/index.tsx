import { useState } from "react"; // 1. Import useState
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

import { CallButton } from "@/components/home/CallButton";
import { CategoryFilter } from "@/components/home/CategoryFilter";
import { HomeHeader } from "@/components/home/HomeHeader";
import { PopularServices } from "@/components/home/PopularServices";
import { SearchBar } from "@/components/home/SearchBar";
import { SeeMoreSection } from "@/components/home/SeeMoreSection";

export default function HomeScreen() {
  // 2. Lift State Up: Manage category selection here
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          <HomeHeader />

          <SearchBar />

          {/* Popular Services usually stays static or uses its own logic */}
          <PopularServices />

          {/* 3. Pass State down to Filter */}
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          {/* 4. Pass State down to Content Section */}
          <SeeMoreSection selectedCategory={selectedCategory} />

          <CallButton />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F8F9FB",
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
