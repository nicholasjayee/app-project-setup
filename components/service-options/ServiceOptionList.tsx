import { ThemedText } from "@/components/themed-text";
import { Link } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const options = [
  {
    id: "1",
    title: "Washing",
    subtitle: "Standard Cleaning",
    route: "/service-detail",
  },
  {
    id: "2",
    title: "Stain removal",
    subtitle: "Deep Treatment",
    route: "/service-detail",
  },
  {
    id: "3",
    title: "Ironing / Pressing",
    subtitle: "Finishing Touch",
    route: "/ironing-detail",
  },
  {
    id: "4",
    title: "Fabric softening",
    subtitle: "Gentle Care",
    route: "/fabric-softening-detail",
  }, // Linked to new page
  {
    id: "5",
    title: "Handwashing",
    subtitle: "Delicate Fabrics",
    route: "/service-detail",
  },
  {
    id: "6",
    title: "Steam cleaning",
    subtitle: "Sanitizing Clean",
    route: "/service-detail",
  },
  {
    id: "7",
    title: "Carpet cleaning",
    subtitle: "Heavy Duty",
    route: "/service-detail",
  },
  {
    id: "8",
    title: "Shoe cleaning",
    subtitle: "Special Care",
    route: "/service-detail",
  },
  {
    id: "9",
    title: "Bag cleaning",
    subtitle: "Premium Clean",
    route: "/service-detail",
  },
];

export function ServiceOptionList() {
  return (
    <View style={styles.container}>
      {options.map((item) => (
        <Link key={item.id} href={item.route as any} asChild>
          <TouchableOpacity style={styles.optionCard} activeOpacity={0.7}>
            <ThemedText style={styles.title}>{item.title}</ThemedText>
            <ThemedText style={styles.subtitle}>{item.subtitle}</ThemedText>
          </TouchableOpacity>
        </Link>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    gap: 12,
  },
  optionCard: {
    backgroundColor: "#E6EBEB", // Light Grey/Teal background
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#3B4D60",
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
    fontWeight: "400",
  },
});
