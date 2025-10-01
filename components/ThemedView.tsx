import { Colors } from "@/constants/colors";
import { useColorScheme, View } from "react-native";

type ThemedViewProps = {
  styles?: object | object[];
  children?: React.ReactNode;
};

const ThemedView = ({ styles, children }: ThemedViewProps) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <View style={[{ backgroundColor: colors.background }, styles]}>
      {children}
    </View>
  );
};

export default ThemedView;
