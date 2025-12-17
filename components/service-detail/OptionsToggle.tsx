// import { ThemedText } from "@/components/themed-text";
// import { ServiceData } from "@/constants/services-data";
// import { StyleSheet, TouchableOpacity, View } from "react-native";

// interface OptionsToggleProps {
//   pricing: ServiceData["pricing"];
//   isSubscription: boolean;
//   onToggle: (val: boolean) => void;
// }

// export function OptionsToggle({
//   pricing,
//   isSubscription,
//   onToggle,
// }: OptionsToggleProps) {
//   // If the service doesn't offer a subscription (price is 0 or null),
//   // we don't show the toggle at all.
//   if (!pricing.subscriptionPrice) return null;

//   return (
//     <View style={styles.container}>
//       {/* One-time Button */}
//       <TouchableOpacity
//         onPress={() => onToggle(false)}
//         activeOpacity={0.8}
//         style={[
//           styles.button,
//           !isSubscription ? styles.activeButton : styles.inactiveButton,
//         ]}>
//         <ThemedText
//           style={!isSubscription ? styles.activeText : styles.inactiveText}>
//           One-time
//         </ThemedText>
//       </TouchableOpacity>

//       {/* Subscription Button */}
//       <TouchableOpacity
//         onPress={() => onToggle(true)}
//         activeOpacity={0.8}
//         style={[
//           styles.button,
//           isSubscription ? styles.activeButton : styles.inactiveButton,
//         ]}>
//         <ThemedText
//           style={isSubscription ? styles.activeText : styles.inactiveText}>
//           Subscription
//         </ThemedText>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     gap: 15,
//     marginBottom: 5,
//   },
//   button: {
//     flex: 1,
//     paddingVertical: 15,
//     borderRadius: 12,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   activeButton: {
//     backgroundColor: "#005D63", // Deep Teal
//   },
//   inactiveButton: {
//     backgroundColor: "#E6EBEB", // Light Greyish Teal
//   },
//   activeText: {
//     color: "#FFFFFF",
//     fontWeight: "600",
//     fontSize: 16,
//   },
//   inactiveText: {
//     color: "#005D63",
//     fontWeight: "600",
//     fontSize: 16,
//   },
// });

import { ThemedText } from "@/components/themed-text";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface OptionsToggleProps {
  isPickup: boolean;
  onToggle: (val: boolean) => void;
}

export function OptionsToggle({ isPickup, onToggle }: OptionsToggleProps) {
  return (
    <View style={styles.container}>
      {/* Pickup Button */}
      <TouchableOpacity
        onPress={() => onToggle(true)}
        activeOpacity={0.8}
        style={[
          styles.button,
          isPickup ? styles.activeButton : styles.inactiveButton,
        ]}>
        <ThemedText style={isPickup ? styles.activeText : styles.inactiveText}>
          Pickup
        </ThemedText>
      </TouchableOpacity>

      {/* In house Button */}
      <TouchableOpacity
        onPress={() => onToggle(false)}
        activeOpacity={0.8}
        style={[
          styles.button,
          !isPickup ? styles.activeButton : styles.inactiveButton,
        ]}>
        <ThemedText style={!isPickup ? styles.activeText : styles.inactiveText}>
          In house
        </ThemedText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 20,
    marginTop: 5,
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  activeButton: {
    backgroundColor: "#005D63", // Dark Teal
  },
  inactiveButton: {
    backgroundColor: "#E8EEF1", // Light Grey/Blue from screenshot
  },
  activeText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
  inactiveText: {
    color: "#005D63",
    fontWeight: "600",
    fontSize: 16,
  },
});
