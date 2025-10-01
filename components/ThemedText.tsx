import { Colors } from "@/constants/colors";
import { Text, useColorScheme, StyleSheet } from "react-native";

type ThemedTextProps = {
  style?: object | object[];
  type?: "title" | "subtitle" | "numbers";
  children?: React.ReactNode;
};

const ThemedText = ({ style, type, children }: ThemedTextProps) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  // Для numbers використовуємо свій колір
  const textColor = type === "numbers" ? colors.numbers : colors.text;

  return (
    <Text style={[{ color: textColor }, styles[type || "default"], style]}>
      {children}
    </Text>
  );
};

export default ThemedText;

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  numbers: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
