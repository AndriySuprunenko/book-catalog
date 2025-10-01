import { FlatList, StyleSheet } from "react-native";
import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemedText";
import ThemedCard from "@/components/ThemedCard";

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
  {
    id: "3",
    title: "Design Patterns",
    author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
    price: 600,
    cover: "https://m.media-amazon.com/images/I/81IGFC6oFmL._SY522_.jpg",
  },
];

export default function HomeScreen() {
  return (
    <ThemedView styles={styles.container}>
      <ThemedText type="title" style={{ marginBottom: 20 }}>
        📚 Моя колекція книг
      </ThemedText>

      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ThemedCard item={item} />}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
