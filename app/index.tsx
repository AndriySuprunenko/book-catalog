import { FlatList, Image, StyleSheet, View } from "react-native";
import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemedText";

// Тимчасові дані (пізніше замінимо на збережені книги)
const books = [
  {
    id: "1",
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 450,
    cover: "https://m.media-amazon.com/images/I/41xShlnTZTL.jpg",
  },
  {
    id: "2",
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt, David Thomas",
    price: 520,
    cover: "https://m.media-amazon.com/images/I/41uPjEenkFL.jpg",
  },
];

export default function HomeScreen() {
  return (
    <ThemedView styles={styles.container}>
      <ThemedText type="title">📚 Моя колекція книг</ThemedText>

      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.cover }} style={styles.cover} />
            <View style={styles.info}>
              <ThemedText type="subtitle">{item.title}</ThemedText>
              <ThemedText>{item.author}</ThemedText>
              <ThemedText type="numbers">{item.price} ₴</ThemedText>
            </View>
          </View>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    borderRadius: 12,
    overflow: "hidden",
  },
  cover: {
    width: 60,
    height: 90,
    borderRadius: 6,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
});
