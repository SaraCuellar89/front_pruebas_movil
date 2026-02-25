import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const Formu_Subir_Post = () => {

  const [dificultad, setDificultad] = useState("Facil");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Subir Receta 🍲</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Título</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: Ajiaco Santafereño"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>URL de Imagen</Text>
        <TextInput
          style={styles.input}
          placeholder="https://ejemplo.com/imagen.jpg"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Descripción</Text>
        <TextInput
          style={[styles.input, styles.multiline]}
          multiline
          numberOfLines={3}
          placeholder="Describe tu receta..."
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Ingredientes</Text>
        <TextInput
          style={[styles.input, styles.multiline]}
          multiline
          numberOfLines={4}
          placeholder="• Papa criolla..."
        />
      </View>

      <View style={styles.row}>
        <View style={styles.halfInput}>
          <Text style={styles.label}>Tiempo</Text>
          <TextInput
            style={styles.input}
            placeholder="45 min"
          />
        </View>

        <View style={styles.halfInput}>
          <Text style={styles.label}>Dificultad</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={dificultad}
              onValueChange={(itemValue) => setDificultad(itemValue)}
            >
              <Picker.Item label="Fácil" value="Facil" />
              <Picker.Item label="Media" value="Media" />
              <Picker.Item label="Difícil" value="Dificil" />
            </Picker>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Publicar</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 30,
    backgroundColor: "#f5f7fa",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 25,
    color: "#222",
  },
  inputContainer: {
    marginBottom: 18,
  },
  label: {
    marginBottom: 6,
    fontSize: 14,
    color: "#555",
  },
  input: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 15,
  },
  multiline: {
    textAlignVertical: "top",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  halfInput: {
    width: "48%",
  },
  pickerContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    backgroundColor: "#f6c23e",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Formu_Subir_Post;