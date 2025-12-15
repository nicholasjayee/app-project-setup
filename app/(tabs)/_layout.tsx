import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#005D63", // Deep Teal
        tabBarInactiveTintColor: "#C7C7CC", // Light Grey
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarShowLabel: false, // Hide text labels for a cleaner look
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderTopWidth: 0,
          },
          default: {
            backgroundColor: "#FFFFFF",
            borderTopWidth: 0,
            elevation: 8,
            height: 65,
            paddingTop: 10,
          },
        }),
      }}>
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />

      {/* Saved / Bookmarks Tab */}
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="bookmark.fill" color={color} />
          ),
        }}
      />

      {/* Profile Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person.fill" color={color} />
          ),
        }}
      />

      {/* Hide the old Explore tab if the file still exists */}
      <Tabs.Screen
        name="explore"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
