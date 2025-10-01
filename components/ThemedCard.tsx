import { Image, StyleSheet, useColorScheme, View } from "react-native";
import ThemedText from "@/components/ThemedText";
import { Colors } from "@/constants/colors";

type Book = {
  id: string;
  title: string;
  author: string;
  price: number;
  cover: string;
};

type ThemedCardProps = {
  item: Book;
};
const ThemedCard = ({ item }: ThemedCardProps) => {
  const colorscheme = useColorScheme();
  const colors = Colors[colorscheme || "light"];

  return (
    <View style={[styles.card, { backgroundColor: colors.surface }]}>
      <Image source={{ uri: item.cover }} style={styles.cover} />
      <View style={styles.info}>
        <ThemedText type="subtitle">{item.title}</ThemedText>
        <ThemedText>{item.author}</ThemedText>
        <ThemedText type="numbers">{item.price} ₴</ThemedText>
      </View>
    </View>
  );
};

export default ThemedCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 16,
    borderRadius: 12,
    overflow: "hidden",
  },
  cover: {
    width: 150,
    height: 200,
    borderRadius: 6,
    marginRight: 12,
  },
  info: {
    flex: 1,
    paddingVertical: 10,
  },
});
