import { ThemedText } from "@/components/themed-text";
import { Ionicons } from "@expo/vector-icons";
import {
  Alert,
  Linking,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

export function CallButton() {
  const supportNumber = "+256700000000"; // Replace with your actual support number

  const handleCall = async () => {
    const url = `tel:${supportNumber}`;

    // Check if the device can handle the call (Simulators often can't)
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert("Error", "Your device does not support making calls");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={handleCall}>
        <Ionicons name="call" size={20} color="#005D63" style={styles.icon} />
        <ThemedText style={styles.text}>Call Support</ThemedText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 40, // Increased bottom margin for scrolling space
  },
  button: {
    backgroundColor: "#FFFFFF",
    width: "80%",
    paddingVertical: 18,
    borderRadius: 16,
    flexDirection: "row", // Align icon and text
    alignItems: "center",
    justifyContent: "center",
    // Strong Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 15,
    elevation: 6,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    color: "#005D63", // Deep Teal to match app theme
    fontWeight: "bold",
    fontSize: 18,
  },
});
