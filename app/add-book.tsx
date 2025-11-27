import { useState } from "react";
import {
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
  useColorScheme,
} from "react-native";
import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemedText";
import { Colors } from "@/constants/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AddBookScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [cover, setCover] = useState("");

  const handleAddBook = async () => {
    if (!title.trim() || !author.trim()) {
      Alert.alert("Помилка", "Будь ласка, заповни назву та автора.");
      return;
    }

    const newBook = {
      id: Date.now().toString(),
      title,
      author,
      price: Number(price) || 0,
      cover: cover || "https://placehold.co/120x180?text=Book",
    };

    try {
      // Отримуємо існуючі книги
      const storedBooks = await AsyncStorage.getItem("books");
      const books = storedBooks ? JSON.parse(storedBooks) : [];

      // Додаємо нову
      const updatedBooks = [newBook, ...books];

      // Зберігаємо оновлений список
      await AsyncStorage.setItem("books", JSON.stringify(updatedBooks));

      Alert.alert("✅ Успіх", `Книга "${title}" додана до колекції.`);
      setTitle("");
      setAuthor("");
      setPrice("");
      setCover("");
    } catch (error) {
      Alert.alert("Помилка збереження", "Не вдалося додати книгу.");
      console.error(error);
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background }}>
      <ThemedView styles={styles.container}>
        <ThemedText type="title">➕ Додати книгу</ThemedText>

        <TextInput
          style={[
            styles.input,
            { color: colors.text, borderColor: colors.text },
          ]}
          placeholder="Назва книги"
          placeholderTextColor={colors.text + "88"}
          value={title}
          onChangeText={setTitle}
        />

        <TextInput
          style={[
            styles.input,
            { color: colors.text, borderColor: colors.text },
          ]}
          placeholder="Автор"
          placeholderTextColor={colors.text + "88"}
          value={author}
          onChangeText={setAuthor}
        />

        <TextInput
          style={[
            styles.input,
            { color: colors.text, borderColor: colors.text },
          ]}
          placeholder="Ціна (₴)"
          placeholderTextColor={colors.text + "88"}
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />

        <TextInput
          style={[
            styles.input,
            { color: colors.text, borderColor: colors.text },
          ]}
          placeholder="URL обкладинки (опціонально)"
          placeholderTextColor={colors.text + "88"}
          value={cover}
          onChangeText={setCover}
        />

        {cover ? (
          <Image source={{ uri: cover }} style={styles.preview} />
        ) : null}

        <Button title="Додати книгу" onPress={handleAddBook} />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 30,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  preview: {
    width: 120,
    height: 180,
    borderRadius: 8,
    alignSelf: "center",
    marginVertical: 8,
  },
});
