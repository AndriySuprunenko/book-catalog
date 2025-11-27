import { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemedText";
import ThemedCard from "@/components/ThemedCard";
import { useIsFocused } from "@react-navigation/native"; // щоб оновлювати список при поверненні

export default function HomeScreen() {
  const [books, setBooks] = useState<any[]>([]);
  const isFocused = useIsFocused();

  // Завантажуємо книги з AsyncStorage
  const loadBooks = async () => {
    try {
      const storedBooks = await AsyncStorage.getItem("books");
      if (storedBooks) {
        setBooks(JSON.parse(storedBooks));
      } else {
        setBooks([]);
      }
    } catch (error) {
      console.error("Помилка при завантаженні книг:", error);
    }
  };

  useEffect(() => {
    if (isFocused) loadBooks(); // оновлення при поверненні на екран
  }, [isFocused]);

  return (
    <ThemedView styles={styles.container}>
      <ThemedText type="title" style={{ marginBottom: 20 }}>
        📚 Моя колекція книг
      </ThemedText>

      {books.length === 0 ? (
        <ThemedText>Поки немає доданих книг.</ThemedText>
      ) : (
        <FlatList
          data={books}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ThemedCard item={item} />}
        />
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
